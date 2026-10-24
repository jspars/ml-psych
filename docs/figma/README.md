# Figma token import

DTCG (Design Tokens Community Group) JSON generated from `src/styles/_tokens.scss`.
Import these into Figma to get native **Variables** that mirror the Sass token layer.

## Files

Two independent layers. Import them as **separate collections**.

### Colors, space, radius, layout, font

| File                | Purpose           |
| :------------------ | :---------------- |
| `tokens.light.json` | Light mode values |
| `tokens.dark.json`  | Dark mode values  |

Both declare the **same 45 token paths** with the same `$type` per path. That is required:
Figma only creates a variable when the token exists in _all_ imported files with a
consistent type.

### Typography

| File                      | Purpose                                  |
| :------------------------ | :--------------------------------------- |
| `typography.desktop.json` | Type scale resolved at a 1440px viewport |
| `typography.mobile.json`  | Same scale resolved at a 390px viewport  |

Same 15 paths in both. Leading and tracking are mode-invariant (identical in both files);
only `type/size/*` differs, so a mode switch changes the scale.

## Import

### First collection (colors, space, radius, layout, font)

1. Open the file in Figma, then open the **Variables** view (right panel → Local variables).
2. Drag `tokens.light.json` into the Variables view. This creates a collection with one mode.
3. Right-click that mode's header and choose **Duplicate mode**.
4. Right-click the **new** mode's header and choose **Import mode**, then select
   `tokens.dark.json`.
5. Rename the two modes to `Light` and `Dark`.

### Second collection (typography)

Repeat steps 2–4 with `typography.desktop.json` then `typography.mobile.json`, naming the
modes `Desktop` and `Mobile`. Keeping typography in its own collection is deliberate: its
modes mean _viewport_, not _theme_, so a single theme switch would otherwise also change
the type scale.

### The step people get wrong

**`Import mode` only _updates_ variables whose names and types already match — it never
creates new ones.** Duplicating the mode first is therefore mandatory, not optional. This is
why dragging a second file onto an existing collection does not attach as a mode: a drag
_creates_ a mode (or a new collection), while `Import mode` _patches_ an existing one.

Dragging both files in together produces two separate collections, not one collection with
two modes.

Adding a second mode is plan-gated — Starter allows one mode per collection, Professional
about four, Organization/Enterprise forty or more. If **Duplicate mode** is unavailable, that
is a licensing limit rather than a technique problem.

## Caveats

These are real limitations of the format, not oversights:

- **`--measure: 72ch` is approximated** as `1152px` (`layout/measure`). Figma cannot express
  the `ch` unit, and the correct pixel value depends on the rendered typeface. Verify and
  adjust by hand.
- **`--border` is not a flattened hex.** In light mode the Sass value is
  `color-mix(in srgb, var(--sage) 40%, transparent)`, so the token carries the sage
  components with `alpha: 0.4`. It is intentionally _not_ aliased to `color.raw.sage`.
- **Shadows and motion are absent.** `$type: "boxShadow"` is not a Figma-importable type,
  and Figma has no duration unit beyond `s`. Those live in `_tokens.scss` only.
- **The type scale is frozen per mode.** The Sass `clamp()` steps are fluid; Figma has no
  `clamp()`, so each mode stores one resolved pixel value. `Desktop` is the scale at a 1440px
  viewport and `Mobile` at 390px, computed from the same `clamp()` expressions. The browser
  interpolates continuously between them; Figma can only show the two endpoints. Verify the
  resolved values against `_tokens.scss` if the source steps change.
- **`--tracking-*` is stored in em, not percent.** Figma expresses letter spacing as a
  percentage, so multiply by 100 when reading these (`--tracking-wide: 0.05` → `5%`).
- **Leading is unitless by design.** `--leading-*` is a ratio, which maps directly to a Figma
  line-height number rather than a pixel height.
- **`--link-hover` and `--focus` are aliases**, so they resolve to `color/raw/ink` and
  `color/raw/lavender-deep` respectively. Figma will show them as alias variables.

## Drift

`_tokens.scss` is the source of truth. If a raw value changes there, these files must be
regenerated — they are a point-in-time snapshot of branch `redesign/tokens`.
