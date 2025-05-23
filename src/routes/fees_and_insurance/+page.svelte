<script>
	import { base } from '$app/paths'

	import PageHeader from '$lib/components/PageHeader.svelte';
	import Prices from './Prices.svelte';

</script>


<PageHeader headerText="Fees" backgroundImage="/images/fees-header.png"/>

<div class="my-5 container max-w-[1000px]">
	
	<p class="py-4">
		Below, is the fee structure for both individual and 
		couples therapy sessions.
	</p>
	<Prices />
	
	<div class="p-10 pt-0">
		<h3>
			Insurances Accepted<span class="font-light text-sm align-top text-slate-600">†*</span>
		</h3>
		<div class="">
			<h4 class="font-normal text-slate-600">Aetna</h4>
			<p class="text-sm text-slate-500">
				† Couples therapy is not covered by most health insurance policies. See FAQ for more
				information.<br />
				* Currently accepting these insurances for people located in Virginia only.
			</p>
		</div>
	</div>

</div>

<style lang="scss">
	
</style>
