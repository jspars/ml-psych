<script>
	/**
	 * Header — sticky site banner (owner-confirmed: sticky).
	 *
	 * Anatomy: container row → wordmark link · nav panel (Nav + ThemeToggle) ·
	 * mobile disclosure toggle.
	 *
	 * Below the 48rem breakpoint the panel is a hidden disclosure: the toggle
	 * button carries aria-expanded/aria-controls, opens a full-width column
	 * under the row, and any link click (Nav.on:navigate) or Escape closes it.
	 * From 48rem up the toggle is display:none and the panel is always an
	 * inline row — CSS-owned visibility, so no-JS users still get the nav.
	 *
	 * Tokens only; the sticky background is plain --surface over a --border
	 * hairline. Dark theme rides the token swap.
	 */
	import { base } from '$app/paths';
	import Nav from './Nav.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let open = false;
	const close = () => (open = false);
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && open && close()} />

<header class="site-header">
	<div class="container site-header__inner">
		<a class="site-header__brand" href="{base}/">
			<img
				class="site-header__wordmark site-header__wordmark--light"
				src="{base}/images/brand/wordmark.svg"
				alt=""
				height="34"
			/>
			<img
				class="site-header__wordmark site-header__wordmark--dark"
				src="{base}/images/brand/wordmark-dark.svg"
				alt=""
				height="34"
			/>
			<span class="visually-hidden">Lawson Psychotherapy — home</span>
		</a>

		<div id="site-nav-panel" class="site-header__panel" class:site-header__panel--open={open}>
			<Nav on:navigate={close} />
			<ThemeToggle />
		</div>

		<button
			class="site-header__toggle"
			aria-expanded={open}
			aria-controls="site-nav-panel"
			on:click={() => (open = !open)}
		>
			<span class="site-header__bars" aria-hidden="true">
				<span></span><span></span><span></span>
			</span>
			<span class="visually-hidden">{open ? 'Close' : 'Open'} menu</span>
		</button>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 60;
		background-color: var(--surface);
		border-bottom: 1px solid var(--border);
	}

	.site-header__inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-s);
		padding-block: var(--space-xs);
	}

	.site-header__brand {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
	}

	/* Stacked wordmark (owner-provided Canva export): indigo variant on light
	   theme, lavender-on-dark variant otherwise. The name also lives in the
	   visually-hidden label for AT, and in the footer's © line. */
	/* Sizing only — `display` is owned by the variant classes below so the
	   cascade never depends on source order or specificity. */
	.site-header__wordmark {
		height: 34px;
		width: auto;
	}

	.site-header__wordmark--light {
		display: block;
	}

	.site-header__wordmark--dark {
		display: none;
	}

	:global([data-theme='dark']) .site-header__wordmark--light {
		display: none;
	}

	:global([data-theme='dark']) .site-header__wordmark--dark {
		display: block;
	}

	/* Mobile: hidden disclosure, full-width column below the row. */
	.site-header__panel {
		flex: 1 1 100%;
		display: none;
		flex-direction: column;
		align-items: stretch;
		gap: var(--space-s);
		padding-block: var(--space-2xs) var(--space-s);
	}

	.site-header__panel--open {
		display: flex;
	}

	.site-header__toggle {
		margin-left: auto;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: var(--control-min-h);
		height: var(--control-min-h);
		padding: 0;
		border: 1.5px solid var(--border-strong);
		border-radius: var(--radius-full);
		background-color: transparent;
		color: var(--text);
		cursor: pointer;
		transition: background-color var(--dur-fast) var(--ease-out);
	}

	.site-header__toggle:hover {
		background-color: color-mix(in srgb, var(--surface-accent) 18%, transparent);
	}

	.site-header__bars {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.site-header__bars span {
		display: block;
		width: 18px;
		height: 2px;
		border-radius: 1px;
		background-color: currentColor;
		transition: transform var(--dur-fast) var(--ease-out);
	}

	/* Animate the bars into an × when open. */
	.site-header__toggle[aria-expanded='true'] .site-header__bars span:nth-child(1) {
		transform: translateY(5px) rotate(45deg);
	}

	.site-header__toggle[aria-expanded='true'] .site-header__bars span:nth-child(2) {
		opacity: 0;
	}

	.site-header__toggle[aria-expanded='true'] .site-header__bars span:nth-child(3) {
		transform: translateY(-5px) rotate(-45deg);
	}

	/* Desktop: panel becomes an inline row, toggle disappears. */
	@media (min-width: 48rem) {
		.site-header__toggle {
			display: none;
		}

		.site-header__panel {
			display: flex;
			flex: 1;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			gap: var(--space-m);
			padding-block: 0;
		}
	}
</style>
