# ml-psych Redesign — Context & Handoff Reference

> **Purpose:** A single high-level map of the Lawson Psychotherapy frontend redesign, for
> any model (or human) continuing work in this repo. It does NOT re-document the detail —
> it tells you *where* the detail lives and records the current state, conventions, and
> hard-won gotchas so you don't rediscover them. **Read the linked sources before changing
> anything.**
>
> **Status:** Work in the `Card` primitive is done in Figma and committed in code. See
> [Current state](#3-current-state) and [TBU/todo](#5-open-questions--todo).
>
> **Last updated:** 2026-10-24

---

## 1. One-paragraph orientation

`ml-psych` is the (currently legacy/v1) SvelteKit static marketing site for Lawson
Psychotherapy, deployed to Netlify at `lawsonpsych.com`. The active effort is a **greenfield
v2 redesign** — calm/editorial, token-driven, accessible (WCAG 2.2 AA), sovereign
(no third-party requests), mobile-first — aligned to the practice's business card. All v2
work happens on **topic branches** (esp. `redesign/tokens`) that integrate into
`redesign/theme`, which merges to `prod` when ready. Tokens are the foundation; components
are built fresh (never edited into legacy v1). Current milestone: **`Card.svelte` primitive
committed**, matching the Figma `Card/Light` + `Card/Dark` component sets.

---

## 2. Source-of-truth map (read these first)

These are the authoritative documents. Each is detailed; this ref doc only flags their role.

| Path | Role | Key sections |
| --- | --- | --- |
| `docs/DESIGN.md` | **Authoritative design spec.** Strategy, audit, tokens, architecture, decisions, sequencing. §4.2 specifies the component tree. | §3 (tokens), §4 (architecture), §8 (decisions), §9 (sequencing) |
| `src/styles/_tokens.scss` | **Source of truth for token VALUES.** Two tiers (raw palette vs semantic), with `[data-theme='dark']` overrides. Components reference **semantic only**. | see below |
| `docs/figma/` | DTCG token JSONs + `README.md` for importing tokens/typography into Figma as Variables. | `README.md` |
| `README.md` | Repo/branch/infra TL;DR (SvelteKit, Vite 8, Netlify, Node 22). Note: its styling claims predate the redesign. |

### Token architecture (essentials)

- Two tiers: **raw palette** (`--ink`, `--sage`, `--lavender`, …) is brand reference —
  components are **forbidden** from using it directly. **Semantic** tokens
  (`--text`, `--surface-raised`, `--link`, `--accent`, …) are what components consume.
  Rule stated in the `_tokens.scss` header: if you find yourself writing `var(--ink)` in a
  component, stop and add a semantic alias.
- **Dark theme** is a `[data-theme='dark']` block under `:root` in `_tokens.scss`. Theme is
  swapped via a `data-theme` attribute on `<html>`, set pre-paint by an inline script
  (see `app.html`). **Components take no `theme` prop** — the token system does the work.
- Tailwind, PostCSS, autoprefixer are **removed**. Styling is SCSS (`sass` kept) + CSS
  custom properties. See `docs/DESIGN.md` §3.5 and §4.1.

---

## 3. Current state

### Branch & commits

- **Active branch:** `redesign/tokens`
- **Topic branches** per `docs/DESIGN.md` header: `redesign/tokens`, `redesign/layout`,
  `redesign/a11y`, `redesign/assets`; integration = `redesign/theme` → merge to `prod`.
- Unpushed as of this doc: **`1` commit ahead of `origin/redesign/tokens`**
  (`docs: add redesign context & handoff reference`). The other commits below are
  already pushed upstream.
  ```
  8ca41ab docs: add redesign context & handoff reference   (unpushed)
  d1a0d7b feat(primitives): add Card component matching Figma anatomy   (pushed)
  d43b957 docs(figma): add DTCG token import files for design primitives   (pushed)
  1c00cd7 docs: add light and dark theme color swatches to DESIGN.md   (pushed)
  ```

### Cards (Figma + code) — just completed

- **Figma:** In the single file **`Primitives`** (named from "ButtonPrimitive"; all
  primitives live here). Card sheet `11:2` at (1600,0); Button sheet `2:2` at (0,0).
  Two component sets built (Option A — per-parent, because Figma requires variant-set
  frames to be direct siblings; they were split across `section/light`/`section/dark`):
  - `18:29` = **"Component 1"** → the **Light** set (Populated `11:7` = 360×379,
    Anatomy `11:12` = 360×330)
  - `18:30` = **"Component 2"** → the **Dark** set (Populated `11:17` = 360×387,
    Anatomy `11:22` = 360×330)
  - **Canonical structure (all four):** hug-height VERTICAL card (padding 0, gap 0,
    `layoutSizing` FIXED/HUG) → `slot/header` (360×200, 16:9, full-bleed wash) →
    `content` column (FILL/HUG, 24px padding, 8px gap) holding `slot/title` →
    `slot/body` → `slot/actions`. Actions sit **last** in flow, so they anchor to the
    card bottom; height is driven by body text. Width 360 fits 3-up in the 1200px
    container.
- **Code:** `src/lib/components/primitives/Card.svelte` (committed, build-verified).
  Named slots `header` / `title` / `body` / `actions`; `header` and `shadow` are opt-in
  boolean props; references semantic tokens only. See `Card.svelte` header comment.

### Styling / fonts

- `src/styles/_tokens.scss`, `_reset.scss`, `_typography.scss`, `_layout.scss`,
  `_utilities.scss`, `app.scss` (load-bearing import order).
- Fonts: self-hosted Latin-subset WOFF2 in `static/fonts/` — Playfair Display (display,
  600/700) + Inter (body, 400/500/600), ~81 KB. Reproducible via `npm run fonts`
  (`scripts/subset-fonts.sh`, Python `fonttools`).

---

## 4. Conventions & rules (v2)

- **Full v2, not v1.5.** Legacy components (`CardGroup.svelte`, `AboutCard.svelte`,
  `PageHeader.svelte`, Bootstrap-era markup) are **v1 reference only**. v2 components are
  **brand-new `.svelte` files built from scratch** — never edited into the old ones.
- **Primitives are dumb; sections are smart.** Primitives (`src/lib/components/primitives/`)
  provide pure chrome + layout via named slots; sections compose them and own content.
  Matches `docs/DESIGN.md` §4.2 component tree:
  `primitives/`, `layout/`, `sections/`, `data/`, `utils/`.
- **Named slots.** Card uses `header`/`title`/`body`/`actions`; prefer named slots for
  any composable region.
- **Semantic tokens only** in components (see §2).
- **No `theme` prop** on primitives — the token layer handles light/dark.
- Accessibility: WCAG 2.2 AA; visible focus rings; `prefers-reduced-motion` gating; text
  only in `-deep`/dark-semantic variants (sage/lavender decorative only). See
  `docs/DESIGN.md` §5 checklist.
- **Content as data** going forward: `src/lib/data/` (services, nav, copy). `ROUTES` in
  `src/lib/site.js` is the sitemap source of truth.
- Commit in small, single-purpose commits (docs vs code separate). Editor-config branches
  are topic branches; do not commit directly to `prod`.

---

## 5. Open questions & todo

1. **Rename Figma sets** `Component 1`→`Card/Light`, `Component 2`→`Card/Dark`
   (via the Figma UI — the bridge has no rename tool) and **confirm the `Content`
   variant property** on each set (`Populated` / `Anatomy`).
2. **Button stroke-inside hand-fix (queued).** The 12 focus/active Button variants
   (2px strokes) still render their ring outside the box; Figma equivalent of CSS
   `outline`/`outline-offset` is **Inside** stroke alignment. Hand-fix in the Figma UI
   (bridge has no `set_stroke_align`). Variants: light `5:7,5:8,5:12,5:13,5:17`; dark
   `5:22,5:23,5:27,5:28,5:32`; plus secondary-bordered default `5:10` (1.5px, 103×46)
   and `5:18` (Ghost Active light) can be de-grown to 100×43. All 30 button frames
   should measure exactly 100×43 with zero outer bleed.
3. **Typography variables.** `docs/figma/` `typography.desktop.json` /
   `typography.mobile.json` were regenerated mode-agnostic but **not re-imported** in
   Figma — mode descriptions may still be stale.
4. **Reusable components after Button:** layout (`Header`, `Footer`, `Nav`, `SkipLink`,
   `PageShell`) and sections (`Hero`, `ServiceGrid` — likely a 3-up consumer of
   `Card.svelte`, `AffirmingBanner`, `CTA`). See §4.2 tree and DESIGN §9.
5. **Health/verify items:** `+page.svelte` doesn't use Card yet; ~26 MB of uncompressed
   PNGs in `static/images/` + Windows `:Zone.Identifier` artifacts to optimize/remove.
6. `docs/figma/` token files already committed; bump `DESIGN.md` status/wording where the
   widening of the card JS/typography facts change it.

---

## 6. Figma tooling (bridge / MCP) — essential not in DESIGN.md

- The repo ships a **Talk-to-Figma MCP bridge** that lets an agent read/edit the
  `Primitives` Figma file through tools (`talk-to-figma__*`). Relay server:
  `bun run src/socket.ts` from `~/projects/cursor-talk-to-figma-mcp` (log
  `/tmp/ttf-socket.log`, binds IPv6 `*:3055` — use `localhost`).
- **Connection is fragile.** The plugin does **not** auto-reconnect after Figma or the
  relay restarts. If tool calls time out ("No other clients in channel"): read the fresh
  channel from `tail /tmp/ttf-socket.log` (the pasted channel may be stale), and/or have
  the user **Disconnect → Connect** the `Cursor MCP Plugin` in Figma, then re-join via
  `talk-to-figma__join_channel`. Always confirm the plugin is attached to the `Primitives`
  file via `get_document_info` before editing.
- **Bridge limitations** (do not attempt; they fail or misbehave):
  - No `figma.variables.*` — variables are imported manually from the DTCG files.
  - No `create_component` for variant sets — component-set promotion is manual in Figma.
  - No `set_stroke_align`.
  - `set_fill_color` ignores alpha (forces opaque).
  - `move_node` repositions only, it does **not** reparent across frames.
  - `set_layout_sizing` FILL requires the target to already be a child of an auto-layout
    frame and itself `layoutMode != NONE`.
  - Auto-layout reflows children in creation order and ignores manual x/y — create
    children in visual order.
  - `export_node_as_image` returns base64 truncatated in context — verify geometry with
    `get_nodes_info`.

---

## 7. Workflow notes for the next model

- **Always** re-read `_tokens.scss` and the relevant `docs/DESIGN.md` section before
  touching a component or proposing Figma work. This ref doc is a map, not the source.
- Keep Figma and code in lockstep: a primitive is only "done" when a `Card.svelte`-style
  component exists matching the Figma anatomy's slot/sizing model.
- Prefer `video/`-free minimal tooling; build with `npm run build` to confirm Svelte
  compiles (there is no `svelte-check`). `npm run lint` / `npm run format` (Prettier + ESLint)
  are available but ESLint uses the legacy `.eslintrc.cjs`.
- When the working tree is clean and commits are ready, commit in logical units and
  **ask before pushing** — remote/branch strategy is the owner's call.