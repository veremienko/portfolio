#!/usr/bin/env node
// Renders an HTML file to a single-page PDF (no page breaks) via headless Chrome.
// The paper height is measured from the rendered print layout, so the whole
// document lands on one page. Usage:
//   node scripts/html-to-pdf.mjs public/Andrii_Veremiienko_CV.html public/cv.pdf [--width 820]

import { spawn } from 'node:child_process'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)

const args = process.argv.slice(2)
const flagIdx = args.indexOf('--width')
const width = flagIdx === -1 ? 820 : Number(args[flagIdx + 1])
const positional = args.filter((a, i) => flagIdx === -1 || (i !== flagIdx && i !== flagIdx + 1))
const input = resolve(positional[0] ?? 'public/Andrii_Veremiienko_CV.html')
const output = resolve(positional[1] ?? 'public/cv.pdf')

if (!existsSync(input)) throw new Error(`Input not found: ${input}`)

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p))
if (!chrome) throw new Error('Chrome not found. Set CHROME_PATH.')

const profile = await mkdtemp(join(tmpdir(), 'html2pdf-'))
const proc = spawn(
  chrome,
  [
    '--headless',
    '--disable-gpu',
    '--no-first-run',
    '--remote-debugging-port=0',
    `--user-data-dir=${profile}`,
    'about:blank',
  ],
  { stdio: ['ignore', 'ignore', 'pipe'] },
)

const port = await new Promise((ok, fail) => {
  let buf = ''
  proc.stderr.on('data', (c) => {
    buf += c
    const m = buf.match(/ws:\/\/127\.0\.0\.1:(\d+)\//)
    if (m) ok(m[1])
  })
  proc.on('exit', () => fail(new Error('Chrome exited before DevTools was ready')))
  setTimeout(() => fail(new Error('Timed out waiting for Chrome')), 20000)
})

const target = await (
  await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })
).json()

const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((ok) => ws.addEventListener('open', ok, { once: true }))

let nextId = 0
const pending = new Map()
const events = new Map()
ws.addEventListener('message', (e) => {
  const msg = JSON.parse(e.data)
  if (msg.id !== undefined) {
    const p = pending.get(msg.id)
    pending.delete(msg.id)
    msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result)
  } else {
    events.get(msg.method)?.forEach((fn) => fn(msg.params))
  }
})
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++nextId
    pending.set(id, { resolve, reject })
    ws.send(JSON.stringify({ id, method, params }))
  })
const once = (method) =>
  new Promise((ok) => {
    const list = events.get(method) ?? []
    const fn = (p) => {
      events.set(
        method,
        list.filter((f) => f !== fn),
      )
      ok(p)
    }
    events.set(method, [...list, fn])
  })

await send('Page.enable')
// Lay out at the target paper width, using print styles, so the measured
// height matches what printToPDF will produce.
await send('Emulation.setDeviceMetricsOverride', {
  width,
  height: 1000,
  deviceScaleFactor: 1,
  mobile: false,
})
await send('Emulation.setEmulatedMedia', { media: 'print' })

const loaded = once('Page.loadEventFired')
await send('Page.navigate', { url: pathToFileURL(input).href })
await loaded
await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true })

const { result } = await send('Runtime.evaluate', {
  expression: `Math.ceil(Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight,
    document.body.getBoundingClientRect().height
  ))`,
  returnByValue: true,
})
const height = result.value + 2 // guard against sub-pixel rounding

const { data } = await send('Page.printToPDF', {
  printBackground: true,
  paperWidth: width / 96,
  paperHeight: height / 96,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  preferCSSPageSize: false,
  scale: 1,
})

await writeFile(output, Buffer.from(data, 'base64'))
ws.close()
proc.kill()
await rm(profile, { recursive: true, force: true })

const bytes = (await readFile(output)).length
console.log(`${output}  ${width}x${height}px  ${(bytes / 1024).toFixed(0)} KB  (1 page)`)
