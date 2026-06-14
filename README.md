# Portfolio — Adamou Abdourmalik

Portfolio personnel de **Adamou Abdourmalik**, développeur web.
Version **statique en HTML / CSS / JavaScript pur**, recréée à partir de
l'ancien portfolio (un thème enfant WordPress dont la mise en page était
construite avec Elementor).

Cette version reprend la **palette**, les **variables CSS** et les
**animations** du thème d'origine — apparition au défilement (`reveal`) et
bouton « retour en haut » — sans dépendre de WordPress.

## 🧱 Stack

- HTML5 sémantique
- CSS3 (Flexbox, Grid, variables, `prefers-reduced-motion`)
- JavaScript vanilla (aucune dépendance)
- Police : Inter & Space Grotesk (Google Fonts)

## 📁 Structure

```
portfolio-dev/
├── index.html              # Page unique (hero, à propos, compétences, projets, contact)
├── assets/
│   ├── css/
│   │   └── style.css       # Variables, mise en page, animations, responsive
│   └── js/
│       ├── reveal.js       # Apparition au défilement (classe « reveal »)
│       ├── scroll-top.js   # Bouton « retour en haut »
│       └── main.js         # Menu mobile + année du pied de page
└── README.md
```

## 🚀 Lancer en local

Aucune compilation nécessaire. Au choix :

```bash
# Ouvrir directement le fichier
open index.html            # macOS  (xdg-open sous Linux)

# Ou via un petit serveur local
python3 -m http.server 8000
# puis http://localhost:8000
```

## ✏️ Personnalisation

- **Couleurs / typographie** : variables en haut de `assets/css/style.css`
  (bloc `:root`), notamment `--color-accent`.
- **Animation au défilement** : ajoute la classe `reveal` à n'importe quel
  élément HTML ; `reveal.js` l'anime à l'entrée dans l'écran (désactivé
  automatiquement si l'utilisateur préfère un mouvement réduit).
- **Projets** : édite les cartes `.project-card` dans `index.html`.
- **Formulaire de contact** : utilise [FormSubmit](https://formsubmit.co/) vers
  `abdourmalik@gmail.com`. Le premier envoi déclenche un email de confirmation.

## 🌐 Déploiement

### GitHub Pages (automatique)

Un workflow GitHub Actions (`.github/workflows/deploy.yml`) déploie le site à
chaque push sur `main`. Pour l'activer :

1. Fusionner cette branche dans `main`.
2. Aller dans **Settings → Pages**.
3. Sous **Build and deployment → Source**, choisir **GitHub Actions**.

Le site sera ensuite publié automatiquement à l'adresse
`https://malikatoukouta.github.io/portfolio-dev/`.

### Autres plateformes

Compatible aussi avec **Netlify** ou **Vercel** : il suffit de servir le
dossier tel quel (site statique, aucune étape de build).

## 📝 Licence

Distribué sous licence **GNU GPL v3 ou ultérieure** (comme le projet d'origine).
