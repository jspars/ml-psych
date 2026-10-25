<script>
	/**
	 * ThemeToggle — three-state (light / dark / system) icon radio control.
	 *
	 * WAI-APG: a fieldset/legend labelled colour-theme group of actual radio
	 * inputs, so arrow keys cycle, state is announced natively, and no custom
	 * keyboard plumbing is needed. Icons are decorative; each option's name
	 * lives in visually-hidden text, and the hover/focus tooltip mirrors it.
	 *
	 * Selection persists to localStorage under the same `theme` key
	 * `app.html`'s pre-paint script reads. Ids stay lowercase
	 * ('light' | 'dark' | 'system') — display casing is CSS, never the stored
	 * value, so relabelling the UI can't orphan a preference.
	 *
	 * 'system' removes the hardcoded override: `app.html` already falls back to
	 * prefers-color-scheme when the stored value isn't light/dark, so this
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
	let switchTimer;

	/** Materialize a mode onto <html data-theme>. 'system' defers to the media query. */
	function apply(mode) {
		if (typeof document === 'undefined') return;
		const theme = mode === 'system' ? (media?.matches ? 'dark' : 'light') : mode;
		const root = document.documentElement;

		if (root.getAttribute('data-theme') !== theme) {
			root.classList.add('theme-switching');
			clearTimeout(switchTimer);
			switchTimer = setTimeout(() => root.classList.remove('theme-switching'), 300);
		}

		root.setAttribute('data-theme', theme);
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

<fieldset class="theme-toggle">
	<legend class="visually-hidden">Color theme</legend>
	{#each OPTIONS as opt (opt.id)}
		<label class="theme-toggle__opt" data-tip={opt.label}>
			<input
				class="visually-hidden"
				type="radio"
				name="theme"
				value={opt.id}
				checked={value === opt.id}
				on:change={() => set(opt.id)}
			/>
			<svg class="theme-toggle__icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
				{#if opt.id === 'light'}
					<circle cx="8" cy="8" r="3" />
					<path
						d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.2 3.2l1.05 1.05M11.75 11.75l1.05 1.05M12.8 3.2l-1.05 1.05M4.25 11.75l-1.05 1.05"
					/>
				{:else if opt.id === 'dark'}
					<path d="M13.4 9.9A5.75 5.75 0 0 1 6.1 2.6a5.75 5.75 0 1 0 7.3 7.3Z" />
				{:else}
					<rect x="1.75" y="2.75" width="12.5" height="8.5" rx="1.5" />
					<path d="M8 11.25v2.25M5.25 13.5h5.5" />
				{/if}
			</svg>
			<span class="visually-hidden">{opt.label}</span>
		</label>
	{/each}
</fieldset>

<style>
	.theme-toggle {
		display: inline-flex;
		/* Intrinsic width: the pill must not stretch to the column width when
		   it sits in a stretch-aligned flex column (mobile disclosure panel). */
		width: fit-content;
		align-items: center;
		margin: 0;
		padding: 2px;
		border: 1px solid var(--border);
		border-radius: var(--radius-full);
		background-color: var(--surface-raised);
	}

	.theme-toggle__opt {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-3xs) var(--space-2xs);
		border-radius: var(--radius-full);
		color: var(--text-muted);
		cursor: pointer;
		user-select: none;
		transition:
			background-color var(--dur-fast) var(--ease-out),
			color var(--dur-fast) var(--ease-out);
	}

	.theme-toggle__opt:hover {
		color: var(--text);
	}

	.theme-toggle__opt:has(input:checked) {
		background-color: var(--accent-deep);
		color: var(--text-inverse);
	}

	/* The hidden input keeps native radio semantics; the ring draws on the pill. */
	.theme-toggle__opt:has(input:focus-visible) {
		outline: 2px solid var(--focus);
		outline-offset: 2px;
	}

	.theme-toggle__icon {
		display: block;
		width: 16px;
		height: 16px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	/* Hover/focus tooltip — same words as the visually-hidden option names. */
	.theme-toggle__opt::after {
		content: attr(data-tip);
		position: absolute;
		top: calc(100% + 8px);
		left: 50%;
		transform: translateX(-50%) translateY(-2px);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius-s);
		background-color: var(--surface-inverse);
		color: var(--text-inverse);
		font-size: var(--step--1);
		font-weight: var(--weight-medium);
		white-space: nowrap;
		opacity: 0;
		pointer-events: none;
		transition:
			opacity var(--dur-fast) var(--ease-out),
			transform var(--dur-fast) var(--ease-out);
		z-index: 10;
	}

	.theme-toggle__opt:hover::after,
	.theme-toggle__opt:focus-within::after {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}
</style>
