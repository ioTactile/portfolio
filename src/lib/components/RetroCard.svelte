<script lang="ts">
  type Props = {
    as?: 'div' | 'section' | 'article';
    interactive?: boolean;
    titleAs?: 'h2' | 'h3' | 'p';
    eyebrow?: string;
    title?: string;
    body?: string;
    footer?: string;
  };

  let {
    as = 'div',
    interactive = false,
    titleAs = 'h3',
    eyebrow,
    title,
    body,
    footer,
  }: Props = $props();

  const base =
    'rounded border border-main/60 bg-card px-3 py-2 text-main shadow-[4px_4px_0px_rgba(43,42,42,0.8)]';

  const interactiveClasses = $derived(
    interactive
      ? 'transition hover:-translate-y-px hover:shadow-[6px_6px_0px_rgba(43,42,42,0.9)]'
      : '',
  );
</script>

<svelte:element this={as} class={`${base} ${interactiveClasses}`}>
  {#if eyebrow}
    <p class="font-display text-xs tracking-[0.2em] text-secondary-text uppercase">
      {eyebrow}
    </p>
  {/if}

  {#if title}
    <svelte:element this={titleAs} class="mt-1 font-display text-main">
      {title}
    </svelte:element>
  {/if}

  {#if body}
    <p class="mt-1 text-sm text-main">
      {body}
    </p>
  {/if}

  {#if footer}
    <div class="mt-2 text-xs text-main/85">
      {footer}
    </div>
  {/if}
</svelte:element>
