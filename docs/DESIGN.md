# Lawson Psychotherapy — Frontend Redesign Spec

> **Status:** Working draft. This is a living document, not a design bible.
> Iterate freely; nothing here is frozen until the redesign ships.
>
> **Branch:** `redesign/theme` (integration) → merges to `prod` when ready.
> Topic branches: `redesign/tokens`, `redesign/layout`, `redesign/a11y`, `redesign/assets`.

---

## 1. Why we're redesigning

The current site grew organically while learning Svelte and Tailwind. The result is
functional but visually inconsistent: theme variables are defined and then ignored,
link colors fall outside the palette, fonts are unsubsetted, and components are
scattered between `src/lib/components/` and `src/routes/`.

The business card (created after the site) established a clear, calm, editorial
identity. This redesign brings the site into alignment with it — one coherent
theme, built on a token layer, with accessibility as a first-class requirement
rather than an afterthought.

**Guiding principles**

1. **Calm and editorial.** Generous whitespace, restrained color, no visual noise.
2. **Dependency-minimal.** Prefer platform features (modern CSS, native APIs) over
   libraries. Every dependency must justify itself.
3. **Accessible by default.** WCAG 2.2 AA minimum. Accessibility is a design
   constraint, not a cleanup pass.
4. **Affirming.** The practice serves marginalized communities. The design should
   carry that with dignity — never as decoration.
5. **Sovereign.** No third-party requests for fonts, analytics, or assets.

---

## 2. Current state (audit)

### 2.1 Styling

- `src/app.css` defines `--primary`, `--secondary`, `--accent`, etc. — **almost none
  are used.** Actual styles hardcode `#EEF4ED`, `#212529`, and an off-palette
  orange link color (`#ff5a22`).
- A large commented-out block of Bootstrap-era variables remains.
- Tailwind is imported (`@tailwind base/components/utilities`) but the utility
  classes in markup are ad-hoc, with magic values and no semantic layer.
- `tailwind.config.js` extends nothing; only `@tailwindcss/typography` is added.

### 2.2 Fonts

- **~27 MB of unsubsetted `.ttf` files** in `static/fonts/`.
- `NanumMyeongjo-*.ttf` (a Korean typeface) accounts for ~12 MB and is used for
  Latin headings only.
- Roboto is loaded in 10 weights/styles, most of which are unused.
- No `preload`, no `font-display`, no subsetting, no WOFF2.

### 2.3 Structure

- Components split between `src/lib/components/` and `src/routes/`.
- `NewHero.svelte` and `OldHero.svelte` both live in `src/routes/`.
- `.DS_Store` files are tracked in git.
- Content (services, nav, copy) is hardcoded in markup rather than data.

### 2.4 Accessibility

- No skip link, no landmarks beyond a bare `<main>`.
- No visible focus styles defined.
- No `prefers-reduced-motion` handling.
- Contrast of the card's sage/lavender on cream would fail AA for text.
- No `alt` text strategy documented.

---

## 3. Design tokens

Tokens are the foundation. Everything else consumes them. Defined as CSS custom
properties in `src/styles/_tokens.scss`, with semantic aliases so a dark mode is a
token swap rather than a rewrite.

### 3.1 Color

Derived from the business card. **Two tiers:** raw palette (never used directly in
components) and semantic tokens (what components actually reference).

**Raw palette**

| Token             | Hex       | Source on card    | Notes               |
| ----------------- | --------- | ----------------- | ------------------- |
| `--ink`           | `#1B3A5C` | Wordmark navy     | Primary brand color |
| `--ink-deep`      | `#12283D` | —                 | Text-safe navy      |
| `--sage`          | `#B5B49A` | Back-panel ground | Decorative only     |
| `--sage-deep`     | `#6E6D57` | —                 | Text-safe sage      |
| `--cream`         | `#EDEBE4` | Card base         | Page background     |
| `--paper`         | `#F7F6F1` | —                 | Raised surfaces     |
| `--lavender`      | `#8B7FB8` | QR / monogram     | Accent, decorative  |
| `--lavender-deep` | `#5F5488` | —                 | Text-safe accent    |

**Semantic tokens**

| Token              | Light value       | Purpose               |
| ------------------ | ----------------- | --------------------- |
| `--text`           | `--ink-deep`      | Body text             |
| `--text-muted`     | `--sage-deep`     | Secondary text        |
| `--text-inverse`   | `--cream`         | Text on dark surfaces |
| `--surface`        | `--cream`         | Page background       |
| `--surface-raised` | `--paper`         | Cards, panels         |
| `--surface-accent` | `--sage`          | Section bands         |
| `--border`         | `--sage` @ 40%    | Hairlines             |
| `--link`           | `--lavender-deep` | Links                 |
| `--focus`          | `--lavender-deep` | Focus rings           |

> **Contrast rule:** `--sage` and `--lavender` are **decorative only**. Any text
> uses the `-deep` variants. This is enforced by convention and checked in the
> a11y pass.

### 3.2 Typography

Three roles, matching the card.

| Role    | Face                        | Use             | Weights       |
| ------- | --------------------------- | --------------- | ------------- |
| Display | **Playfair Display**        | Wordmark, `h1`  | 600, 700      |
| Script  | **Sacramento** (or similar) | Signature only  | 400           |
| Body    | **Inter**                   | Everything else | 400, 500, 600 |

- Self-hosted, **WOFF2**, **subset to Latin**.
- `font-display: swap`; preload the body face only.
- Fluid type scale via `clamp()`.

```
--step--1: clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem);
--step-0:  clamp(1rem,   0.96rem + 0.2vw, 1.125rem);
--step-1:  clamp(1.25rem, 1.2rem + 0.3vw, 1.4rem);
--step-2:  clamp(1.56rem, 1.45rem + 0.55vw, 1.9rem);
--step-3:  clamp(1.95rem, 1.75rem + 1vw, 2.6rem);
--step-4:  clamp(2.44rem, 2.1rem + 1.7vw, 3.5rem);
```

### 3.3 Space, radius, shadow, motion

```
--space-3xs: 0.25rem;  --space-2xs: 0.5rem;  --space-xs: 0.75rem;
--space-s:   1rem;     --space-m:   1.5rem;  --space-l:  2.5rem;
--space-xl:  4rem;     --space-2xl: 6rem;

--radius-s: 4px;  --radius-m: 8px;  --radius-l: 16px;  --radius-full: 999px;

--shadow-s: 0 1px 2px rgb(18 40 61 / 0.06);
--shadow-m: 0 4px 12px rgb(18 40 61 / 0.08);
--shadow-l: 0 12px 32px rgb(18 40 61 / 0.10);

--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--dur-fast: 150ms;  --dur-base: 250ms;  --dur-slow: 400ms;
```

---

## 4. Architecture

### 4.1 Styling approach

**Tailwind is removed.** Replaced with SCSS + tokens.

```
src/styles/
├── _tokens.scss       # raw + semantic custom properties
├── _reset.scss        # modern reset
├── _typography.scss   # @font-face + type styles
├── _layout.scss       # container, grid, section primitives
├── _utilities.scss    # the few genuinely reusable helpers
└── app.scss           # entry point
```

Components use scoped `<style lang="scss">` blocks that consume tokens. Svelte
scopes them automatically, so there is no global class-name collision risk.

**Removed dependencies:** `tailwindcss`, `postcss`, `autoprefixer`,
`@tailwindcss/typography`. **Kept:** `sass`.

### 4.2 Component structure

```
src/lib/
├── components/
│   ├── primitives/    # Button, Card, Icon, Container, Section, Prose
│   ├── layout/        # Header, Footer, Nav, SkipLink, PageShell
│   └── sections/      # Hero, ServiceGrid, AffirmingBanner, CTA
├── data/              # site.js, nav.js, services.js, copy.js
└── utils/             # a11y.js, motion.js
```

- **Content as data.** Services, nav, and copy live in `src/lib/data/`. Pages
  compose from data. `ROUTES` in `site.js` stays the single source of truth for
  `sitemap.xml`.
- **Primitives are dumb; sections are smart.** Primitives take props; sections
  compose primitives and own content.
- **`+layout.svelte` owns the shell** (skip link, header, footer, `<main>`).

### 4.3 Motion

Dependency-free. CSS transitions/keyframes plus a ~15-line `IntersectionObserver`
helper for scroll reveals. **All motion gated behind `prefers-reduced-motion`.**

---

## 5. Accessibility requirements

Target: **WCAG 2.2 AA**, with AAA on body text contrast where feasible.

- [ ] Contrast: body text ≥ 4.5:1; large text ≥ 3:1; UI components ≥ 3:1.
- [ ] Color is never the sole carrier of meaning (pair with text/shape).
- [ ] Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
- [ ] One `<h1>` per page; logical heading order.
- [ ] Skip-to-content link as the first focusable element.
- [ ] Visible focus rings on all interactive elements (never bare `outline: none`).
- [ ] Full keyboard operability; logical tab order.
- [ ] `prefers-reduced-motion` respected.
- [ ] `prefers-color-scheme` — dark mode via token swap.
- [ ] Meaningful `alt` text; `alt=""` for decorative images.
- [ ] Form labels, error messaging, and `aria-live` (when contact form returns).
- [ ] Colorblind support: affirming iconography always paired with labels.

---

## 6. Assets

Generated in Canva; integrated here. Export as **WebP**, with explicit
`width`/`height` to prevent layout shift.

| Asset            | Purpose                          | Notes                                                   |
| ---------------- | -------------------------------- | ------------------------------------------------------- |
| Hero background  | Landing hero                     | Low-contrast botanical; needs negative space for text   |
| Service icons    | Individual / Affirming / Couples | Thin-line, single stroke weight, navy                   |
| Affirming banner | Dedicated section                | Pride/trans/intersex/BLM/feminist, treated with dignity |
| Lavender texture | Reusable background              | Low opacity, like the card                              |
| LP monogram      | Favicon + logo mark              | Navy/lavender treatment                                 |

---

## 7. New page: Privacy & data

A short, slightly informal page explaining how the site and practice handle
visitor data. **Ships with the redesign.** Linked from the footer, not the main
nav.

**Content outline (draft):**

- Plain-language statement of the practice's commitment to visitor privacy.
- What the site does _not_ do: no analytics, no tracking pixels, no third-party
  font/CDN requests, no cookies.
- What the site _does_: self-hosted fonts, static hosting, no data collection.
- How to reach out with privacy questions.

**Tone:** warmer and less formal than the main pages — a human note, not a legal
document. Distinct from the existing `/privacy` page (which is the clinical
privacy policy).

> **Naming:** needs a route that doesn't collide with `/privacy`. Candidates:
> `/site-privacy`, `/your-privacy`, `/data`. Decide before implementation.

---

## 8. Open questions

- [ ] Route name for the new privacy page (see §7).
- [ ] Dark mode: ship in v1, or defer?
- [ ] Script face: which handwriting font best matches the card's signature?
- [ ] Do we keep the existing `/privacy` clinical page as-is, or restyle it too?
- [ ] Netlify deploy previews for `redesign/theme` — enable for review?

---

## 9. Sequencing

1. **`redesign/tokens`** — token layer, font self-hosting/subsetting, remove Tailwind.
2. **`redesign/layout`** — shell, primitives, component architecture.
3. **`redesign/a11y`** — audit and fixes woven throughout.
4. **`redesign/assets`** — imagery integration.
5. **Privacy page** — content + route.
6. Merge `redesign/theme` → `prod`.
