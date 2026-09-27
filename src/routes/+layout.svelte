<script>
	import '../styles/app.scss';
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<a class="skip-link" href="#main">Skip to content</a>

<Navbar />
<main id="main">
	<slot />
</main>

<Footer />
