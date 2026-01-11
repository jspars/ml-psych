    <script>
	import AboutCard from './AboutCard.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<PageHeader backgroundImage="/images/about-header.png" headerText="About" />
<section class="container mt-5">
    
</section>

<style lang="scss">
	@media only screen and (max-width: 768px) {
		.about-container {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.about-card {
			order: 1;
			margin: auto 1rem;
			margin-bottom: 2rem;
		}

		.about-copy {
			order: 2;
		}
	}

	.about-container {
		display: flex;
		justify-content: space-between;
	}

	.about-card {
		max-width: 350px;
		/* flex-shrink: 0; */
		margin-left: 2rem;
	}

	.about-copy {


	}

    .my-list {
        list-style: disc;
        margin-left: 2rem;
        margin-bottom: 3rem;
    }

</style>
