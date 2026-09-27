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
6. **Mobile-first, wide-aware.** Base styles target small screens; wider viewports
   gain richer treatment, not just more whitespace.

---

## 2. Current state (audit)

### 2.1 Styling

- `src/app.css` defines `--primary`, `--secondary`, `--accent`, etc. — **almost none
  are used.** Actual styles hardcode `#EEF4ED`, `#212529`, and an off-palette
  orange link color (`#ff5a22`).
- A large commented-out block of Bootstrap-era variable names remains. The
  commented block itself is dead text, **but Bootstrap is genuinely loaded** —
  see §2.4.
- Tailwind is imported (`@tailwind base/components/utilities`) but the utility
  classes in markup are ad-hoc, with magic values and no semantic layer.
- `tailwind.config.js` extends nothing; only `@tailwindcss/typography` is added.

### 2.2 Fonts

- **~14 MB of unsubsetted `.ttf` files** in `static/fonts/`.
- `NanumMyeongjo-*.ttf` (a Korean typeface) accounts for ~11.5 MB and is used for
  Latin headings only.
- Roboto is loaded in 10 weights/styles, most of which are unused.
- No `preload`, no `font-display`, no subsetting, no WOFF2.

> **Resolved in `redesign/tokens`.** Replaced with 81 KB of Latin-subset WOFF2
> (Playfair Display 600/700, Inter 400/500/600) — a 99.4% reduction. Reproducible
> via `npm run fonts`.

### 2.3 Third-party CDN dependencies

`src/app.html` loaded five resources from third-party CDNs on every page view:

| Resource            | Version | Used?                  |
| ------------------- | ------- | ---------------------- |
| Bootstrap CSS       | 5.3.2   | **Yes** — load-bearing |
| Bootstrap JS bundle | 5.3.2   | No                     |
| bootstrap-icons     | 1.10.5  | No                     |
| jQuery              | 3.6.0   | No                     |
| jQuery UI           | 1.12.1  | No                     |

Beyond the privacy cost of leaking visitor IPs to three separate CDNs, this was
~90 KB of JavaScript that did nothing. The four unused resources were removed in
`redesign/tokens`; Bootstrap CSS remains until `redesign/layout` rebuilds the
components that depend on it.

### 2.4 Structure

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

### 3.1.1 Dark theme

Shipped in v1 with a **light / dark / system** toggle. The palette inverts cleanly:
cream becomes text, and lavender **brightens** so the accent still pops against a
dark ground.

| Token              | Dark value | Note                                 |
| ------------------ | ---------- | ------------------------------------ |
| `--surface`        | `#1A1A1E`  | Warm near-black, slightly smoky      |
| `--surface-raised` | `#24242A`  | Cards, panels                        |
| `--surface-accent` | `#2E2A3A`  | Section bands, lavender-tinted       |
| `--text`           | `#EDEBE4`  | Cream, reused from the light palette |
| `--text-muted`     | `#A8A4B8`  | Muted lavender-grey                  |
| `--text-inverse`   | `#12283D`  | Text on light surfaces               |
| `--border`         | `#3A3A44`  | Hairlines                            |
| `--lavender`       | `#A99BD4`  | Brightened for dark ground           |
| `--link`           | `#B9AEE0`  | Higher contrast on dark              |
| `--focus`          | `#B9AEE0`  | Focus rings                          |

**Implementation:** `:root` holds light values; `[data-theme="dark"]` overrides the
semantic tokens. A tiny inline script in `app.html` reads the stored preference
(and `prefers-color-scheme`) and sets `data-theme` **before first paint** to avoid
a flash of the wrong theme. The toggle is a three-state control (light / dark /
system) persisted in `localStorage`.

### 3.2 Typography

Two roles, matching the card.

| Role    | Face                 | Use             | Weights       |
| ------- | -------------------- | --------------- | ------------- |
| Display | **Playfair Display** | Wordmark, `h1`  | 600, 700      |
| Body    | **Inter**            | Everything else | 400, 500, 600 |

- Self-hosted, **WOFF2**, **subset to Latin**.
- `font-display: swap`; preload the body face only.
- Fluid type scale via `clamp()`.

> **Script face (signature):** the card uses **Brittany** (Typesenses), which is a
> commercial font and not licensed for web embedding. Rather than substitute a
> different script face and break consistency across print and web, the signature
> is rendered as an **image asset**. This also removes a font from the load path.

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

### 3.4 Responsive strategy

**Mobile-first, wide-aware.** Base styles target small screens; `min-width` media
queries layer up. The goal is that wider viewports gain _richer treatment_, not
just more empty space.

**Breakpoints** (min-width):

```
--bp-sm: 40rem;   /* 640px  — large phone / small tablet */
--bp-md: 48rem;   /* 768px  — tablet */
--bp-lg: 64rem;   /* 1024px — small laptop */
--bp-xl: 80rem;   /* 1280px — desktop */
--bp-2xl: 96rem;  /* 1536px — wide / ultrawide */
```

**Content width:** prose is capped at ~72ch; the layout container at ~1200px.
Text never stretches to unreadable line lengths on ultrawide displays.

**Beyond ~1400px (`--bp-2xl`):** the content column stays constrained while the
_atmosphere_ expands — full-bleed hero gradient, decorative botanical elements in
the margins, and multi-column layouts that gain breathing room rather than
padding. This is where the mockup's soft color-wash aesthetic earns its keep.

### 3.5 Token architecture as implemented

Tokens are **plain CSS custom properties** — no preprocessor variables, no
Bootstrap, no build-time magic. SCSS is used only for `@use` composition and
nesting; every value that a component consumes is a custom property at runtime.
That means themes can swap without a rebuild, and DevTools shows the real value.

Two tiers, and the distinction matters:

| Tier            | Example                                     | Who uses it                             |
| --------------- | ------------------------------------------- | --------------------------------------- |
| **Raw palette** | `--ink`, `--sage`, `--lavender`             | Nothing directly. Brand reference only. |
| **Semantic**    | `--text`, `--surface`, `--link`, `--accent` | Every component.                        |

Components reference **semantic tokens only**. This is what makes dark mode a
matter of overriding one block rather than auditing every rule.

```
src/styles/
  _tokens.scss      raw palette + semantic tokens + [data-theme="dark"] overrides
  _reset.scss       minimal modern reset
  _typography.scss  @font-face, fluid scale, base type, focus rings
  _layout.scss      container, prose, section, stack, cluster, grid, bleed
  _utilities.scss   small reusable helpers, scroll-reveal
  app.scss          entry point (import order is documented and load-bearing)
```

**Theme switching** is a `data-theme` attribute on `<html>`, set by an inline
script in `app.html` that runs before first paint. Precedence is stored
preference → system preference → light. No flash of the wrong theme, and no
dependency.

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
- [ ] Theme toggle: three-state (light / dark / system), keyboard-operable, with an
      accessible name and `aria-pressed` or equivalent state.
- [ ] No flash of incorrect theme on load (pre-paint `data-theme` script).
- [ ] Meaningful `alt` text; `alt=""` for decorative images.
- [ ] Form labels, error messaging, and `aria-live` (when contact form returns).
- [ ] Colorblind support: affirming iconography always paired with labels.
- [ ] Both themes independently meet contrast targets (dark is not an afterthought).

---

## 6. Assets

Generated in Canva; integrated here. Export as **WebP**, with explicit
`width`/`height` to prevent layout shift.

| Asset            | Purpose                          | Notes                                                      |
| ---------------- | -------------------------------- | ---------------------------------------------------------- |
| Hero background  | Landing hero                     | Soft color-wash + botanical; needs negative space for text |
| Service icons    | Individual / Affirming / Couples | Thin-line, single stroke weight, navy                      |
| Affirming banner | Dedicated section                | Pride/trans/intersex/BLM/feminist, treated with dignity    |
| Lavender texture | Reusable background              | Low opacity, like the card                                 |
| LP monogram      | Favicon + logo mark              | Navy/lavender treatment                                    |
| Signature        | Personal note / about page       | Brittany script as an image (not web-licensed as a font)   |

### 6.1 Hero treatment

The early mockup (soft blurred lavender → pink → pale-blue wash behind the
wordmark, with the lavender sprig as a photographic element) is the direction for
the **hero specifically**. The rest of the site stays calm and flat.

This gives the landing page a striking first impression without making every page
busy, and it gives the dark theme something to echo. On wide displays the wash
extends full-bleed while the content column stays constrained (see §3.4).

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

**Route:** `/your-data` — chosen to avoid collision with the clinical `/privacy`
page and to read naturally as a footer link.

---

## 8. Decisions

- **Privacy page route:** `/your-data`.
- **Dark mode:** ships in v1, with a light / dark / system toggle.
- **Script face:** Brittany is commercial and not web-licensed — the signature is
  an image asset instead. No script font in the stack.
- **Existing `/privacy`:** copy stays exactly as-is; the page is restyled to match.
- **Netlify deploy previews:** enabled for `redesign/theme` so the redesign can be
  reviewed at a live URL without touching production.
- **Bootstrap:** loaded from CDN in `app.html`, not via `package.json` — which is
  why it was easy to miss. It is **genuinely load-bearing**: the markup uses
  `card` (28×), `container` (11×), `row` (10×), `navbar` (7×), `btn` (6×), plus
  spacing and flex utilities. It will be removed in `redesign/layout`, where
  those components are rebuilt natively. The unused Bootstrap JS, Bootstrap
  Icons, jQuery, and jQuery UI were removed in `redesign/tokens`.

---

## 9. Sequencing

1. ~~**`redesign/tokens`** — token layer, font self-hosting/subsetting, remove Tailwind.~~
   **Done.** See §3 for the token architecture as implemented.
2. **`redesign/layout`** — shell, primitives, component architecture.
3. **`redesign/a11y`** — audit and fixes woven throughout.
4. **`redesign/assets`** — imagery integration.
5. **`/your-data` page** — content + route.
6. Merge `redesign/theme` → `prod`.
