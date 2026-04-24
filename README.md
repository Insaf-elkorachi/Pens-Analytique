# Pensée Analytique — Analytical Thinking Explorer

Mini application web interactive basée sur ton support **Pensée Analytique** :

- Hero + animation “cerveau + data”
- Section **Explorer** (Étapes / Processus / Définition)
- Section **Importance** en cartes cliquables (avec exemples concrets)
- Section **Applications** en dashboard (tabs)
- **Quiz** avec score
- Conclusion animée : “Think. Analyze. Decide.”

## Lancer en local

Option 1 (recommandée) :

- `python -m http.server 5173 --directory public --bind 127.0.0.1`
- Ouvre `http://127.0.0.1:5173`

Option 2 (sans serveur) :

- Ouvre directement `public/index.html` dans le navigateur

Option 3 (Node, si dispo) :

- `node server.js`

## Modifier le contenu

- `public/app.js` → objet `content` (textes, exemples, quiz)
- `public/styles.css` → thème / styles
- `public/index.html` → structure des sections
