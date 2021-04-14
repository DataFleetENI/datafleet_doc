---
title: Guide de style
sidebar_label: Guide de style
slug: /
---

Vous pouvez utiliser ce guide pour la syntaxe Markdown [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

## Syntaxe Markdown

Il est aussi possible de se baser sur le site Docusaurus.

## Headers

# H1 - Il s'agit d'un H1

## H2 - Il s'agit d'un H2

### H3 - Il s'agit d'un H3

#### H4 - Il s'agit d'un H4

##### H5 - Il s'agit d'un H5

###### H6 - Il s'agit d'un H6

---

## Accentuation

L'accentuation, ou l'italique, avec _astérisques_ ou _underscores_.

L'accentuation forte, ou le gras, avec **astérisques** or **underscores**.

L'accentuation combinée avec **astérisques et _underscores_**.

Pour barrer le texte, il faut utiliser deux tildes. ~~Scratch this.~~

---

## Listes

1. Premier item d'une liste ordonée
1. Un autre item

- Sous-liste non ordonée.

1. Numéro actuel
1. Sous-liste ordonée
1. Et un autre item

- Les listes non ordonées peuvent utiliser un astérique.

* Ou le signe moins

- Ou le signe plus

---

## Liens

[Lien sans style](https://www.google.com/)

[Lien avec un titre](https://www.google.com/ "Google's Homepage")

[Lien avec référence][arbitrary case-insensitive reference text]

[Lien avec référence (nombre)][1]

Ou le laisser vide et utiliser [link text itself].

Les URLs doivent être mis entre chevrons (ou pas d'ailleurs), et cela convertirra automatiquement les chaines en lien. http://www.example.com/ ou <http://www.example.com/>

Les références peuvent être notées après le lien.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

## Images

Voici le logo, avec un hover dessus.

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo 2'

Le path renseigné doit-être le path relative au dossier `/static`.

![img](/img/datafleet_orange.png)

---

## Code

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

## Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

Il doit y avoir au moins 3 tirets séparant chaque cellule d'en-tête. Les pipes (|) sont optionnels. Vous pouvez utiliser le inline du Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Citation

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Citation.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Tips

:::note

Il s'agit d'une note

:::

:::tip

Il s'agit d'un conseil

:::

:::important

Il s'agit d'un message important

:::

:::caution

Il s'agit d'une mise en garde

:::

:::warning

This is a warning

:::
