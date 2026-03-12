# Railway Deployment

## Deploy

1. Go to [railway.app](https://railway.app) and sign in with GitHub.
2. **New Project** → **Deploy from GitHub repo** → select `drragabacademy`.
3. Railway auto-detects Next.js and runs `npm run build` + `npm run start`.
4. Add a **domain** in the service settings (e.g. `drragabacademy.up.railway.app` or a custom domain).

## Environment

Railway sets `PORT` automatically. No extra config needed.

## Custom domain

In the Railway dashboard: **Settings → Networking → Custom Domain** → add your domain and configure DNS as shown.
