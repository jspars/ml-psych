<script>
	/**
	 * Button — dumb control primitive.
	 *
	 * Renders a native <button> (default) or <a> when given href. Owns pure
	 * chrome only; labels and destinations belong to the consumer. States come
	 * from CSS pseudo-classes, so the Figma 30-frame grid
	 * (Light/Dark × primary/secondary/ghost × default/hover/focus/active/
	 * disabled) collapses into this one component.
	 *
	 * Variant ↔ state map (Figma `Primitives` → Button sheet 2:2, base 100×43):
	 *   primary    filled `--accent-deep`, label `--text-inverse`
	 *   secondary  1.5px `--border-strong` stroke inside the 43px box, label
	 *              `--text`, transparent background
	 *   ghost      text-only `--link` — for use on `--surface`/`--surface-raised`
	 *              only; on `--surface-accent` bands the light-theme link/sage
	 *              contrast is ~3.2:1, so bands take the primary variant only
	 *
	 * Theme is token-driven (`:root` / `[data-theme='dark']`): the dark swap
	 * brightens the fill (`--accent-deep` → #B9ADE0) and flips the label to
	 * navy via `--text-inverse`. No theme prop, by convention.
	 *
	 * Focus comes from the global `:focus-visible` ring in `_typography.scss`
	 * (2px `--focus`, 2px offset — the CSS-correct equivalent of Figma's
	 * inside-stroke). The ring sits outside the fill, so it stays visible.
	 *
	 * Owner-confirmed: primary lavender-deep fill; large rounded-rect radius
	 * (`--radius-l`, 16px — pills retired Oct 2026, same corner as Card).
	 * Inferred/AI-assumed — reconcile against
	 * Figma frames 5:2–5:32 when Figma work resumes (see REDESIGN-CONTEXT §5):
	 *   - padding (--space-2xs / --space-m), --step-0 semibold, --leading-snug
	 *   - hover/active: color-mix with --surface-inverse (primary, deepens in
	 *     light / lifts the bright fill in dark) or --surface-accent tints
	 *     (secondary/ghost)
	 *   - --border-strong is a neutral control border, not the decorative
	 *     sage: 3.35:1 light / 3.28:1 dark on surfaces, so WCAG 1.4.11 holds
	 *     there; on accent bands it is ~2:1, hence primary-only bands
	 */

	/** Visual variant: primary (filled) | secondary (bordered) | ghost (text). */
	export let variant = 'primary';
	/** Render a native <a> when set; native <button type={type}> otherwise. */
	export let href = '';
	/** Native <button> type. Ignored when href is set. */
	export let type = 'button';
	/** Native `disabled` on buttons; links get aria-disabled + tabindex -1. */
	export let disabled = false;

	// No `class` prop — `class` is a reserved word and cannot be read back as a
	// plain expression here. Consumers pass class="…", id, aria-*, data-* etc.
	// and they merge onto the element via $$restProps (class merges, not clobbers).
</script>

{#if href}
	<a
		{href}
		class="button button--{variant}"
		aria-disabled={disabled ? 'true' : undefined}
		tabindex={disabled ? -1 : undefined}
		on:click
		{...$$restProps}
	>
		<slot />
	</a>
{:else}
	<button {type} class="button button--{variant}" {disabled} on:click {...$$restProps}>
		<slot />
	</button>
{/if}

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-3xs);
		min-height: var(--control-min-h); /* 43px — Figma Button base geometry */
		padding: var(--space-2xs) var(--space-m);
		border: 0;
		border-radius: var(--radius-l);
		font-family: var(--font-body);
		font-size: var(--step-0);
		font-weight: var(--weight-semibold);
		line-height: var(--leading-snug);
		letter-spacing: var(--tracking-normal);
		text-decoration: none;
		cursor: pointer;
		transition:
			background-color var(--dur-fast) var(--ease-out),
			border-color var(--dur-fast) var(--ease-out),
			color var(--dur-fast) var(--ease-out);
	}

	/* --- primary ---------------------------------------------------------------
	   Filled with the text-safe accent. Hover deepens in light theme and lifts
	   the brightened dark fill, because --surface-inverse flips per theme. */
	.button--primary {
		background-color: var(--accent-deep);
		color: var(--text-inverse);
	}

	.button--primary:hover {
		background-color: color-mix(in srgb, var(--accent-deep) 85%, var(--surface-inverse));
	}

	.button--primary:active {
		background-color: color-mix(in srgb, var(--accent-deep) 70%, var(--surface-inverse));
	}

	/* --- secondary -------------------------------------------------------------
	   1.5px stroke — the Figma secondary-bordered default (frame 5:10). Border
	   sits inside the box (border-box), matching the zero-outer-bleed rule. */
	.button--secondary {
		background-color: transparent;
		border: 1.5px solid var(--border-strong);
		color: var(--text);
	}

	.button--secondary:hover {
		background-color: color-mix(in srgb, var(--surface-accent) 18%, transparent);
	}

	.button--secondary:active {
		background-color: color-mix(in srgb, var(--surface-accent) 30%, transparent);
	}

	/* --- ghost -----------------------------------------------------------------
	   Text-only chrome. Hover tint is lighter than secondary so the underline
	   carries the affordance. */
	.button--ghost {
		background-color: transparent;
		color: var(--link);
	}

	.button--ghost:hover {
		background-color: color-mix(in srgb, var(--surface-accent) 12%, transparent);
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.button--ghost:active {
		background-color: color-mix(in srgb, var(--surface-accent) 22%, transparent);
	}

	/* Native disabled buttons and disabled links (aria-disabled) share the
	   muted treatment. Disabled controls are exempt from contrast requirements;
	   pointer-events: none keeps hover/active cues off. */
	.button:disabled,
	.button[aria-disabled='true'] {
		opacity: 0.55;
		cursor: not-allowed;
		pointer-events: none;
	}
</style>
