<script>
	import { base } from '$app/paths';
</script>

<section id="page-header" class="page-header d-flex align-items-center">
	<div class="container">
		<div class="row">
			<div class="col-xl-4">
				<h1 class="text-6xl text-slate-300">About</h1>
			</div>
		</div>
	</div>
</section>

<style>
	.page-header {
		width: 100%;
		min-height: 30vh;
		background: url('/images/about-header.png') top;
		position: relative;
		padding: 120px 0;
		z-index: 3;
	}

	@media (min-width: 1034px) {
		.page-header:after {
			position: absolute;
			content: '';
			width: 40%;
			background: var(--color-secondary);
			top: 0;
			bottom: 0;
		}
	}

	.page-header:before {
		position: absolute;
		content: '';
		background: rgba(27, 47, 69, 0.6);
		inset: 0;
	}

	@media (max-width: 1034px) {
		.page-header:before {
			background: rgba(27, 47, 69, 0.7);
		}
	}

	.page-header .container {
		z-index: 1;
	}

	@media (min-width: 1024px) {
		.page-header {
			background-attachment: fixed;
		}
	}

	.page-header h2 {
		margin: 0;
		font-size: 48px;
		font-weight: 700;
		line-height: 1.2;
		color: #fff;
		font-family: var(--font-secondary);
	}

	.page-header blockquote {
		color: #fff;
		padding-left: 20px;
		font-size: 15px;
		font-family: var(--font-default);
		border-left: 2px solid var(--color-primary);
		margin: 40px 0;
	}

	.page-header .btn-get-started {
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

	.page-header .btn-get-started:hover {
		background: rgba(86, 184, 230, 0.8);
	}

	.page-header .btn-watch-video {
		font-size: 16px;
		transition: 0.5s;
		margin-left: 25px;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 600;
	}

	.page-header .btn-watch-video i {
		color: var(--color-primary);
		font-size: 32px;
		transition: 0.3s;
		line-height: 0;
		margin-right: 8px;
	}

	.page-header .btn-watch-video:hover {
		color: #fff;
	}

	.page-header .btn-watch-video:hover i {
		color: #82cbed;
	}

	@media (max-width: 640px) {
		.page-header h2 {
			font-size: 36px;
			line-height: 1;
		}

		.page-header .btn-get-started,
		.page-header .btn-watch-video {
			font-size: 13px;
		}
	}
</style>
