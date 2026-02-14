# Starter Front – Next.js + MUI

Site vitrine type portfolio, prêt à servir de base pour vos projets front. Construit avec **Next.js 14**, **React 18**, **TypeScript** et **Material UI (MUI)**. Export statique possible pour GitHub Pages ou tout hébergement de fichiers statiques.

## Quick Start

```bash
git clone https://github.com/gbaratie/front_sandbox_MUI.git
cd front_sandbox_MUI
npm install
cp .env.example .env   # optionnel : personnaliser basePath et nom du site
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande        | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Serveur de développement       |
| `npm run build` | Build de production + export dans `out/` |
| `npm run start` | Servir le build (après `build`) |
| `npm run lint`   | Vérification ESLint            |
| `npm run deploy`| Build puis déploiement sur la branche `gh-pages` |

## Structure du projet

```
├── .github/workflows/   # CI/CD (déploiement GitHub Pages)
├── components/         # Composants React réutilisables
├── config/             # Configuration du site (titre, navigation)
├── data/               # Données (ex. projets)
├── lib/                # Utilitaires (basePath, etc.)
├── pages/              # Pages Next.js
├── public/             # Assets statiques (images)
└── theme/              # Thème MUI
```

## Personnalisation

### Variables d’environnement

Copiez `.env.example` en `.env` et ajustez si besoin :

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_BASE_PATH` | Chemin de base en production (ex. `/front_sandbox_MUI` pour GitHub Pages). Vide = racine. |
| `NEXT_PUBLIC_SITE_NAME` | Nom du site (header, titres de pages). |

### Contenu et style

- **Navigation** : `config/site.ts` (libellés et liens des onglets).
- **Projets** : `data/projects.ts`.
- **Thème** (couleurs, typo) : `theme/theme.ts`.
- **Images** : déposer les fichiers dans `public/` et les référencer par leur chemin (ex. `/mon-image.jpg` ou avec `basePath` en prod).

### Path aliases

Les imports peuvent utiliser l’alias `@/` (racine du projet) :

```ts
import Layout from '@/components/Layout';
import { siteName } from '@/config/site';
```

## Déploiement sur GitHub Pages

Deux options.

### Option 1 : GitHub Actions (recommandé)

1. Dans le dépôt : **Settings → Pages → Source** : **GitHub Actions**.
2. À chaque push sur `main`, le workflow `.github/workflows/deploy.yml` build le site et le déploie.
3. Si le site est sous une sous-URL (ex. `https://user.github.io/front_sandbox_MUI`), définir `NEXT_PUBLIC_BASE_PATH=/front_sandbox_MUI` dans **Settings → Secrets and variables → Actions** (ou dans un fichier `.env` utilisé en CI), ou laisser la valeur par défaut déjà prévue dans le code.

### Option 2 : Branche `gh-pages`

1. **Settings → Pages → Source** : **Deploy from a branch**.
2. **Branch** : `gh-pages`, dossier **/ (root)**.
3. En local : `npm run deploy` (build + push du contenu de `out/` sur `gh-pages`).

## Prérequis

- Node.js 18+ (recommandé : 20)
- npm (ou yarn)

## Licence

Ce projet est distribué sous la [licence MIT](LICENSE). Vous êtes libre de l’utiliser, le modifier et le redistribuer sous réserve d’inclure la notice de copyright et le texte de la licence dans les copies.

Les dépendances (Next.js, MUI, React, etc.) ont leurs propres licences, en général également permissives (MIT ou équivalent) ; voir `package.json` et les dépôts respectifs pour les détails.
