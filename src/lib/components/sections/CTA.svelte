<script>
	/**
	 * CTA — closing call-to-action band: --surface-accent ground (sage in
	 * light, lavender-tinted smoky band in dark) with content in the
	 * constrained container.
	 *
	 * No ghost/secondary buttons on this band: the light sage ground can't
	 * carry --link text (~3.2:1) or a --border-strong stroke (~1.8:1) — the
	 * filled primary is the only variant with safe contrast here (both themes).
	 * Copy is a draft — owner-editable.
	 */
	import { base } from '$app/paths';
	import Button from '../primitives/Button.svelte';
</script>

<section class="cta" aria-labelledby="cta-title">
	<div class="container">
		<h2 id="cta-title">Ready when you are</h2>
		<p>
			Reaching out is the hardest part. Send a note and we can talk about what you're looking for.
		</p>
		<Button href="{base}/contact">Get in touch now</Button>
	</div>
</section>

<style>
	.cta {
		background-color: var(--surface-accent);
		padding-block: var(--space-xl);
	}

	.cta h2 {
		margin-block-end: var(--space-2xs);
	}

	.cta p {
		max-width: var(--measure);
		margin-block-end: var(--space-m);
	}
</style>
