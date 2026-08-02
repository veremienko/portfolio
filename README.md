# Portfolio

Personal portfolio site of Andrii Veremiienko. Vite + React + TypeScript, hosted on Firebase Hosting.

## Structure

- `src/components/` — one component per page section
- `src/data/` — site content (jobs, projects, skills, education)
- `src/styles/` — one stylesheet per section
- `src/hooks/` — shared hooks
- `firebase.json` — Firebase Hosting config (serves `dist`)

## Development

```sh
npm install
npm run dev
```

## Deploy

```sh
npm run build
firebase deploy --only hosting
```
