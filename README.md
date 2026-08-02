# Portfolio

Personal portfolio site of Andrii Veremiienko, hosted on Firebase Hosting.

## Structure

- `public/` — static site (HTML, CSS, JS, assets)
- `firebase.json` — Firebase Hosting config

## Local preview

```sh
npx serve public
```

## Deploy

```sh
firebase login
firebase use <project-id>
firebase deploy --only hosting
```
