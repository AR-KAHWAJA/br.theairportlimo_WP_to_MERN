# BlinkRide MERN Rebuild

This repository contains a MERN conversion of the BlinkRide WordPress site from
`https://br.theairportlimo.com/`.

## What Is Included

- React/Vite frontend with the visible WordPress pages rebuilt:
  - `/`
  - `/get-the-app/`
  - `/services/`
  - `/customers/`
  - `/drivers/`
  - `/affiliates/`
  - `/about-us/`
  - `/fleet/`
  - `/contact-us/`
- Express API server with endpoints for contact and reservation form submissions.
- Optional MongoDB persistence through `MONGODB_URI`.
- WordPress media recovered from the `.wpress` backup and stored in
  `client/public/assets`.
- Migration notes in `docs/wordpress-to-mern.md`.

## Setup

```bash
npm install
copy .env.example .env
npm run dev
```

The React app runs on `http://localhost:5173` and proxies API calls to the
Express server on `http://localhost:5001` by default.

## Production Build

```bash
npm run build
npm start
```

The Express server serves `client/dist` in production on
`http://localhost:5001` by default. The port was moved from `5000` to avoid the
`EADDRINUSE` conflict shown when another local service is already using port
`5000`. If the preferred port is busy, the server now tries the next available
port and prints the URL in the terminal.

## Environment

```env
PORT=5001
CLIENT_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/blinkride
```

If `MONGODB_URI` is not set, the API falls back to in-memory storage so the
frontend still works locally. To enable live MongoDB persistence, add the
official `mongodb` npm package and set `MONGODB_URI`.
