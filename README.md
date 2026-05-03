# ioSoil Static Translations

This app uses fully hardcoded, local translations in `app.js`.
No translation API calls are made at runtime and no API key is required.

Setup

Create a `.env` file (optional):

```
PORT=3000
```

Run locally:

```bash
npm install
npm run dev   # or npm start
```

Open http://localhost:3000.

Notes

- Language selection is handled client-side via `localStorage` (`site-lang`).
- Supported UI languages are defined in `app.js` and mapped to the selector in `index.html`.
- To edit translations, update the `translations` object in `app.js`.
