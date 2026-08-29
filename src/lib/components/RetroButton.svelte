<script lang="ts">
	type Variant = 'primary' | 'secondary' | 'ghost';
	type Size = 'sm' | 'md';

	import type { Snippet } from 'svelte';

	type Props = {
		variant?: Variant;
		size?: Size;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		fullWidth?: boolean;
		ariaLabel?: string;
		children?: Snippet;
	};

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		fullWidth = false,
		ariaLabel,
		children
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 rounded border-2 font-display uppercase tracking-[0.18em] transition shadow-[4px_4px_0px_rgba(43,42,42,0.9)]';

	const variants: Record<Variant, string> = {
		primary:
			'bg-primary text-main border-main hover:-translate-y-px hover:shadow-[6px_6px_0px_rgba(43,42,42,0.9)] active:translate-y-px active:shadow-[2px_2px_0px_rgba(43,42,42,0.9)]',
		secondary:
			'border-secondary-dark text-secondary-text bg-surface shadow-[4px_4px_0px_rgba(90,122,205,0.7)] hover:bg-secondary/10',
		ghost: 'border-transparent text-main hover:border-secondary hover:bg-secondary/10 shadow-none'
	};

	const sizes: Record<Size, string> = {
		md: 'px-4 py-2 text-sm',
		sm: 'px-3 py-1.5 text-xs'
	};

	const classes = $derived(
		[
			base,
			variants[variant],
			sizes[size],
			fullWidth ? 'w-full' : '',
			'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-body'
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if href}
	<!-- href is provided by callers (hash, external, or already-resolved path). -->
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a class={classes} {href} aria-label={ariaLabel}>
		{@render children?.()}
	</a>
{:else}
	<button class={classes} {type} aria-label={ariaLabel}>
		{@render children?.()}
	</button>
{/if}
