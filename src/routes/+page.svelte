<script>
	/**
	 * Homepage (v2). Composes sections; owns page copy (drafted from v1,
	 * owner-editable). One h1 — inside Hero, per the a11y rule.
	 * v1 homepage components (NewHero, CardGroup, Faq) are retired, kept on
	 * disk as v1 reference.
	 */
	import Hero from '$lib/components/sections/Hero.svelte';
	import ServiceGrid from '$lib/components/sections/ServiceGrid.svelte';
	import CTA from '$lib/components/sections/CTA.svelte';
</script>

<Hero />

<ServiceGrid />

<section class="section">
	<div class="container">
		<h2>Being deeply understood</h2>
		<div class="prose">
			<p>
				I believe we all need to be understood by those closest to us. Sometimes we do not receive
				that understanding and this can result in suffering. Therapy is a place where my primary
				focus is on understanding you, your experiences, and what you feel. Feeling understood is
				the first step towards change and transformation. This commitment is the foundation of my
				work in both couples and individual therapy.
			</p>
		</div>
	</div>
</section>

<CTA />
