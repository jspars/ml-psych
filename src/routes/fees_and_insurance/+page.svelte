<script>
	import { base } from '$app/paths'

	import PageHeader from '$lib/components/PageHeader.svelte';
	import Prices from './Prices.svelte';

</script>


<PageHeader headerText="Fees" backgroundImage="/images/fees-header.png"/>

<div class="my-5 container max-w-[1000px]">
	
	<p class="pt-4">
		Currently, I work with a third-party platform to bill insurance for individuals
        located in Virginia only. Through this platform, I can accept commercial Aetna or
        Anthem/BCBS plans.
	</p>
    <p class="">
        If you do not have either of these insurance plans, or if you are located
        in a state other than Virginia, below are my self-pay rates and if meeting
        diagnostic criteria as required by insurance companies, I may be able to
        provide you with a receipt to file with your insurance company for
        out-of-network reimbursement.

    </p>
    <p class="pb-4">
        <strong>Couples therapy is self-pay only.</strong> See FAQ for more information.
    </p>
	<Prices />
	
	<div class="pb-10">
<!--
        <h3 class="pt-4 font-light">About Insurance</h3>
        <p>
            I am currently an out-of-network provider. If meeting diagnostic criteria,
            as required by insurance companies, I may be able to provide you a receipt
            to file with your insurance company for out-of-network reimbursement.
        </p>

-->



        <h3>
			Insurances Accepted<span class="font-light text-lg align-top text-slate-600">†*</span>
		</h3>
		<div class="">
			<p class="font-normal ml-2 mt-1">Commercial Anthem/BCBS and Aetna</p>
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
