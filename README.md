# BEAUTY Salon Node App

Express backend for the BEAUTY Salon frontend. The server serves the static pages from `public/` and exposes JSON APIs under `/api`.

## Local Run

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Docker Run

```bash
docker build -t app .
docker run -p 3000:3000 app
```

## Environment

Copy `.env.example` to `.env` for local changes. Defaults are already safe for local development:

```bash
PORT=3000
CLIENT_URL=http://localhost:3000
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
DATA_FILE=data/salon_state.json
```

Render sets `PORT` automatically, and the server reads it from `process.env.PORT`.
If you rename the Render service, update `CLIENT_URL` and `CORS_ORIGINS` in `render.yaml`; same-origin requests are also allowed automatically.
