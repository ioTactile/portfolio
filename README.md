# Jordan Biesmans — Portfolio

Site personnel de **Jordan Biesmans**, développeur web spécialisé frontend (Next.js / React / TypeScript). Identité visuelle rétro, contenu bilingue (FR / EN), formulaire de contact, déploiement Vercel.

**Live :** [à configurer] · **Repo :** [ioTactile/personal](https://github.com/ioTactile/personal)

## Features

- Landing portfolio à esthétique rétro (palette, typo display, composants dédiés)
- Internationalisation typée (`fr` par défaut, `en` via `?lang=en`)
- Formulaire de contact (envoi d’e-mails via [Resend](https://resend.com))
- Kit UI réutilisable (`RetroButton`, `RetroCard`, `RetroSection`)
- Qualité : TypeScript strict, ESLint, Prettier, Vitest, Playwright

## Stack

| Couche          | Technologies                                                                   |
| --------------- | ------------------------------------------------------------------------------ |
| Framework       | [SvelteKit](https://svelte.dev/docs/kit) · [Svelte 5](https://svelte.dev/docs) |
| Langage         | TypeScript                                                                     |
| Styles          | Tailwind CSS 4                                                                 |
| i18n            | typesafe-i18n                                                                  |
| E-mail          | Resend                                                                         |
| Tests           | Vitest · Playwright                                                            |
| Déploiement     | Vercel (`@sveltejs/adapter-vercel`)                                            |
| Package manager | pnpm                                                                           |

## Prérequis

- **Node.js** ≥ 22.12 (recommandé : Node 24 LTS)
- **pnpm** ≥ 10

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Démarrage

```bash
git clone https://github.com/ioTactile/personal.git
cd personal
pnpm install
cp .env.example .env   # puis renseigner les variables
pnpm dev
```

L’app est disponible sur [http://localhost:5173](http://localhost:5173).

Créer un fichier `.env` à la racine (non versionné) :

| Variable         | Obligatoire          | Description                               |
| ---------------- | -------------------- | ----------------------------------------- |
| `RESEND_API_KEY` | Oui (prod / contact) | Clé API Resend pour l’envoi du formulaire |

Sans `RESEND_API_KEY`, le formulaire de contact renvoie une erreur serveur contrôlée.

Déploiement Vercel : connecter le dépôt GitHub, définir `RESEND_API_KEY`, build `pnpm build` / install `pnpm install`. Contrôle local : `pnpm build && pnpm preview`.

## Scripts

| Commande         | Description                                   |
| ---------------- | --------------------------------------------- |
| `pnpm dev`       | Serveur de développement                      |
| `pnpm build`     | Build de production                           |
| `pnpm preview`   | Prévisualisation du build                     |
| `pnpm check`     | Sync SvelteKit + contrôle TypeScript / Svelte |
| `pnpm lint`      | Prettier (check) + ESLint                     |
| `pnpm format`    | Formatage Prettier                            |
| `pnpm test:unit` | Tests unitaires / composants (Vitest)         |
| `pnpm test:e2e`  | Tests end-to-end (Playwright)                 |
| `pnpm test`      | Unitaires + e2e                               |

## Architecture

Organisation inspirée clean architecture :

```
src/
├── routes/                 # Pages SvelteKit (orchestration)
├── lib/
│   ├── components/         # Kit UI rétro (présentation)
│   ├── i18n/               # Helpers & locales
│   ├── domain/             # Règles métier pures (si besoin)
│   └── infrastructure/     # Adaptateurs API / services externes
i18n/
├── fr/index.json           # Dictionnaire français
└── en/index.json           # Dictionnaire anglais
```

**Règles d’import :** une page (`routes`) peut importer UI, domaine et infrastructure ; un composant UI de base ne dépend que de Svelte, Tailwind et d’utilitaires purs.

Locales : `fr` (défaut), `en` via `?lang=en`. Palette : fond `#F5F2F2`, primary `#FEB05D`, secondary `#5A7ACD`, text `#2B2A2A`.

## Licence

Propriétaire — tous droits réservés. Voir [LICENSE](./LICENSE).
