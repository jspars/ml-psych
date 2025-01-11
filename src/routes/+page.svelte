<script>
	import { base } from '$app/paths';
	import Faq from '$lib/components/Faq.svelte';
	import CardGroup from './CardGroup.svelte';
	import NewHero from './NewHero.svelte';
</script>

<section>
	<NewHero />
</section>

<section class="my-5 container max-w-[1000px]">
	<div class="mx-auto">
		<h1 class="text-4xl">Depth therapy for individuals and couples</h1>
		<p>
			I provide individual and couples therapy either in person at my 
			office in Harrisonburg, Virginia, or remotely via a HIPAA secure 
			platform. I practice from a psychodynamic, existential, and emotionally 
			focused perspective. In both couples and individual therapy, we examine 
			how early experiences contribute to how you move through the 
			world, and relate with others. We also attend to particular 
			patterns in your life and relationships. I help you tune into your 
			emotional world via emotionally-focused and somatic (body-based) 
			practices.
		</p>
	</div>
	<CardGroup />
	<div class="mx-auto">
		<h1 class="text-4xl">Being deeply understood</h1>
		<p>
			I believe we all need to be understood by those closest to us. 
			Sometimes we do not receive that understanding and this can result in 
			suffering. Therapy is a place where my primary focus is on 
			understanding you, your experiences, and what you feel. Feeling 
			understood is the first step towards change and transformation. 
			This commitment is the foundation of my work in both couples and 
			individual therapy.
		</p>
	</div>
	
</section>

<style lang="scss">
	.service-card {
		border-radius: var(--border-radius);
		padding: 20px;
		margin-bottom: 20px;
		min-height: 28rem;
	}

	.service-card h3 {
		color: var(--primary);
	}

	.service-card p {
		color: var(--primary);
	}
</style>
