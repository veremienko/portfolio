export interface Job {
  dates: string
  location: string
  role: string
  company: string
  bullets: string[]
}

export const jobs: Job[] = [
  {
    dates: '2021 — 2026',
    location: 'Cherkasy',
    role: 'Project Team Lead',
    company: 'Ekreative',
    bullets: [
      'Lead a cross-functional team, owning delivery end to end — from architecture and estimation through release and production support.',
      'Owned frontend & full-stack delivery for a US telehealth platform: React, TypeScript, Vite, Tailwind — real-time video and secure messaging (Zoom SDK, Twilio, WebSocket).',
      'Designed CI/CD (GitHub Actions) and production monitoring (Datadog, Sentry); drove complex refactors on a large, long-lived codebase.',
      'Introduced AI-assisted workflows (Claude Code, n8n) across the team; mentor through code review, pairing and architecture guidance.',
    ],
  },
  {
    dates: '2019 — 2021',
    location: 'Cherkasy',
    role: 'Web Developer',
    company: 'Ekreative',
    bullets: [
      'Built and maintained production web apps with React, TypeScript, NgRx and modern tooling.',
      'Worked across the stack with designers and backend engineers to ship features end to end.',
    ],
  },
  {
    dates: '2015 — 2019',
    location: 'Cherkasy',
    role: 'Web Developer',
    company: 'Pascalium',
    bullets: [
      'Delivered web and mobile apps for a range of client products, owning frontend implementation.',
      'Built cross-platform mobile apps across full project lifecycles, prototype to release.',
    ],
  },
  {
    dates: '2014 — 2015',
    location: 'Cherkasy',
    role: 'Web Developer',
    company: 'Webkate Ltd',
    bullets: [
      'Developed responsive, cross-browser web interfaces and supported ongoing client projects.',
    ],
  },
]
