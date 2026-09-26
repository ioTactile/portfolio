# Jordan Biesmans — Portfolio

Site personnel de **Jordan Biesmans**, développeur web spécialisé frontend (Next.js / React / TypeScript).  
Identité visuelle rétro, contenu bilingue (FR / EN), formulaire de contact, déploiement Vercel.

**Live :** [à configurer] · **Repo :** [ioTactile/personal](https://github.com/ioTactile/personal)

---

## Fonctionnalités

- Landing portfolio à esthétique rétro (palette, typo display, composants dédiés)
- Internationalisation typée (`fr` par défaut, `en` via `?lang=en`)
- Formulaire de contact (envoi d’e-mails via [Resend](https://resend.com))
- Kit UI réutilisable (`RetroButton`, `RetroCard`, `RetroSection`)
- Qualité : TypeScript strict, ESLint, Prettier, Vitest, Playwright

---

## Stack

| Couche | Technologies |
| --- | --- |
| Framework | [SvelteKit](https://svelte.dev/docs/kit) · [Svelte 5](https://svelte.dev/docs) |
| Langage | TypeScript |
| Styles | Tailwind CSS 4 |
| i18n | typesafe-i18n |
| E-mail | Resend |
| Tests | Vitest · Playwright |
| Déploiement | Vercel (`@sveltejs/adapter-vercel`) |
| Package manager | pnpm |

---

## Prérequis

- **Node.js** ≥ 22.12 (recommandé : Node 24 LTS)
- **pnpm** ≥ 10

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

---

## Démarrage

```bash
git clone https://github.com/ioTactile/personal.git
cd personal
pnpm install
cp .env.example .env   # puis renseigner les variables
pnpm dev
```

L’app est disponible sur [http://localhost:5173](http://localhost:5173).

---

## Variables d’environnement

Créer un fichier `.env` à la racine (non versionné) :

| Variable | Obligatoire | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Oui (prod / contact) | Clé API Resend pour l’envoi du formulaire |

Sans `RESEND_API_KEY`, le formulaire de contact renvoie une erreur serveur contrôlée.

---

## Scripts

| Commande | Description |
| --- | --- |
| `pnpm dev` | Serveur de développement |
| `pnpm build` | Build de production |
| `pnpm preview` | Prévisualisation du build |
| `pnpm check` | Sync SvelteKit + contrôle TypeScript / Svelte |
| `pnpm lint` | Prettier (check) + ESLint |
| `pnpm format` | Formatage Prettier |
| `pnpm test:unit` | Tests unitaires / composants (Vitest) |
| `pnpm test:e2e` | Tests end-to-end (Playwright) |
| `pnpm test` | Unitaires + e2e |

---

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

**Règles d’import :**

- Une page (`routes`) peut importer UI, domaine et infrastructure.
- Un composant UI de base ne dépend que de Svelte, Tailwind et d’utilitaires purs — pas d’appels API ni de navigation directe.

---

## Internationalisation

- Locales : `fr` (défaut), `en`
- Surcharge via query string : `?lang=en`
- Textes UI principaux via les dictionnaires JSON — pas de chaînes en dur dans les pages

---

## Design system

Palette (tokens Tailwind) :

| Token | Hex | Usage |
| --- | --- | --- |
| `bg` / fond | `#F5F2F2` | Background global |
| `primary` | `#FEB05D` | Accent / CTA |
| `secondary` | `#5A7ACD` | Liens / secondaire |
| `text-main` | `#2B2A2A` | Texte principal |

Typographies : `font-display` (titres), `font-body` (corps de texte).  
Les animations respectent `prefers-reduced-motion`.

---

## Déploiement

Cible : **Vercel** via `@sveltejs/adapter-vercel`.

1. Connecter le dépôt GitHub au projet Vercel
2. Définir `RESEND_API_KEY` dans les variables d’environnement du projet
3. Build command : `pnpm build` · Install : `pnpm install`

Déploiement local de contrôle :

```bash
pnpm build
pnpm preview
```

---

## Licence

Projet privé — tous droits réservés.

---

## Contact

- **E-mail :** jbs.io@protonmail.com  
- **GitHub :** [ioTactile](https://github.com/ioTactile)  
- **LinkedIn :** [jordanbiesmans](https://www.linkedin.com/in/jordanbiesmans/)
