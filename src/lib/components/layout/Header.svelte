<script>
	/**
	 * Header — sticky site banner (owner-confirmed: sticky).
	 *
	 * One row at every width: mark (home) · primary nav · contact CTA. The
	 * theme switcher is a floating FAB owned by PageShell, so the row only
	 * holds real navigation UI.
	 *
	 * Below 48rem the nav and CTA fold into a disclosure panel under the
	 * brand row; the toggle button keeps its place at the top right, so
	 * opening the menu never moves the control that closes it.
	 *
	 * The toggle carries aria-expanded/aria-controls, opens a full-width
	 * column, and any link click (Nav.on:navigate) or Escape closes it. From
	 * 48rem up the toggle is display:none and the panel lays out inline —
	 * CSS-owned visibility, so no-JS users still get the nav.
	 *
	 * The monogram is the header brand; the wordmark cut belongs to the
	 * Footer (the compact mark keeps the single row light). The CTA is
	 * rendered here rather than inside Nav so the row order stays mark ·
	 * links · CTA.
	 *
	 * Tokens only; the sticky background is plain --surface over a --border
	 * hairline. Dark theme rides the token swap.
	 */
	import { base } from '$app/paths';
	import { NAV_ITEMS } from '$lib/data/nav.js';
	import Button from '../primitives/Button.svelte';
	import Nav from './Nav.svelte';

	/** The one CTA item — nav.js marks it `cta: true`. */
	const cta = NAV_ITEMS.find((item) => item.cta);

	let open = false;
	const close = () => (open = false);
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && open && close()} />

<header class="site-header">
	<div class="container site-header__inner">
		<a class="site-header__brand" href="{base}/">
			<img
				class="site-header__mark site-header__mark--light"
				src="{base}/images/brand/monogram.svg"
				alt=""
				height="48"
			/>
			<img
				class="site-header__mark site-header__mark--dark"
				src="{base}/images/brand/monogram-dark.svg"
				alt=""
				height="48"
			/>
			<span class="visually-hidden">Lawson Psychotherapy — home</span>
		</a>

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

		<div id="site-nav-panel" class="site-header__panel" class:site-header__panel--open={open}>
			<Nav on:navigate={close} />
			{#if cta}
				<Button href="{base}{cta.href}" on:click={close}>{cta.label}</Button>
			{/if}
		</div>
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

	/* Sizing only — `display` is owned by the variant classes below so the
	   cascade never depends on source order or specificity. */
	.site-header__mark {
		display: block;
		height: 48px;
		width: auto;
	}

	.site-header__mark--dark {
		display: none;
	}

	:global([data-theme='dark']) .site-header__mark--light {
		display: none;
	}

	:global([data-theme='dark']) .site-header__mark--dark {
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
		border-radius: var(--radius-control);
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

	/* Desktop: one always-visible row. The panel dissolves into a flex row so
	   Nav and the CTA line up beside the mark; Nav takes the slack so the CTA
	   stays pinned to the right edge. */
	@media (min-width: 48rem) {
		.site-header__inner {
			display: flex;
			align-items: center;
			gap: var(--space-l);
		}

		.site-header__toggle {
			display: none;
		}

		.site-header__panel {
			display: flex;
			flex: 1;
			flex-direction: row;
			align-items: center;
			gap: var(--space-m);
			padding-block: 0;
		}

		.site-header :global(.nav) {
			flex: 1;
		}
	}
</style>
