<script>
	import { base } from '$app/paths'

	import PageHeader from '$lib/components/PageHeader.svelte';
	import Prices from './Prices.svelte';

</script>


<PageHeader headerText="Fees and Insurance" backgroundImage="/images/fees-header.png"/>

<div class="my-5 mx-auto container">
	<p class="">
		Below is a summary of my fees, and it is broken into rates for individuals and rates for couples.
		Each group lists the price for the requried intake session and each session thereafter.
		If you have any questions about this structure, please make sure to include
		them when submitting the <a href="{base}/contact">Contact Form</a>.
	</p>
	<Prices />
</div>
<div class="p-10 mt-10">
	<h3>
		Insurances Accepted<span class="font-light text-sm align-top text-slate-600">†*</span>
	</h3>
	<div class="">
		<h4 class="font-normal text-slate-600">Anthem/BCBS</h4>
		<h4 class="font-normal text-slate-600">Aetna</h4>
		<p class="text-sm text-slate-500">
			† Couples therapy is not covered by most health insurance policies. See FAQ for more
			information.<br />
			* Currently accepting these insurances for Virginia residents only.
		</p>
	</div>
</div>

<style lang="scss">
	
</style>
