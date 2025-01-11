<script>
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Faq from '$lib/components/Faq.svelte';
    import { base } from '$app/paths';

</script>
<PageHeader backgroundImage="/images/psypact-header.png" headerText="Frequently Asked Questions" />


<section class="container max-w-[1000px] min-h-[45vh]">
    <div class="mx-auto">
        <Faq />
	</div>
	
    
</section>

<style>

</style>