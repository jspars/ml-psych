<script>
	/**
	 * Nav — dumb link list driven by src/lib/data/nav.js.
	 *
	 * Renders every non-CTA item as a text link (muted by default, --text with
	 * a lavender underline when it matches the current URL). The CTA item is
	 * skipped: Header and Footer render it themselves so the row order stays
	 * mark · links · switcher · CTA.
	 *
	 * Layout direction is owned by the parent: Header's panel turns this into
	 * a column on mobile and a row from 48rem up; the Footer keeps its own
	 * single-row override.
	 *
	 * `on:navigate` fires after any link click so the Header can close its
	 * mobile disclosure (createEventDispatcher, legacy event forwarding —
	 * matches the project's legacy Svelte syntax).
	 */
	import { createEventDispatcher } from 'svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { NAV_ITEMS } from '$lib/data/nav.js';

	const dispatch = createEventDispatcher();

	/** Text links only — the CTA is a Button rendered by the layout. */
	const LINKS = NAV_ITEMS.filter((item) => !item.cta);

	const hrefFor = (item) => `${base}${item.href}`;
	const isCurrent = (item, pathname) => pathname === hrefFor(item);
</script>

<ul class="nav" role="list">
	{#each LINKS as item (item.href)}
		<li class="nav__item">
			<a
				class="nav__link"
				href={hrefFor(item)}
				aria-current={isCurrent(item, $page.url.pathname) ? 'page' : undefined}
				on:click={() => dispatch('navigate')}
			>
				{item.label}
			</a>
		</li>
	{/each}
</ul>

<style>
	.nav {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: var(--space-2xs);
		margin: 0;
		padding: 0;
	}

	.nav__item {
		display: flex;
	}

	.nav__link {
		color: var(--text-muted);
		font-size: var(--step--1);
		font-weight: var(--weight-medium);
		text-decoration: none;
		padding: var(--space-3xs) 0;
		transition: color var(--dur-fast) var(--ease-out);
	}

	.nav__link:hover {
		color: var(--text);
	}

	/* Current page: calm, but unmistakable — lavender underline, no color shout. */
	.nav__link[aria-current='page'] {
		color: var(--text);
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-decoration-color: var(--accent-deep);
		text-underline-offset: 0.35em;
	}

	/* Desktop (Header panel): lay links out horizontally with breathing room —
	   the padding widens the hit target as well as the visual gap. The Footer
	   keeps its own tighter override (a class selector below beats these
	   type-level rules, and its direction/wrap are independent of this
	   breakpoint). */
	@media (min-width: 48rem) {
		.nav {
			flex-direction: row;
			align-items: center;
			gap: var(--space-m);
		}

		.nav__item {
			display: inline-flex;
		}

		.nav__link {
			padding: var(--space-2xs);
		}
	}
</style>
