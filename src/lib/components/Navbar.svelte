<script>
	import { base } from '$app/paths';
	
	import { onMount } from 'svelte';
	
	
	
</script>

<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top" aria-label="Dark offcanvas navbar">
	<div class="container-fluid">
		<a href="{base}/" class="navbar-brand">
			<img src="{base}/images/lp.png" alt="Lawson Psych Logo" width="42">
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="offcanvasNavbarDark" class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" aria-labelledby="offcanvasNavbarDarkLabel">
			<div class="offcanvas-header">
				<h2 id="offcanvasNavbarDark" class="offcanvas-title">Menu</h2>
				<button class="btn-close text-white" type="button" data-bs-dismiss="offcanvas" aria-label="Close">&#10006;</button>
			</div>
			<div class="offcanvas-body">
				<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
					<li class="nav-item ml-2" id="">
						<a href="{base}/about" data-sveltekit-reload class="nav-link">About</a>
					</li>
					<li class="nav-item ml-2" id="">
						<a href="{base}/fees_and_insurance" data-sveltekit-reload class="nav-link">Fees</a>
					</li>
					<li class="nav-item ml-2" id="">
						<a href="{base}/faq" data-sveltekit-reload class="nav-link">FAQ</a>
					</li>
					<li class="nav-item ml-2" id="">
						<a href="{base}/publications" data-sveltekit-reload class="nav-link">Publications</a>
					</li>
					<li class="nav-item ml-2" id="">
						<a href="{base}/psypact" data-sveltekit-reload class="nav-link">Non-VA Residents</a>
					</li>
					<li class="nav-item ml-2" id="">
						<a href="{base}/contact" data-sveltekit-reload role="button" class="btn btn-warning cta-button">
							Get in touch now
						</a>
						<!-- TODO modal contact form -->

					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
<div class="vote-banner">
	<span class="text-slate-600"><a class="font-black" href="https://www.dnronline.com/special/best_of_valley/voting/#/group/1740/nom/30356/110965">Vote for me!</a>  Daily News-Record's Best of the Valley 2025</span>
</div>
<style lang="scss">
	@media only screen and (min-width: 768px) {
		.cta-button {
			margin-left: 1rem;
		}

		.vote-banner {
			
		}
	}

	@media only screen and (max-width: 769px) {
		.cta-button {
			margin-top: 0.75rem;
	
		}

		.vote-banner {
			
		}
	}

	@media only screen and (max-width: 468px) {
		.vote-banner {
			
		}
	}

	.vote-banner {
		display: flex;
		align-items: center;
		justify-content: center;
		align-content: center;
		padding: 5px;
		background: hsla(300, 76%, 72%, 50%);
		overflow: hidden;
		height: 5rem;
		margin: auto;
		font-weight: 700;

		a {
			text-decoration: underline;
		}
	}
</style>
