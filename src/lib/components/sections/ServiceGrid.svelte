<script>
	/**
	 * ServiceGrid — homepage 3-up consumer of the Card primitive (DESIGN §9),
	 * kept true to the Figma Card/Light + Card/Dark populated variants.
	 *
	 * Composes Card but owns the content model from $lib/data/services.js.
	 * Cards are hug-width natives capped by Card's own 360px max-width, so
	 * three fit comfortably in the 1200px container.
	 *
	 * Header imagery is deferred to redesign/assets: cards pass `header` with
	 * an empty slot so Card's own flat --surface-decor wash shows (Figma-true:
	 * sage in light, brightened lavender in dark). When real 16:9 art lands it
	 * drops into the same slot — no Card changes needed.
	 *
	 * Actions: "Learn more →" text links per the Figma populated card; the
	 * arrow is aria-hidden (redundant with the visible text). Requires
	 * U+2192 in the font subset — scripts/subset-fonts.sh includes it; see
	 * REDESIGN-CONTEXT if the glyph ever falls back to a system font.
	 */
	import { base } from '$app/paths';
	import { SERVICES } from '$lib/data/services.js';
	import Card from '../primitives/Card.svelte';
</script>

<section class="section" aria-labelledby="services-title">
	<div class="container">
		<h2 id="services-title">Ways we can work together</h2>

		<div class="services-grid grid">
			{#each SERVICES as service (service.slug)}
				<Card header>
					<h3 slot="title">{service.title}</h3>
					<p slot="body">{service.body}</p>
					<a slot="actions" href="{base}{service.href}">
						Learn more <span class="action-arrow" aria-hidden="true">→</span>
					</a>
				</Card>
			{/each}
		</div>
	</div>
</section>

<style>
	.services-grid {
		--grid-min: 20rem;
		margin-block-start: var(--space-m);
	}

	.action-arrow {
		margin-inline-start: 0.25em;
	}
</style>
