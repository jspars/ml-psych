<script>
	import home_image from '$lib/assets/hero.jpg';
	// import Faq from '$lib/components/Faq.svelte';
</script>

<!-- Hero Section -->
<section class="hero-section bg-[var(--dark)] px-5 py-5">
	<div class="home-hero">
		<div class="text-[var(--primary)] rounded px-10 py-3 home-head bg-[#6874E8]/40">
			<h1 class="pb-3 font-light">Lawson Psychotherapy</h1>
			<h2 class="pb-3 font-light text-5xl">Making sense together</h2>
			<div>
				<a href="/contact" class="btn btn-primary">Get in touch</a>
				<a href="/about" class="btn btn-secondary">Learn more</a>
			</div>
		</div>
		<img
			src={home_image}
			width="800"
			class=""
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
						<h3>Depth Therapy</h3>
						<p>Focus on the root cause of distress to get to the bottom of your suffering.</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="service-card drop-shadow-lg bg-[#f2d7ba]/50">
						<h3>Couples</h3>
						<p>
							One is the loneliest number. Two can be as bad as one; it's the loneliest since the
							number one.
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="service-card drop-shadow-lg bg-[#f2d7ba]/50">
						<h3>Individuals</h3>
						<p>Providing adults affirming and compassionate therapy for all kinds of shit.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<h2 class="pt-5">Use your words</h2>
				<p class="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt
					sint animi sapiente vitae suscipit. Dolor sit amet consectetur adipisicing
					elit. Architecto quidem facere deserunt vitae suscipit.
				</p>

				<h2 class="pt-5 text-right">Don't be so mad</h2>
				<p class="text-right">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt
					sint animi sapiente vitae suscipit. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Architecto quidem facere vitae suscipit.
				</p>
			</div>
		</div>
	</div>
</section>
<section class="pb-5">
	<!-- <Faq /> -->
</section>

<style lang="scss">
	.home-hero {
		// position: relative;

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
		min-height: 34rem;

		h2 {
			width: 20rem;
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
