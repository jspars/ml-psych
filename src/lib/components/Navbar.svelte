<script>
	import { base } from '$app/paths';
	
</script>

<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top" aria-label="Dark offcanvas navbar">
	<div class="container-fluid">
		<a href="{base}/" class="navbar-brand">LP</a>
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
					<li class="nav-item" id="">
						<a class="nav-link" href="{base}/about">About</a>
					</li>
					<li class="nav-item" id="">
						<a class="nav-link" href="{base}/fees_and_insurance">Fees and Insurance</a>
					</li>
					<li class="nav-item" id="">
						<a class="nav-link" href="{base}/contact">Contact me</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>

<style>
    
</style>
