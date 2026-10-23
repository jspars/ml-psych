<script>
	/**
	 * Card — dumb layout primitive.
	 *
	 * Pure chrome only; every content region is a named slot. Nothing here knows
	 * about therapy, services, or CMS data — that's for the sections that compose
	 * this primitive. Matches the Figma `Card/Light` + `Card/Dark` anatomy.
	 *
	 * Anatomy:
	 *   Card (hug-height, surface-raised, radius-l, shadow-m)
	 *   ├─ slot:header (optional, full-bleed 16:9 decorative wash)
	 *   └─ .content (24px inset, 8px vertical rhythm)
	 *      ├─ slot:title
	 *      ├─ slot:body
	 *      └─ slot:actions (last — anchors to the card bottom by flow)
	 *
	 * Theme is driven by the semantic tokens on :root / [data-theme='dark'],
	 * so no theme switch is needed here — the tokens do the work.
	 */

	/** Hide the full-bleed header slot if the consumer doesn't render it. */
	export let header = false;
	/** Adds a resting shadow; consumers can override with class:.shadow-l etc. */
	export let shadow = false;
	/** Presentational — the 16:9 decorative wash behind a header image. */
	export let ratio = true;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<article class="card" class:card--shadow={shadow} class:card--heading {ratio}>
	{#if header}
		<div class="card__header" aria-hidden="true">
			<slot name="header" />
		</div>
	{/if}

	<div class="card__content">
		<slot name="title" />
		<slot name="body" />
		<div class="card__actions">
			<slot name="actions" />
		</div>
	</div>
</article>

<style>
	.card {
		/* Hug-height: height is driven by the body text, exactly like the Figma
		   FIXED/HUG cards. Actions sit last in flow and thus anchor to the end. */
		width: 100%;
		max-width: 360px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: var(--radius-l);
		background: var(--surface-raised);
		color: var(--text);
		box-shadow: var(--shadow-m);
	}

	.card--shadow {
		box-shadow: var(--shadow-l);
	}

	.card--heading {
		flex-direction: column;
	}

	/* Optional full-bleed header — decorative image/media slot.
	   360×200 = 16:9, matching the Figma placeholder wash. */
	.card__header {
		width: 100%;
		aspect-ratio: 16 / 9;
		/* Decorative sage/lavender wash behind the consumer's image. Text content
		   must not live here for a11y — that's what slot:title/body are for. */
		background: var(--accent);
		opacity: 0.9;
		overflow: hidden;
	}

	.card__header :global(img),
	.card__header :global(video),
	.card__header :global(picture) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Content inset — 24px all sides = --space-m. */
	.card__content {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs); /* 8px between title/body/actions */
		padding: var(--space-m);
		flex: 1 0 auto;
	}

	/* Actions hug the end of the card; spacing between body and actions is the
	   same 8px rhythm, and the bottom padding keeps CTA 24px off the edge. */
	.card__actions {
		margin-top: var(--space-2xs);
	}

	/* Typography defaults for the slots — consumers can restyle via :global()
	   scoping on their own wrappers/classes. */
	.card :global(.card-title),
	.card :global([slot='title']) {
		font-family: var(--font-body);
		font-weight: var(--weight-semibold);
		font-size: var(--step-1);
		line-height: var(--leading-snug);
		color: var(--text);
		margin: 0;
	}

	.card :global([slot='body'] > *) {
		font-family: var(--font-body);
		font-weight: var(--weight-normal);
		font-size: var(--step-0);
		line-height: var(--leading-normal);
		color: var(--text-muted);
		margin: 0;
	}

	.card :global([slot='actions'] a) {
		font-family: var(--font-body);
		font-weight: var(--weight-semibold);
		font-size: var(--step-0);
		line-height: var(--leading-normal);
		color: var(--link);
		text-decoration: none;
	}

	.card :global([slot='actions'] a:hover) {
		color: var(--link-hover);
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}
</style>