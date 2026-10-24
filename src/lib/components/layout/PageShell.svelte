<script>
	/**
	 * PageShell — owns the site skeleton (DESIGN.md §4.2): SkipLink as the
	 * first focusable element, sticky Header, <main id="main"> (the skip-link
	 * target; tabindex -1 so programmatic focus lands), Footer. Every route
	 * renders inside <main> via the default slot.
	 */
	import SkipLink from './SkipLink.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<SkipLink />
<Header />

<main id="main" tabindex="-1">
	<slot />
</main>

<Footer />
