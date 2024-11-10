# NOTES

## Parsing logic

### JS Function:

```js
const convert = async (data) => {
  try {
    const res = await fetch('http://localhost:3000/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    });
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
```

---

### Input:

```scss
body {
  ul {
    color: blue;
  }
  .card {
    padding: 10px;
    .card__item {
      font-size: 16px;
    }
  }
}

section {
  p {
    color: red;
  }
}
```

---

### Output:

```js
selectorGroupText: ul
blockText: {color:blue;}
fullSelector: body ul
getFlattenedCSS: [ 'body ul {\ncolor:blue;\n}' ]
selectorGroupText: .card__item
blockText: {font-size:16px;}
fullSelector: body .card .card__item
getFlattenedCSS: [
  'body ul {\ncolor:blue;\n}',
  'body .card .card__item {\nfont-size:16px;\n}'
]
selectorGroupText: .card
blockText: {padding:10px;.card__item{font-size:16px;}}
fullSelector: body .card
getFlattenedCSS: [
  'body ul {\ncolor:blue;\n}',
  'body .card .card__item {\nfont-size:16px;\n}',
  'body .card {\npadding:10px;.card__item{font-size:16px;}\n}'
]
selectorGroupText: body
blockText: {ul{color:blue;}.card{padding:10px;.card__item{font-size:16px;}}}
fullSelector: body
getFlattenedCSS: [
  'body ul {\ncolor:blue;\n}',
  'body .card .card__item {\nfont-size:16px;\n}',
  'body .card {\npadding:10px;.card__item{font-size:16px;}\n}',
  'body {\nul{color:blue;}.card{padding:10px;.card__item{font-size:16px;}}\n}'
]
selectorGroupText: p
blockText: {color:red;}
fullSelector: section p
getFlattenedCSS: [
  'body ul {\ncolor:blue;\n}',
  'body .card .card__item {\nfont-size:16px;\n}',
  'body .card {\npadding:10px;.card__item{font-size:16px;}\n}',
  'body {\nul{color:blue;}.card{padding:10px;.card__item{font-size:16px;}}\n}',
  'section p {\ncolor:red;\n}'
]
selectorGroupText: section
blockText: {p{color:red;}}
fullSelector: section
getFlattenedCSS: [
  'body ul {\ncolor:blue;\n}',
  'body .card .card__item {\nfont-size:16px;\n}',
  'body .card {\npadding:10px;.card__item{font-size:16px;}\n}',
  'body {\nul{color:blue;}.card{padding:10px;.card__item{font-size:16px;}}\n}',
  'section p {\ncolor:red;\n}',
  'section {\np{color:red;}\n}'
]
```

---

## Handling unwanted nestings in output

### Output logs for:

`const formattedCSS = `${fullSelector} \n${blockText}\n`;`
`console.info(formattedCSS)`;:

```bash
body ul
{color:blue;}

body .card .card__item
{font-size:16px;line-height:22px;}

body .card
{padding:10px;margin:20px;.card__item{font-size:16px;line-height:22px;}}

body
{ul{color:blue;}.card{padding:10px;margin:20px;.card__item{font-size:16px;line-height:22px;}}}

section p
{color:red;}

section
{p{color:red;}}
```

### JS Utils

```js
const lastNested = `body .card
{padding:10px;margin:20px;.card__item{font-size:16px;line-height:22px;}}`.replace(
  '\n',
  ''
);

const previousNested = `.card__item 
{font-size:16px;line-height:22px;}`
  .replace(' ', '')
  .replace(/\n/, '');

lastNested.replace(previousNested, ''); // Removes the nested block which was previously shown already
```

# Playground

```js
blocks = [
  '{color:blue;}',
  '{font-size:16px;line-height:22px;}',
  '{padding:10px;margin:20px;.card__item{font-size:16px;line-height:22px;}}',
  '{ul{color:blue;}.card{padding:10px;margin:20px;.card__item{font-size:16px;line-height:22px;}}}',
  '{color:red;}',
  '{p{color:red;}}',
];
selectors = [
  'body ul',
  'body .card .card__item',
  'body .card',
  'body',
  'section p',
  'section',
];
```

'body ul',
'body .card .card\_\_item',
'body .card',
'body',
'section p',
'section',

['body{color: red;}',
'body .card{color: yellow;}',
'body .card .card__item{color: green}',
'body .card >.card__item{font-weight: 200}',
'body .card &.card__item{border: 1px solid #000;}',
'section p{margin: 0;}']

```scss
visitStatement: 'body{background-color:red;color:yellow;ul{color:blue;div{color:green;}}}' RulesetContext
visitRuleset: 'body' SelectorGroupContext
visitRuleset: '{background-color:red;color:yellow;ul{color:blue;div{color:green;}}}' BlockContext
visitBlock: '{' De
visitBlock: 'background-color:red;' StatementContext
visitStatement: 'background-color:red;' PropertyDeclarationContext
visitBlock: 'color:yellow;' StatementContext
visitStatement: 'color:yellow;' PropertyDeclarationContext
visitBlock: 'ul{color:blue;div{color:green;}}' StatementContext
visitStatement: 'ul{color:blue;div{color:green;}}' RulesetContext
visitRuleset: 'ul' SelectorGroupContext
visitRuleset: '{color:blue;div{color:green;}}' BlockContext
visitBlock: '{' De
visitBlock: 'color:blue;' StatementContext
visitStatement: 'color:blue;' PropertyDeclarationContext
visitBlock: 'div{color:green;}' StatementContext
visitStatement: 'div{color:green;}' RulesetContext
visitRuleset: 'div' SelectorGroupContext
visitRuleset: '{color:green;}' BlockContext
visitBlock: '{' De
visitBlock: 'color:green;' StatementContext
visitStatement: 'color:green;' PropertyDeclarationContext
visitBlock: '}' De
visitBlock: '}' De
visitBlock: '}' De
```
