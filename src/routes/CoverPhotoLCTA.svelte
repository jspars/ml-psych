<script>
	import { base } from '$app/paths';
    import hero_image from "$lib/assets/hero.jpg";
</script>

<main>
	<div class="home-hero">
		<div class="hero-copy">
			<h1 class="display-1">Lawson Psychotherapy</h1>
			<p class="prose mb-3 text-xl font-light">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<a class="btn btn-primary px-4 w-fit btn-lg" 
                href="{base}/contact" 
                role="button">
                Schedule a Consultation
            </a>
		</div>
		<div class="pb-10 mb-10" />
	</div>
</main>

<style>
	.home-hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background: url($lib/assets/hero.jpg) no-repeat bottom left;
		height: 90vh;
	}

	.hero-copy {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem;
	}
</style>
