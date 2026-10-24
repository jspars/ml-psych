<script>
	/**
	 * Footer — dark inverse band, minimal editorial scope (owner-confirmed):
	 * wordmark, repeated primary nav, legal row.
	 *
	 * Colors are token-driven via --surface-inverse / --text-inverse, so the
	 * band is navy in light theme and cream in dark — no theme prop.
	 * Muted footer text uses color-mix on the token layer per the two-tier rule
	 * (no raw palette references).
	 *
	 * TODO (DESIGN §7): link a "Data & privacy" item to /your-data once that
	 * route ships — deliberately absent now to avoid a prerendered 404 link.
	 */
	import { base } from '$app/paths';
	import Nav from './Nav.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container site-footer__inner">
		<span class="site-footer__mark" aria-hidden="true">
			<img
				class="site-footer__wordmark site-footer__wordmark--dark"
				src="{base}/images/brand/wordmark-dark.svg"
				alt=""
			/>
			<img
				class="site-footer__wordmark site-footer__wordmark--light"
				src="{base}/images/brand/wordmark.svg"
				alt=""
			/>
		</span>

		<Nav />

		<p class="site-footer__legal">
			© {year} Lawson Psychotherapy ·
			<a href="{base}/privacy">Notice of Privacy Practices/HIPAA</a>
		</p>
	</div>
</footer>

<style>
	.site-footer {
		background-color: var(--surface-inverse);
		color: var(--text-inverse);
	}

	.site-footer__inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
		padding-block: var(--space-l);
	}

	/* Stacked wordmark, theme-swapped: the light-theme band is navy
	   (--surface-inverse) so it takes the lavender-dark variant; the dark-theme
	   band is cream and takes the indigo one. The name also appears verbatim in
	   the legal line below, so the mark is aria-hidden. */
	.site-footer__mark img {
		display: block;
		height: 44px;
		width: auto;
	}

	.site-footer__wordmark--light {
		display: none;
	}

	:global([data-theme='dark']) .site-footer__wordmark--light {
		display: block;
	}

	:global([data-theme='dark']) .site-footer__wordmark--dark {
		display: none;
	}

	/* Restyle the shared Nav for the inverse band: single row, muted cream links. */
	.site-footer :global(.nav) {
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-s);
		row-gap: var(--space-2xs);
	}

	.site-footer :global(.nav__link) {
		color: color-mix(in srgb, var(--text-inverse) 70%, transparent);
		font-size: var(--step--1);
	}

	.site-footer :global(.nav__link:hover) {
		color: var(--text-inverse);
	}

	.site-footer :global(.nav__link[aria-current='page']) {
		color: var(--text-inverse);
		text-decoration-color: var(--link);
	}

	.site-footer :global([slot='actions']),
	.site-footer :global(.button) {
		min-height: 2.25rem; /* slightly smaller CTA chrome inside the band */
		font-size: var(--step--1);
	}

	.site-footer__legal {
		/* 70% cream over navy still clears 4.5:1 for --step--1 legal text. */
		color: color-mix(in srgb, var(--text-inverse) 70%, transparent);
		font-size: var(--step--1);
	}

	.site-footer__legal a {
		color: inherit;
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.site-footer__legal a:hover {
		color: var(--text-inverse);
	}
</style>
