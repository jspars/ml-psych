<script>
    import { base } from '$app/paths';
</script>

<section class="hero-section bg-[var(--dark)] p-2 sm:p-5">
	<div class="home-hero pt-10">
		<div class="text-[var(--primary)] px-5 rounded home-head">
			<h1 class="pb-3 text-4xl sm:text-6xl">Lawson Psychotherapy</h1>
			<h2 class="pb-3 font-light text-xl sm:text-4xl">Making sense together</h2>
			<div>
				<a href="{base}/contact" class="btn btn-warning my-2">Get in touch</a>
				<a href="{base}/about" class="btn btn-secondary my-2">Learn more</a>
			</div>
		</div>
		<img
			src="{base}/images/hero.jpg"
			width="800"
			class="blur-sm lg:blur-none"
			alt="a welcoming space to straighten out your thoughts"
		/>
	</div>
</section>

<style>
	.home-hero {
		position: relative;

		div {
			position: relative;
			z-index: 1;
		}

		img {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 0;
		}
	}

	.home-head {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 40rem;
		min-height: 20rem;
	}

	@media only screen and (min-width: 768px) {
		.home-head {
			min-height: 36rem;
		}
	}
</style>
