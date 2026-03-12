# GitHub Pages Deployment

## Setup

1. **Enable GitHub Pages**  
   Go to **Settings → Pages** in your repo and under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `(root)`

2. **Deploy**  
   Push to `main` — the workflow builds and pushes to `gh-pages` automatically. Or run manually: **Actions → Deploy to GitHub Pages → Run workflow**.

   The first run creates the `gh-pages` branch; the site will be live within a minute.

## URLs

- **Project site:** `https://<username>.github.io/<repo-name>/`
- **Custom domain:** Configure in Settings → Pages after DNS is set up.

## Custom domain or user site

If using a custom domain (e.g. drragabacademy.com) or a user/org site (`username.github.io`), set `BASE_PATH` to an empty string in `.github/workflows/deploy.yml`:

```yaml
env:
  BASE_PATH: ""
```

## Manual deploy

```bash
npm run build
# Output is in the out/ folder
```
