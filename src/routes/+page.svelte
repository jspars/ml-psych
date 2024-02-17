<script>
	import { base } from '$app/paths';
	import Faq from '$lib/components/Faq.svelte';
</script>

<!-- Hero Section -->
<section class="hero-section bg-[var(--dark)] p-2 sm:p-5">
	<div class="home-hero pt-10">
		<div class="text-[var(--primary)] px-5 rounded home-head">
			<h1 class="pb-3 text-4xl sm:text-6xl">Lawson Psychotherapy</h1>
			<h2 class="pb-3 font-light text-xl sm:text-4xl">Making sense together</h2>
			<div>
				<a href="{base}/contact" class="btn btn-primary my-2">Get in touch</a>
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
<section>
	<div class="pb-5">
		<div class="container p-5">
			<div class="row">
				<div class="col-md-4">
					<div class="service-card drop-shadow-lg bg-[#f2d7ba]/50">
						<img src="{base}/images/couples0.png" alt="">
						<h3 class="text-2xl mt-3">Couples</h3>
						<p>Together, we'll identify and break out of destructive communication cycles.</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="service-card drop-shadow-lg bg-[#f2d7ba]/50">
						<img src="{base}/images/individual0.png" alt="">
						<h3 class="text-2xl mt-3">Individuals</h3>
						<p>I provide   depth-oriented therapy for a diverse range of adults.</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="service-card drop-shadow-lg bg-[#f2d7ba]/50">
						<img src="{base}/images/tele1.png" alt="">
						<h3 class="text-2xl mt-3">Teletherapy</h3>
						<p>I'm PSYPACT Authorized to practice teletherapy across certain state lines.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<h2 class="pt-5 text-2xl text-slate-700">Depth therapy</h2>
				<p class="text-slate-700">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt
					sint animi sapiente vitae suscipit. Dolor sit amet consectetur adipisicing
					elit. Architecto quidem facere deserunt vitae suscipit.
				</p>

				<h2 class="pt-5 text-right text-2xl text-slate-700">A safe space</h2>
				<p class="text-right text-slate-700">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt
					sint animi sapiente vitae suscipit. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Architecto quidem facere vitae suscipit.
				</p>
			</div>
		</div>
	</div>
</section>
<section class="">
	<Faq />
</section>

<style lang="scss">
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



	.service-card {
		border-radius: var(--border-radius);
		padding: 20px;
		margin-bottom: 20px;
	}

	.service-card h3 {
		color: var(--primary);
	}

	.service-card p {
		color: var(--primary);
	}

	.about-us {
		background-color: var(--primary);
		padding: 20px;
		color: var(--dark);
	}
</style>
