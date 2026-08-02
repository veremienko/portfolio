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

## Custom domain (planned: veremiienko.dev)

After buying the domain:

1. Firebase Console → Hosting → Add custom domain → `veremiienko.dev` (check "redirect www").
2. Add the TXT record Firebase shows to the domain's DNS to verify ownership.
3. Add the A records Firebase shows. SSL is provisioned automatically (~15-60 min).
4. Replace `https://veremiienko.web.app` with `https://veremiienko.dev` in `index.html`,
   `public/robots.txt` and `public/sitemap.xml`.

## Deploy

```sh
npm run build
firebase deploy --only hosting
```
