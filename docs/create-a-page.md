---
title: Créer une page
---

## Création d'une documentation

Pour créer une page de documentation, il est nécessaire de créer un fichier dans le dossier **docs**.
Les deux extensions possibles sont **_.md_** ainsi que **_.mdx_**.

:::tip

Il est possible de dupliquer une page existente pour avoir une base saine.

:::

Une fois que la page est créée, il est possible d'y accéder sur **/docs/id_créé**.

## Intégration de la page

Dans le fichier **_sidebars.js_**, il est nécessaire de renseigner chaque pages créées.

```javascript
module.exports = {
  someSidebar: {
    'Docusaurus': ['doc1', 'doc2', 'doc3'],
    'Outils externes': ['logrocket'],
  },
};
```

Dans le code suivant, on voit qu'il y a 2 menus, 'Docusaurus' et 'Outils externes'.
Dedans, il y a les différents items.

:::warning

Si la page n'est pas renseignée, la page sera accessible seulement via l'URL, et n'affichera pas de sidebar.

:::
