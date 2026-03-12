# Dr. Ragab Biology Academy

Website for **Dr. Mohamed Ragab**, Egypt's premier IGCSE and A-Level Biology educator. Built with Next.js and deployed to GitHub Pages.

## Tech Stack

- **Next.js 16** (App Router, static export)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** – animations
- **Lucide React** – icons
- **Plus Jakarta Sans** – typography

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

Produces a static export in the `out/` folder.

## Deployment

The site deploys to **GitHub Pages** via GitHub Actions on every push to `main`.

1. In the repo: **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` to trigger a deploy

See [DEPLOY.md](./DEPLOY.md) for custom domain setup and more details.

## Project Structure

```
src/
├── app/           # Next.js App Router (layout, page, styles)
├── components/    # React components
│   ├── ui/        # Reusable UI components
│   └── ...        # Section components (Hero, About, etc.)
public/
├── images/       # Static assets
└── favicon/      # Favicons
```

## License

Private – Dr. Ragab Biology Academy.
