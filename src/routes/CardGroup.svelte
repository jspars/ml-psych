<script>
	import { base } from '$app/paths';
</script>

<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
	<div class="col">
		<div
			class="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
			style="background-image: url('{base}/images/couples0.png');"
		>
			<div class="d-flex flex-column h-100 p-5 pb-3 bg-white/30">
				<h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-gray-900 drop-shadow-xl">Couples Therapy</h3>
			</div>
		</div>
	</div>

	<div class="col">
		<div
			class="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
			style="background-image: url('{base}/images/individual0.png');"
		>
			<div class="d-flex flex-column h-100 p-5 pb-3 bg-white/30">
				<h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-gray-900 drop-shadow-md">Individual Therapy</h3>
			</div>
		</div>
	</div>

	<div class="col">
		<div
			class="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
			style="background-image: url('{base}/images/tele1.png');"
		>
			<div class="d-flex flex-column h-100 p-5 pb-3 bg-white/30 text-shadow-1">
				<h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-gray-900 drop-shadow-md">Teletherapy</h3>
			</div>
		</div>
	</div>
</div>

<style>
    .feature-icon {
  width: 4rem;
  height: 4rem;
  border-radius: .75rem;
}

.icon-square {
  width: 3rem;
  height: 3rem;
  border-radius: .75rem;
}

.text-shadow-1 { text-shadow: 0 .125rem .25rem rgba(0, 0, 0, .25); }
.text-shadow-2 { text-shadow: 0 .25rem .5rem rgba(0, 0, 0, .25); }
.text-shadow-3 { text-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .25); }

.card-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.feature-icon-small {
  width: 3rem;
  height: 3rem;
}

</style>
