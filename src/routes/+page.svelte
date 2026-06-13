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
            I am a psychodynamic psychologist, licensed in Virginia and Pennsylvania,
            providing in person services in the greater Richmond, Virginia area and
            teletherapy in most other states (via PSYPACT®). My office is currently
            located in North Chesterfield, Virginia, near Bon Air, with quick access
            from the City of Richmond.
        </p>
        <p>

			Psychodynamic therapy focuses on the way early experiences contribute to how you experience the 
			world and relate with others. In psychodynamic therapy, we also attend to particular patterns 
			in your life and relationships. My approach is also informed by existential-humanistic and 
			phenomenological perspectives. I offer affirming dynamic therapy for neurodivergent clients 
			and members of the LGBTQIA+ community.  For a more in-depth description of how I work,
			see the About page. 			
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
