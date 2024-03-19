<script>
	import { base } from '$app/paths';
</script>

<section id="hero" class="hero d-flex align-items-center">
	<div class="container">
		<div class="row">
			<div class="col-xl-4">
				<h1 class="outline-it text-8xl">Lawson Psychotherapy</h1>
				<blockquote>
					<p class="outilne-it text-3xl">Making sense together</p>
				</blockquote>
				<div class="d-flex">
					<a href="{base}/contact" class="btn btn-warning">Get Started</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.outline-it {
		color: white;
		-webkit-text-fill-color: white; /* Will override color (regardless of order) */
		-webkit-text-stroke: 1px black;
	}

	.hero {
		width: 100%;
		min-height: 75vh;
		background: url('/images/test-hero-ill.png') center;
		background-size: cover;
		background-attachment: fixed;
		position: relative;
		padding: 120px 0;
		z-index: 3;
	}

	@media (min-width: 1034px) {
		.hero:after {
			position: absolute;
			content: '';
			width: 40%;
			background: var(--color-secondary);
			top: 0;
			bottom: 0;
		}
	}

	.hero:before {
		position: absolute;
		content: '';
		background: rgba(27, 47, 69, 0.4);
		inset: 0;
	}

	@media (max-width: 1034px) {
		.hero:before {
			/* background: rgba(27, 47, 69, 0.7); */
		}
	}

	.hero .container {
		z-index: 1;
	}

	.hero h2 {
		margin: 0;
		font-size: 48px;
		font-weight: 700;
		line-height: 1.2;
		color: #fff;
		font-family: var(--font-secondary);
	}

	.hero blockquote {
		color: #fff;
		padding-left: 20px;
		font-size: 15px;
		font-family: var(--font-default);
		border-left: 2px solid var(--color-primary);
		margin: 40px 0;
	}

	.hero .btn-get-started {
		font-family: var(--font-secondary);
		font-weight: 500;
		font-size: 15px;
		letter-spacing: 1px;
		display: inline-block;
		padding: 12px 30px;
		border-radius: 50px;
		transition: 0.5s;
		color: #fff;
		background: var(--color-primary);
	}

	.hero .btn-get-started:hover {
		background: rgba(86, 184, 230, 0.8);
	}

	.hero .btn-watch-video {
		font-size: 16px;
		transition: 0.5s;
		margin-left: 25px;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 600;
	}

	.hero .btn-watch-video i {
		color: var(--color-primary);
		font-size: 32px;
		transition: 0.3s;
		line-height: 0;
		margin-right: 8px;
	}

	.hero .btn-watch-video:hover {
		color: #fff;
	}

	.hero .btn-watch-video:hover i {
		color: #82cbed;
	}

	@media (max-width: 640px) {
		.hero h1 {
			font-size: 36px;
			line-height: 0.75;
		}

		.hero .btn-get-started,
		.hero .btn-watch-video {
			font-size: 13px;
		}

		.outline-it {
		color: white;
		-webkit-text-fill-color: white; /* Will override color (regardless of order) */
		-webkit-text-stroke: 1px white;
	}
	}
</style>
