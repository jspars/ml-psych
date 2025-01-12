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
		<h1 class="text-4xl">Neurodiversity and LGBTQIA+ affirming psychodynamic therapy for individuals and couples</h1>
		<p>
			 
			Psychodynamic therapy focuses on how early experiences contribute to how you move through the 
			world and relate with others. In psychodynamic therapy, we also attend to particular 
			patterns in your life and relationships. My approach is also informed by existential-humanistic and phenomenological theories of human development. 
			I offer affirming dynamic therapy for neurodivergent clients and members of the LGBTQIA+ 
			commmunity.  In person sessions are available at my office in Harrisonburg, VA and teletherapy 
			appointments are available throughout Virginia and in all PSYPACT® participating states. For a more	
			in-depth description of how I work, see <a href="{base}/about">the About page</a>. 			
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
