<script>
	/**
	 * ThemeFab — floating theme switcher (owner call: the inline header control
	 * crowded the row's real UI). A round FAB pinned bottom-right shows the
	 * current mode's glyph; activating it discloses a compact panel of actual
	 * radio options (light / dark / system), so arrow keys cycle and state is
	 * announced natively — no custom menu plumbing.
	 *
	 * Escape, an outside click, tabbing past the panel, or picking an option
	 * closes it; focus returns to the trigger. The panel expands out of the
	 * FAB's corner (--ease-out snap) with the option rows cascading in behind
	 * it; reduced-motion users get it instantly (see the media query below).
	 * Selection persists to
	 * localStorage under the same `theme` key `app.html`'s pre-paint script
	 * reads. Ids stay lowercase ('light' | 'dark' | 'system') — display
	 * casing is CSS, never the stored value.
	 *
	 * 'system' removes the hardcoded override: `app.html` already falls back
	 * to prefers-color-scheme when the stored value isn't light/dark, so this
	 * component also listens to media changes and re-applies live.
	 *
	 * A flip adds `.theme-switching` to <html> for one beat so painted
	 * surfaces fade instead of snapping (see `_utilities.scss`).
	 *
	 * Initial checked state is 'system' at SSR (static build); the real stored
	 * value is synced after mount — a one-frame cosmetic deviation in the
	 * control itself, never in the applied theme (that's `app.html`'s job).
	 */
	import { onMount, onDestroy } from 'svelte';
	import ThemeIcon from '../primitives/ThemeIcon.svelte';

	const STORE_KEY = 'theme';
	const OPTIONS = [
		{ id: 'light', label: 'Light' },
		{ id: 'dark', label: 'Dark' },
		{ id: 'system', label: 'System' }
	];

	const media =
		typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null;

	/** Checked value. */
	let value = 'system';
	/** Panel visibility. */
	let open = false;
	let root;
	let trigger;
	let switchTimer;

	/** Materialize a mode onto <html data-theme>. 'system' defers to the media query. */
	function apply(mode) {
		if (typeof document === 'undefined') return;
		const theme = mode === 'system' ? (media?.matches ? 'dark' : 'light') : mode;
		const rootEl = document.documentElement;

		if (rootEl.getAttribute('data-theme') !== theme) {
			rootEl.classList.add('theme-switching');
			clearTimeout(switchTimer);
			switchTimer = setTimeout(() => rootEl.classList.remove('theme-switching'), 300);
		}

		rootEl.setAttribute('data-theme', theme);
	}

	function onMediaChange(event) {
		if (value === 'system') apply(event.matches ? 'dark' : 'light');
	}

	function set(mode) {
		value = mode;
		try {
			localStorage.setItem(STORE_KEY, mode);
		} catch {
			/* private mode / blocked storage — apply still works for this visit */
		}
		apply(mode);
		close();
		trigger?.focus();
	}

	function toggle() {
		open = !open;
	}

	function close() {
		open = false;
	}

	function onWindowClick(event) {
		if (open && root && !root.contains(event.target)) close();
	}

	function onFocusOut(event) {
		// Only a real focus destination outside the widget closes it. A plain
		// blur (relatedTarget null — e.g. mousedown blurring the trigger a beat
		// before the label forwards focus to its radio) must not: the click that
		// follows still lands inside the open panel. Outside clicks are handled
		// by onWindowClick; keyboard tab-out carries a real relatedTarget.
		if (open && event.relatedTarget && !root.contains(event.relatedTarget)) close();
	}

	function onWindowKeydown(event) {
		if (event.key === 'Escape' && open) {
			close();
			trigger?.focus();
		}
	}

	// Listen to OS changes only while 'system' is selected.
	$: if (typeof window !== 'undefined') {
		if (value === 'system') {
			media?.addEventListener('change', onMediaChange);
		} else {
			media?.removeEventListener('change', onMediaChange);
		}
	}

	onMount(() => {
		try {
			const stored = localStorage.getItem(STORE_KEY);
			if (OPTIONS.some((opt) => opt.id === stored)) value = stored;
		} catch {
			/* storage unavailable — stay on system */
		}
		apply(value);
	});

	onDestroy(() => {
		media?.removeEventListener('change', onMediaChange);
		clearTimeout(switchTimer);
	});
</script>

<svelte:window on:click={onWindowClick} on:keydown={onWindowKeydown} />

<div class="theme-fab" bind:this={root} on:focusout={onFocusOut}>
	{#if open}
		<fieldset id="theme-fab-menu" class="theme-fab__menu">
			<legend class="visually-hidden">Color theme</legend>
			{#each OPTIONS as opt, i (opt.id)}
				<label class="theme-fab__opt" style="--i:{i}">
					<input
						class="visually-hidden"
						type="radio"
						name="theme"
						value={opt.id}
						checked={value === opt.id}
						on:change={() => set(opt.id)}
					/>
					<ThemeIcon mode={opt.id} />
					<span>{opt.label}</span>
				</label>
			{/each}
		</fieldset>
	{/if}

	<button
		class="theme-fab__button"
		bind:this={trigger}
		aria-label="Color theme"
		aria-expanded={open}
		on:click={toggle}
	>
		<ThemeIcon mode={value} size={20} />
	</button>
</div>

<style>
	.theme-fab {
		position: fixed;
		inset-block-end: var(--space-s);
		inset-inline-end: var(--space-s);
		z-index: 70;
	}

	.theme-fab__button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		padding: 0;
		border: 0;
		border-radius: var(--radius-full);
		background-color: var(--accent-deep);
		color: var(--text-inverse);
		box-shadow: var(--shadow-m);
		cursor: pointer;
		transition:
			background-color var(--dur-fast) var(--ease-out),
			color var(--dur-fast) var(--ease-out);
	}

	.theme-fab__button:hover {
		background-color: color-mix(in srgb, var(--accent-deep) 85%, var(--surface-inverse));
	}

	.theme-fab__button:active {
		background-color: color-mix(in srgb, var(--accent-deep) 70%, var(--surface-inverse));
	}

	/* Disclosure menu: actual radios inside a labelled fieldset, so arrow keys
	   cycle and state is announced natively. It expands out of the FAB's
	   corner — strong-deceleration --ease-out does the "quick expand, snap to
	   final size" feel; the rows cascade in behind it. */
	.theme-fab__menu {
		position: absolute;
		inset-inline-end: 0;
		inset-block-end: calc(100% + var(--space-2xs));
		display: flex;
		flex-direction: column;
		gap: 2px;
		margin: 0;
		padding: var(--space-3xs);
		min-width: 9.5rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-m);
		background-color: var(--surface-raised);
		box-shadow: var(--shadow-m);
		transform-origin: bottom right;
		animation: theme-fab-in var(--dur-fast) var(--ease-out);
	}

	@keyframes theme-fab-in {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
	}

	.theme-fab__opt {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		padding: var(--space-2xs) var(--space-s);
		border-radius: var(--radius-s);
		color: var(--text-muted);
		font-size: var(--step--1);
		font-weight: var(--weight-medium);
		cursor: pointer;
		user-select: none;
		opacity: 0;
		animation: theme-fab-row var(--dur-fast) var(--ease-out) forwards;
		animation-delay: calc(var(--i, 0) * 40ms);
		transition:
			background-color var(--dur-fast) var(--ease-out),
			color var(--dur-fast) var(--ease-out);
	}

	@keyframes theme-fab-row {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	.theme-fab__opt:hover {
		background-color: color-mix(in srgb, var(--surface-accent) 18%, transparent);
		color: var(--text);
	}

	.theme-fab__opt:has(input:checked) {
		background-color: var(--accent-deep);
		color: var(--text-inverse);
	}

	/* The hidden input keeps native radio semantics; the ring draws on the row. */
	.theme-fab__opt:has(input:focus-visible) {
		outline: 2px solid var(--focus);
		outline-offset: 2px;
	}

	/* Reduced motion: show the menu and its rows instantly. The global reset
	   zeroes animation durations but not delays, so override explicitly. */
	@media (prefers-reduced-motion: reduce) {
		.theme-fab__menu,
		.theme-fab__opt {
			animation: none;
			opacity: 1;
			transform: none;
		}
	}

	/* A floating control has no place on paper. */
	@media print {
		.theme-fab {
			display: none;
		}
	}
</style>
