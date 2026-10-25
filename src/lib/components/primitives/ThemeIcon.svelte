<script>
	/**
	 * ThemeIcon — decorative sun / moon / monitor glyph for a theme mode
	 * ('light' | 'dark' | 'system'). Pure chrome: stroke follows currentColor
	 * and sizing is the consumer's job, so the accessible name must live on
	 * the control that uses it (never on the icon itself).
	 */
	export let mode = 'system';
	export let size = 16;
</script>

<svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
	{#if mode === 'light'}
		<circle cx="8" cy="8" r="3" />
		<path
			d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.2 3.2l1.05 1.05M11.75 11.75l1.05 1.05M12.8 3.2l-1.05 1.05M4.25 11.75l-1.05 1.05"
		/>
	{:else if mode === 'dark'}
		<path d="M13.4 9.9A5.75 5.75 0 0 1 6.1 2.6a5.75 5.75 0 1 0 7.3 7.3Z" />
	{:else}
		<!-- 'system' follows the device, so the glyph splits light/dark:
		     half-filled disc instead of a monitor. -->
		<circle cx="8" cy="8" r="5.75" />
		<path fill="currentColor" stroke="none" d="M8 2.25A5.75 5.75 0 0 0 8 13.75Z" />
	{/if}
</svg>

<style>
	svg {
		display: block;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
