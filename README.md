# Convertra AudioCore — website

Production landing & licensing site for **Convertra AudioCore**, the on-device DSP
engine for musical key, tempo and Camelot detection. Built to sell the *technology*
(licensing, white-label, partnership, investment, acquisition) — not to sell an app
download.

- **Stack:** [Astro](https://astro.build) (static output), zero client framework, self-hosted Inter.
- **Languages:** RU / EN / ES via a client-side toggle (mirrors the app), EN is the crawlable default.
- **Hosting:** Cloudflare Pages, free tier, `*.pages.dev`.
- **Design:** dark-first, brand tokens lifted from the app (`UI/Theme.swift`): graphite `#0B0C0F`, violet `#676CF4`, amber `#EFA831`.

## Requirements

- Node.js 18+ (built on Node 24)
- npm

## Run locally

```bash
npm install
npm run dev            # http://localhost:4321
```

## Build & preview production

```bash
npm run build          # -> dist/  (static site + sitemap + optimized images)
npm run preview        # serve dist/ locally
npm run check          # astro + TypeScript diagnostics (0 errors)
```

## Deploy to Cloudflare Pages (free, no VPS)

You need to authenticate with **your existing Cloudflare account** once — that step
is yours (it opens a browser login); everything else is scripted.

### Option A — Wrangler CLI (fastest, direct upload)

```bash
npm install -D wrangler         # already devDependency-ready; or: npm i -g wrangler
npx wrangler login              # opens browser -> log in to your Cloudflare account
npm run build
npx wrangler pages deploy dist --project-name=convertra
```

The first deploy creates the project and prints the live `https://convertra.pages.dev` URL.
Re-running the last two lines redeploys.

### Option B — GitHub + Cloudflare Pages (automatic CI deploys)

1. Create a GitHub repo and push this folder (see below).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Save and Deploy.** Every push to `main` now auto-deploys.

```bash
git init && git add -A && git commit -m "Convertra AudioCore site"
git branch -M main
git remote add origin https://github.com/<you>/convertra-site.git
git push -u origin main
```

### Custom domain (optional, later)

Pages → your project → **Custom domains** → add a domain you own. Not required — the
free `*.pages.dev` URL is fully functional. If you set a domain, also update
`SITE_URL` (see below) so canonical/OG/sitemap URLs match.

```bash
SITE_URL=https://your-domain.com npm run build
```

## Updating content

- **All copy (3 languages):** [`src/data/i18n.ts`](src/data/i18n.ts) — one flat key per string, `en` / `ru` / `es` objects. Keep keys identical across the three.
- **Contacts / CTA inquiry emails:** [`src/data/site.ts`](src/data/site.ts).
- **Screenshots:** replace files in [`src/assets/`](src/assets/) (Astro re-optimizes to WebP on build).
- **Comparison table rows:** [`src/components/Comparison.astro`](src/components/Comparison.astro).
- **Metrics:** hero + performance pull from the `metric.*` keys in `i18n.ts`.
- **OG image:** regenerate with `node scripts/make-og.mjs` after editing the SVG in that file.
- **Favicon:** [`public/favicon.svg`](public/favicon.svg) (+ PNG sizes in `public/`).

## Project structure

```text
convertra-site/
├── astro.config.mjs         # site URL, sitemap, HTML compression
├── scripts/make-og.mjs      # generates public/og-image.png
├── public/                  # static: favicons, fonts, robots, _headers, manifest, og
│   ├── fonts/               # Inter (from the app bundle)
│   ├── favicon.svg · favicon-16/32 · apple-touch-icon · icon-192/512
│   ├── og-image.png · site.webmanifest · robots.txt · _headers
├── src/
│   ├── assets/              # app screenshots + brand marks (build-optimized)
│   ├── data/
│   │   ├── i18n.ts          # RU/EN/ES dictionary + t() helper
│   │   └── site.ts          # founder contacts + scoped mailto inquiries
│   ├── styles/global.css    # design system (brand tokens, Inter, primitives)
│   ├── layouts/Base.astro   # <head>, SEO/OG/JSON-LD, i18n + reveal scripts
│   ├── components/          # Nav, Hero, Technology, Performance, Showcase,
│   │                        #   Comparison, Business, Founder, Faq, Contact, Footer
│   └── pages/index.astro    # single localized landing page
└── dist/                    # build output (deploy this)
```

## Notes on claims

Every metric on the site is sourced from the app's own benchmark
(`HANDOFF.md` / `README.md` in the Convertra repo): ~70% exact Camelot, ~83% harmonic,
~82% BPM ±0.5, ~1 s/track (release), 100% on-device, ~336 KB universal binary,
validated on 1000+ commercial tracks vs Mixed In Key. No unverified specs were invented.
Only Mixed In Key and rekordbox are named (nominative fair use, factual context) with an
explicit non-affiliation / trademark note; Serato and Traktor are deliberately not compared.
