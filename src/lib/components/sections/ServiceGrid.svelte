<script>
	/**
	 * ServiceGrid — homepage 3-up consumer of the Card primitive (DESIGN §9).
	 *
	 * Composes Card + Button-level chrome but owns the content model from
	 * $lib/data/services.js. Cards are hug-width natives capped by Card's own
	 * 360px max-width, so three fit comfortably in the 1200px container.
	 *
	 * Header imagery is deferred to redesign/assets: every card renders a
	 * decorative token wash (aria-hidden, inside Card's aria-hidden header
	 * slot) chosen by `tone` in the data. When real 16:9 art lands, the wash
	 * is replaced by media in the same slot — no Card changes needed.
	 *
	 * Actions: plain "Learn more" text links, styled by Card's [slot=actions]
	 * rules (they deliberately avoid arrow glyphs — U+2192 isn't in the Latin
	 * subset and would fall back to a system font).
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
				<Card>
					<div class="wash wash--{service.tone ?? 'sage'}" slot="header" aria-hidden="true"></div>
					<h3 slot="title">{service.title}</h3>
					<p slot="body">{service.body}</p>
					<a slot="actions" href="{base}{service.href}">Learn more</a>
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

	/* Decorative washes — token mixes only, so they harmonize in dark theme. */
	.wash {
		width: 100%;
		height: 100%;
	}

	.wash--sage {
		background: color-mix(in srgb, var(--surface-accent) 60%, var(--surface-raised));
	}

	.wash--lavender {
		background: color-mix(in srgb, var(--accent) 28%, var(--surface-raised));
	}

	.wash--smoke {
		background: color-mix(in srgb, var(--accent-deep) 22%, var(--surface-raised));
	}
</style>
