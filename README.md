# Lawson Psychotherapy — lawsonpsych.com

Static marketing site for **Lawson Psychotherapy** (Monica Lawson, PhD), built with SvelteKit and deployed to Netlify.

## Infrastructure (TL;DR)

| Layer              | Choice                     | Notes                                                 |
| ------------------ | -------------------------- | ----------------------------------------------------- |
| **Framework**      | SvelteKit 2.x + Svelte 5   | Static site generation via `@sveltejs/adapter-static` |
| **Build tool**     | Vite 8                     | Requires Node `^20.19 \|\| >=22.12`                   |
| **Styling**        | Tailwind CSS 3 + Sass      | PostCSS pipeline, `@tailwindcss/typography`           |
| **Icons**          | Font Awesome 6             | `@fortawesome/free-solid/regular-svg-icons`           |
| **Hosting**        | **Netlify**                | Production host for `lawsonpsych.com`                 |
| **Runtime**        | Node 22 (LTS)              | Pinned via `netlify.toml`                             |
| **Source control** | GitHub (`jspars/ml-psych`) | `prod` is the default and only branch                 |

**How it fits together:** The repo is the single source of truth. Pushing to the `prod` branch triggers a Netlify build (`npm run build` → static output in `build/`), which Netlify serves at `lawsonpsych.com`. The site is fully static — no server runtime, no database. `base` is `""`, so all assets resolve at the domain root.

> **Note:** GitHub Pages is **not** used for this site. It was a legacy leftover and has been removed. Netlify is the only production host.

---

## Requirements

- **Node.js** `^20.19 || >=22.12` (Vite 8 requirement). Local dev uses v24; Netlify pins v22 via `netlify.toml`.
- **npm** (the lockfile is `package-lock.json`; pnpm/yarn are not used).

## Installation

```bash
npm install
```

## Development

Start the dev server with hot reload:

```bash
npm run dev
# or open in a browser tab
npm run dev -- --open
```

## Build

Create a production build (static output written to `build/`):

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Configuration

| File                 | Purpose                                                                        |
| -------------------- | ------------------------------------------------------------------------------ |
| `svelte.config.js`   | SvelteKit config — `adapter-static`, `base: ""`                                |
| `netlify.toml`       | Netlify build settings — `npm run build`, publish `build/`, `NODE_VERSION=22`  |
| `vite.config.js`     | Vite config                                                                    |
| `tailwind.config.js` | Tailwind theme/content paths                                                   |
| `postcss.config.js`  | PostCSS plugins                                                                |
| `.npmrc`             | `engine-strict=true`                                                           |
| `.prettierrc`        | Prettier formatting                                                            |
| `.eslintrc.cjs`      | ESLint (legacy format; `eslint-plugin-svelte` pinned to 2.x for compatibility) |

### Site content

- **`src/lib/site.js`** — canonical `SITE_URL` and `ROUTES` list, the single source of truth for `sitemap.xml`. Keep `ROUTES` in sync with `src/routes/`.
- **`src/routes/robots.txt/+server.js`** — prerendered `robots.txt`.
- **`src/routes/sitemap.xml/+server.js`** — prerendered `sitemap.xml` from `ROUTES`.

## Deployment

1. Commit changes on `prod` (the default branch).
2. Push to origin — this triggers a Netlify production deploy.
3. Verify at `https://lawsonpsych.com` (all routes, `robots.txt`, `sitemap.xml`).

For larger changes, branch off `prod`, work, then merge back with a `--no-ff` merge commit.

## Project Structure

```
src/
├── lib/
│   ├── components/        # Reusable Svelte components
│   └── site.js            # SITE_URL + ROUTES (sitemap source of truth)
└── routes/
    ├── +layout.svelte     # Root layout
    ├── +page.svelte       # Homepage
    ├── about/             # Page routes
    ├── contact/
    ├── faq/
    ├── fees_and_insurance/
    ├── my_approach/
    ├── privacy/
    ├── psypact/
    ├── publications/
    ├── resources/
    ├── robots.txt/        # Prerendered robots.txt
    └── sitemap.xml/       # Prerendered sitemap.xml
```

## Scripts

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start dev server            |
| `npm run build`   | Production build → `build/` |
| `npm run preview` | Preview production build    |
| `npm run lint`    | Prettier check + ESLint     |
| `npm run format`  | Prettier write              |

## Troubleshooting

- **Build fails on Netlify with a Node version error** — confirm `netlify.toml` has `NODE_VERSION = "22"` (Vite 8 needs `^20.19 || >=22.12`).
- **`/ml-psych` appearing in URLs/assets** — `base` must be `""` in `svelte.config.js`. The site is served at the domain root, not a subpath.
- **ESLint circular-structure error** — `eslint-plugin-svelte` must stay on 2.x (3.x requires flat config, incompatible with the legacy `.eslintrc.cjs`).
