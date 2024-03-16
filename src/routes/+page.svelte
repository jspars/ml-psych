<script>
	import { base } from '$app/paths';
	import Faq from '$lib/components/Faq.svelte';
	import CardGroup from './CardGroup.svelte';
	import NewHero from './NewHero.svelte';
</script>

<section>
	<NewHero />
</section>

<section class="m-5">
	<CardGroup />
</section>

<!--


<section>
	<div class="pb-5">
		<div class="container p-5">
			<div class="row">
				<div class="col-md-4">
					<div class="service-card drop-shadow-lg bg-[#f2d7ba]/50 ">
						<img src="{base}/images/couples0.png" alt="">
						<h3 class="text-2xl mt-3">Couples</h3>
						<p>Together, we'll identify and break out of destructive communication cycles.</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="service-card drop-shadow-lg bg-[#f2d7ba]/50">
						<img src="{base}/images/individual0.png" alt="">
						<h3 class="text-2xl mt-3">Individual</h3>
						<p>I provide depth-oriented therapy for a diverse range of adults.</p>
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
-->


<section class="">
	<Faq />
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
