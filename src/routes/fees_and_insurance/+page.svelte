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
	
	<div class="pb-10">
        <h3 class="pt-4 font-light">About Insurance</h3>
        <p>
            I am currently an out-of-network provider. If meeting diagnostic criteria,
            as required by insurance companies, I may be able to provide you a receipt
            to file with your insurance company for out-of-network reimbursement.
        </p>




<!--
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
  -->
	</div>

</div>

<style lang="scss">
	
</style>
