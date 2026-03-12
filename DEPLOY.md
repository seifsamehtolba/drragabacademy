# GitHub Pages Deployment

## Setup

1. **Create the repository** on GitHub and push your code.

2. **Enable GitHub Pages**  
   Go to **Settings → Pages** and set:
   - **Source:** GitHub Actions

3. **Deploy**  
   Push to `main` — the workflow builds and deploys automatically.

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
