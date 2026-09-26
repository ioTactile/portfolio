<script lang="ts">
  import { RetroButton, RetroCard, RetroSection } from '$lib/components';
  import { enhance } from '$app/forms';

  let { data, form } = $props<{
    data: { messages: Record<string, unknown> };
    form?: { contactStatus?: 'success' | 'error' };
  }>();

  const messages = $derived(data.messages);

  const hero = $derived(
    (messages.hero ?? {}) as {
      hello?: string;
      tagline?: string;
      cta_primary?: string;
      cta_secondary?: string;
    },
  );

  const home = $derived(
    (messages.home ?? {}) as {
      title_main?: string;
      title_accent?: string;
      body?: string;
      stats?: {
        stack_label?: string;
        stack_value?: string;
        focus_label?: string;
        focus_value?: string;
        experience_label?: string;
        experience_value?: string;
        projects_label?: string;
        projects_value?: string;
      };
      console?: {
        title?: string;
        line1?: string;
        line2?: string;
        line3?: string;
        availability?: string;
      };
      projects?: {
        eyebrow?: string;
        title?: string;
        description?: string;
        items?: {
          name?: string;
          role?: string;
          stack?: string;
          impact?: string;
          meta?: string;
          url?: string;
        }[];
      };
      about?: {
        eyebrow?: string;
        title?: string;
        intro?: string;
        highlights?: string[];
        stack_title?: string;
        stack_items?: string[];
        cta?: string;
      };
      contact?: {
        eyebrow?: string;
        title?: string;
        intro?: string;
        form?: {
          name_label?: string;
          name_placeholder?: string;
          email_label?: string;
          email_placeholder?: string;
          message_label?: string;
          message_placeholder?: string;
          submit?: string;
        };
        alt_contact?: {
          label?: string;
          email_prefix?: string;
          email?: string;
          links_label?: string;
          github?: string;
          linkedin?: string;
        };
        feedback?: {
          success?: string;
          error?: string;
        };
      };
    },
  );
</script>

<section class="grid items-center gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
  <div class="space-y-5">
    <p class="font-display text-xs tracking-[0.3em] text-secondary-text uppercase">
      {hero.hello ?? "Salut, c'est Jordan"}
    </p>
    <h1
      class="font-display text-3xl leading-tight font-semibold text-main drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)] sm:text-4xl md:text-5xl"
    >
      {home.title_main ?? 'Je conçois des interfaces web'}
      <span class="block text-secondary-text">
        {home.title_accent ?? 'modernes, rapides et maintenables.'}
      </span>
    </h1>

    <div class="flex flex-wrap gap-3 pt-2">
      <RetroButton href="#projects" variant="primary">
        {hero.cta_primary ?? 'Voir mes projets'}
      </RetroButton>
      <RetroButton href="#about" variant="secondary">
        {hero.cta_secondary ?? 'En savoir plus sur moi'}
      </RetroButton>
    </div>
  </div>

  <div class="relative">
    <div
      class="flex aspect-4/3 flex-col justify-between overflow-hidden rounded-lg border-2 border-main bg-surface/95 shadow-[8px_8px_0px_rgba(43,42,42,0.9)]"
    >
      <div class="flex items-center justify-between border-b-2 border-main bg-primary/20 px-3 py-2">
        <p class="font-display text-[11px] tracking-[0.24em] text-main uppercase">
          {home.console?.title ?? 'DEV CONSOLE // JB-01'}
        </p>
        <div class="flex gap-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-red-500"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-primary"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-secondary"></span>
        </div>
      </div>

      <div class="space-y-1 px-4 py-3 font-mono text-xs text-main/90">
        <p>{home.console?.line1 ?? '> npm run build:site'}</p>
        <p class="text-secondary-text">
          {home.console?.line2 ?? '> deploying high-perf Next.js / React UI…'}
        </p>
        <p class="text-main/75">
          {home.console?.line3 ?? '> ready ✅ — SEO, perf, a11y OK'}
        </p>
      </div>

      <div class="bg-body/80 border-t-2 border-main px-4 py-3 text-[11px] text-main/75">
        <p>
          {home.console?.availability ??
            'Disponible pour missions frontend / full‑stack léger — remote ou hybrid.'}
        </p>
      </div>
    </div>
  </div>
</section>

<div class="mt-12 sm:mt-16">
  <RetroSection
    id="projects"
    eyebrow={home.projects?.eyebrow ?? 'Projets'}
    title={home.projects?.title ?? 'Des projets concrets pour des enjeux réels'}
    description={home.projects?.description ??
      'Quelques exemples de plateformes et d’applications sur lesquelles j’ai travaillé récemment.'}
  >
    <div class="grid gap-4 md:grid-cols-2">
      {#each home.projects?.items ?? [] as project (project.name ?? project.url)}
        {#if project.url}
          <a href={project.url} target="_blank" rel="external noreferrer" class="block">
            <RetroCard
              as="article"
              interactive
              eyebrow={project.role}
              title={project.name}
              body={project.impact}
              footer={`${project.stack} · ${project.meta}`}
            />
          </a>
        {:else}
          <RetroCard
            as="article"
            interactive
            eyebrow={project.role}
            title={project.name}
            body={project.impact}
            footer={`${project.stack} · ${project.meta}`}
          />
        {/if}
      {/each}
    </div>
  </RetroSection>
</div>

<div class="mt-12 sm:mt-16">
  <RetroSection
    id="about"
    eyebrow={home.about?.eyebrow ?? 'À propos'}
    title={home.about?.title ?? 'Un développeur frontend qui pense produit'}
    description={home.about?.intro ??
      'Je m’appelle Jordan Biesmans, développeur web spécialisé sur l’écosystème React / Next.js / TypeScript.'}
  >
    <div class="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <div class="space-y-3 text-sm text-main/85 sm:text-base">
        <ul class="list-disc space-y-2 pl-4">
          {#each home.about?.highlights ?? [] as item (item)}
            <li>{item}</li>
          {/each}
        </ul>
        <p class="mt-3 text-sm text-main/90 sm:text-base">
          {home.about?.cta ??
            'Ouvert aux missions frontend et full‑stack léger, en remote ou hybride.'}
        </p>
      </div>

      <div class="space-y-3 text-[13px] sm:text-sm">
        <p class="font-display text-xs tracking-[0.25em] text-secondary-text uppercase">
          {home.about?.stack_title ?? 'Stack & outils'}
        </p>
        <ul class="space-y-2 rounded border border-main/60 bg-surface px-4 py-3">
          {#each home.about?.stack_items ?? [] as item (item)}
            <li class="flex items-start gap-2">
              <span class="mt-[5px] h-1.5 w-1.5 rounded-full bg-secondary"></span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </RetroSection>
</div>

<div class="mt-12 mb-8 sm:mt-16 sm:mb-12">
  <RetroSection
    id="contact"
    eyebrow={home.contact?.eyebrow ?? 'Contact'}
    title={home.contact?.title ?? 'Parlons de votre projet'}
    description={home.contact?.intro ??
      'Que vous ayez besoin d’un accompagnement sur une interface existante ou d’un MVP à lancer, vous pouvez me contacter via ce formulaire.'}
  >
    <div class="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <form method="POST" use:enhance class="space-y-4 text-sm sm:text-base" novalidate>
        <div class="space-y-1">
          <label class="block font-medium text-main" for="contact-name">
            {home.contact?.form?.name_label ?? 'Nom'}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            class="block w-full rounded border border-main/50 bg-surface/95 px-3 py-2 text-sm text-main shadow-[3px_3px_0px_rgba(43,42,42,0.7)] focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-body focus-visible:outline-none"
            placeholder={home.contact?.form?.name_placeholder ??
              'Votre nom ou celui de votre organisation'}
          />
        </div>

        <div class="space-y-1">
          <label class="block font-medium text-main" for="contact-email">
            {home.contact?.form?.email_label ?? 'Email'}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            class="block w-full rounded border border-main/50 bg-surface/95 px-3 py-2 text-sm text-main shadow-[3px_3px_0px_rgba(43,42,42,0.7)] focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-body focus-visible:outline-none"
            placeholder={home.contact?.form?.email_placeholder ?? 'vous@exemple.com'}
          />
        </div>

        <div class="space-y-1">
          <label class="block font-medium text-main" for="contact-message">
            {home.contact?.form?.message_label ?? 'Message'}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            class="block w-full rounded border border-main/50 bg-surface/95 px-3 py-2 text-sm text-main shadow-[3px_3px_0px_rgba(43,42,42,0.7)] focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-body focus-visible:outline-none"
            placeholder={home.contact?.form?.message_placeholder ??
              'Parlez-moi de votre projet, de votre contexte ou de vos besoins…'}></textarea>
        </div>

        <div class="pt-2">
          <RetroButton type="submit" variant="primary">
            {home.contact?.form?.submit ?? 'Envoyer le message'}
          </RetroButton>
        </div>
      </form>

      <div class="space-y-4 text-[13px] text-main/85 sm:text-sm">
        {#if form?.contactStatus === 'success'}
          <p class="rounded border border-emerald-500 bg-emerald-50 px-3 py-2 text-emerald-800">
            {home.contact?.feedback?.success ?? 'Merci, votre message a bien été envoyé.'}
          </p>
        {:else if form?.contactStatus === 'error'}
          <p class="rounded border border-red-500 bg-red-50 px-3 py-2 text-red-800">
            {home.contact?.feedback?.error ??
              'Une erreur est survenue lors de l’envoi. Vous pouvez aussi m’écrire directement par email.'}
          </p>
        {/if}

        <p class="font-display text-xs tracking-[0.25em] text-secondary-text uppercase">
          {home.contact?.alt_contact?.label ?? 'Contact direct'}
        </p>
        <p>
          {home.contact?.alt_contact?.email_prefix ?? 'Écrivez-moi à'}
          <a
            href={`mailto:${home.contact?.alt_contact?.email ?? 'jbs.io@protonmail.com'}`}
            class="text-secondary-text underline underline-offset-2 hover:text-secondary-text/80"
          >
            {home.contact?.alt_contact?.email ?? 'jbs.io@protonmail.com'}
          </a>
        </p>

        <p class="font-display text-xs tracking-[0.25em] text-secondary-text uppercase">
          {home.contact?.alt_contact?.links_label ?? 'Profils'}
        </p>
        <ul class="flex flex-wrap gap-3">
          <li>
            <a
              href="https://github.com/ioTactile"
              target="_blank"
              rel="noreferrer"
              class="inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-3 py-2 text-secondary-text underline underline-offset-2 hover:text-secondary-text/80"
            >
              {home.contact?.alt_contact?.github ?? 'GitHub'}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jordanbiesmans/"
              target="_blank"
              rel="noreferrer"
              class="inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-3 py-2 text-secondary-text underline underline-offset-2 hover:text-secondary-text/80"
            >
              {home.contact?.alt_contact?.linkedin ?? 'LinkedIn'}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </RetroSection>
</div>
