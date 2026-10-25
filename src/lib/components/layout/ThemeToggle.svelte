<script>
	/**
	 * ThemeToggle — three-state (light / dark / system) radio control.
	 *
	 * WAI-APG: a fieldset/legend labelled colour-theme group of actual radio
	 * inputs, so arrow keys cycle, state is announced natively, and no custom
	 * keyboard plumbing is needed. Selection persists to localStorage (same
	 * `theme` key `app.html`'s pre-paint script reads) and re-applies by
	 * setting `data-theme` on <html>.
	 *
	 * 'system' removes the hardcoded override: `app.html` already falls back to
	 * prefers-color-scheme when the stored value isn't light/dark, so this
	 * component also listens to media changes and re-applies live.
	 *
	 * Initial checked state is 'system' at SSR (static build); the real stored
	 * value is synced after mount — a one-frame cosmetic deviation in the
	 * control itself, never in the applied theme (that's `app.html`'s job).
	 */
	import { onMount, onDestroy } from 'svelte';

	const STORE_KEY = 'theme';
	const OPTIONS = ['light', 'dark', 'System'];

	const media =
		typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null;

	/** Checked value. */
	let value = 'System';

	/** Materialize a mode onto <html data-theme>. 'System' defers to the media query. */
	function apply(mode) {
		if (typeof document === 'undefined') return;
		const theme = mode === 'System' ? (media?.matches ? 'dark' : 'light') : mode;
		document.documentElement.setAttribute('data-theme', theme);
	}

	function onMediaChange(event) {
		if (value === 'System') apply(event.matches ? 'dark' : 'light');
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

	// Listen to OS changes only while 'System' is selected.
	$: if (typeof window !== 'undefined') {
		if (value === 'System') {
			media?.addEventListener('change', onMediaChange);
		} else {
			media?.removeEventListener('change', onMediaChange);
		}
	}

	onMount(() => {
		try {
			const stored = localStorage.getItem(STORE_KEY);
			if (OPTIONS.includes(stored)) value = stored;
		} catch {
			/* storage unavailable — stay on system */
		}
		apply(value);
	});

	onDestroy(() => {
		media?.removeEventListener('change', onMediaChange);
	});
</script>

<fieldset class="theme-toggle">
	<legend class="visually-hidden">Color theme</legend>
	{#each OPTIONS as opt (opt)}
		<label class="theme-toggle__opt">
			<input
				class="visually-hidden"
				type="radio"
				name="theme"
				value={opt}
				checked={value === opt}
				on:change={() => set(opt)}
			/>
			<span>{opt}</span>
		</label>
	{/each}
</fieldset>

<style>
	.theme-toggle {
		display: inline-flex;
		align-items: center;
		margin: 0;
		padding: 2px;
		border: 1px solid var(--border);
		border-radius: var(--radius-full);
		background-color: var(--surface-raised);
	}

	.theme-toggle__opt {
		display: inline-flex;
		align-items: center;
		padding: var(--space-3xs) var(--space-s);
		border-radius: var(--radius-full);
		font-size: var(--step--1);
		font-weight: var(--weight-medium);
		color: var(--text-muted);
		text-transform: capitalize;
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
</style>
