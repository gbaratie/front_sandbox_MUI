# Portfolio de Consultant & Artiste

Ce projet est un site vitrine minimaliste construit avec **Next.js**, **React**, **TypeScript** et **Material‑UI (MUI)**.
Il présente vos activités de conseil et vos réalisations artistiques au travers de trois pages : **Accueil**, **Projets** et **Contact**.

## 🔧 Prérequis

Assurez‑vous d’avoir installé **Node.js** (version 16 ou supérieure) et **npm** ou **yarn** sur votre machine.

## 📦 Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/consulting-portfolio.git
   cd consulting-portfolio
   ```
2. Installez les dépendances :
   ```bash
   npm install
   # ou avec yarn :
   # yarn install
   ```

## 🚀 Lancement en développement

Pour démarrer le serveur de développement avec rechargement à chaud :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez ensuite votre navigateur à l’adresse `http://localhost:3000`.
Les modifications de code s’actualisent automatiquement.

## 🛠 Construction et export statique

Ce site est conçu pour être exporté statiquement et hébergé sur **GitHub Pages** ou tout autre serveur statique.
Pour générer la version de production et l’exporter :

```bash
npm run build     # compile le site pour la production
npm run export    # génère le dossier `out/` contenant les fichiers statiques
# ou avec yarn :
# yarn build && yarn export
```

Le dossier `out/` contient tout le contenu prêt à être déployé (HTML, CSS, JS et assets).

## 🌍 Déploiement sur GitHub Pages

1. **Activer GitHub Pages** : dans les paramètres de votre dépôt GitHub, activez GitHub Pages et choisissez la source `branch: main` et le dossier `/docs` ou configurez l’option **GitHub Actions** si vous souhaitez automatiser.

2. **Copier les fichiers exportés** : déplacez le contenu du dossier `out/` vers un dossier appelé `docs/` à la racine du dépôt (ou configurez le chemin selon vos préférences). Par exemple :
   ```bash
   rm -rf docs
   cp -R out docs
   git add docs
   git commit -m "Déploiement statique"
   git push origin main
   ```

3. **Configurer le `basePath`** si nécessaire : si votre site est hébergé sur une sous‑URL (par ex. `https://votre-utilisateur.github.io/mon‑portfolio`), vous devrez renseigner `basePath` et `assetPrefix` dans `next.config.js`. Décommentez et ajustez les lignes suivantes :

```js
// basePath: '/mon‑portfolio',
// assetPrefix: '/mon‑portfolio/',
```

4. Une fois le commit poussé, GitHub Pages publie automatiquement le contenu de votre site. L’URL de votre page sera visible dans les paramètres de votre dépôt.

## 🎨 Personnalisation

- **Images** : remplacez le fichier `public/placeholder.png` par vos propres images (portrait, projets, etc.).
- **Contenu** : modifiez les textes dans `pages/index.tsx`, `pages/projects.tsx` et `pages/contact.tsx` pour refléter votre parcours et vos projets.
- **Thème** : ajustez les couleurs et la typographie dans `theme/theme.ts` pour correspondre à votre identité visuelle.

## 📝 Licence

Ce projet est distribué sous licence MIT. Vous êtes libre de l’utiliser et de le modifier selon vos besoins.
