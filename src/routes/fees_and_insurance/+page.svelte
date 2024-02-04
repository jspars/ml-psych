<script>
</script>

<section>
	<h1 class="text-6xl p-5">Fees and Insurance</h1>
	<div class="rounded my-grid p-10">
		<div class="grid-item">
			<h3 class="text-xl font-sans font-medium bg-[var(--primary)] px-5 py-4 text-[var(--bg)]">Individual intake</h3>
            <h3 class="text-xl font-sans font-medium bg-[var(--primary)] px-5 py-4 text-[var(--bg)]">$170</h3>
		</div>
		<div class="grid-item">
			<h3 class="text-xl font-sans font-medium bg-[var(--primary)] px-5 py-4 text-[var(--bg)]">Individual session</h3>
            <h3 class="text-xl font-sans font-medium bg-[var(--primary)] px-5 py-4 text-[var(--bg)]">$140</h3>
		</div>
		<div class="grid-item">
			<h3 class="text-xl font-sans font-medium bg-[var(--secondary)] px-5 py-4 text-slate-800">Couples intakes</h3>
            <h3 class="text-xl font-sans font-medium bg-[var(--secondary)] px-5 py-4 text-slate-800">$225</h3>
		</div>
		<div class="grid-item">
			<h3 class="text-xl font-sans font-medium bg-[var(--secondary)] px-5 py-4 text-slate-800">Couples session</h3>
            <h3 class="text-xl font-sans font-medium bg-[var(--secondary)] px-5 py-4 text-slate-800">$175</h3>		</div>
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

	<div />
	<div />
</section>

<style lang="scss">
	.my-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        // text-align: center;
        max-width: 900px;
        border-radius: 10px;
        margin: 0 auto;

        // border: 1px solid var(--primary);

        .grid-item {
            display: flex;
            // border: 1px solid var(--primary);
            // justify-content: center;
            text-align: left;
            // min-width: 400px;

            h3:last-child {
                text-align: right;
            }

            
            h3 {
                width: 100%;
                margin: 0;
            }
        }

        // .grid-item:nth-last-child(-n + 2) {
        //     border-right: 1px solid var(--secondary);
        // }

        // .grid-item:last-child {
        //     border-left: 1px solid var(--secondary);
        // }

      

	}
</style>
