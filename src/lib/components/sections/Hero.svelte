<script>
	/**
	 * Hero — landing intro. Type-first and calm for now (owner-confirmed
	 * direction); the §6.1 soft color-wash + botanical treatment is an
	 * atmosphere layer that lands with redesign/assets — the copy column
	 * stays constrained either way (§3.4).
	 *
	 * Copy is drafted from the v1 homepage (owner-editable); actions map to
	 * existing routes. One h1 per page — this is it.
	 */
	import { base } from '$app/paths';
	import Button from '../primitives/Button.svelte';
</script>

<section class="hero">
	<div class="container">
		<h1>Neurodiversity and LGBTQIA+ affirming psychodynamic therapy for individuals and couples</h1>

		<div class="prose stack">
			<p>
				I am a psychodynamic psychologist, licensed in Virginia and Pennsylvania, providing in
				person services in the greater Richmond, Virginia area and teletherapy in most other states
				(via PSYPACT®). My office is currently located in North Chesterfield, Virginia, near Bon
				Air, with quick access from the City of Richmond.
			</p>
			<p>
				Psychodynamic therapy focuses on the way early experiences contribute to how you experience
				the world and relate with others. In psychodynamic therapy, we also attend to particular
				patterns in your life and relationships. My approach is also informed by
				existential-humanistic and phenomenological perspectives. I offer affirming dynamic therapy
				for neurodivergent clients and members of the LGBTQIA+ community. For a more in-depth
				description of how I work, see the About page.
			</p>
		</div>

		<div class="cluster hero__actions">
			<Button href="{base}/contact">Get in touch now</Button>
			<Button variant="ghost" href="{base}/my_approach">About my approach</Button>
		</div>
	</div>
</section>

<style>
	.hero {
		padding-block: var(--space-xl) var(--space-l);
	}

	.hero h1 {
		max-width: 28ch;
		margin-block-end: var(--space-m);
	}

	.hero p {
		max-width: var(--measure);
	}

	.hero__actions {
		margin-block-start: var(--space-m);
	}

	@media (min-width: 48rem) {
		.hero {
			padding-block: var(--space-2xl) var(--space-xl);
		}
	}
</style>
