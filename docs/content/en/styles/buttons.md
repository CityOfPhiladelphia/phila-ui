---
title: Buttons
menuTitle: Buttons
category: "Styles Guide"
position: 12
badge: ""
---

Styling buttons require adding a `.button` class to the button or anchor element, a style class, and optionally a size class.

## Button modifier classes

### Button Styles

- Primary &DoubleRightArrow; `is-primary`
- Secondary &DoubleRightArrow; `is-secondary`
- Tertiary &DoubleRightArrow; `is-tertiary`
- Call To Action &DoubleRightArrow; `is-cta`
- Destructive (danger) &DoubleRightArrow; `is-danger`

```html
<button class="button is-primary">Button</button>
```

### Button Sizes

- Small &DoubleRightArrow; `is-small`
- Medium (default) &DoubleRightArrow; `is-medium` or `is-default`
- Large &DoubleRightArrow; `is-large`

```html
<button class="button is-primary is-small"></button>
```

## Buttons with Icons

Buttons can have icons to the left or right of the button text. Icons are added using Bulma's `.icon` class and a FontAwesome icon class.

```html
<button class="button is-primary">
  <span>Icon Right</span>
  <span class="icon">
    <i class="fa fa-plus-square" />
  </span>
</button>
```

## Buttons with loading animation

Add a `.is-loading` class to display a loading animation (eg. when fetching content).

```html
<button class="button is-primary is-loading">
  My button
</button>
```

```html
<button class="button is-primary is-loading">
  My button
</button>
```

## Side-by-side buttons

Use the `.buttons` wrapper class to display buttons on the same line.

```html
<div class="buttons">
  <button class="button is-primary">Button 1</button>
  <button class="button is-secondary">Button 2</button>
</div>
```

## Live examples

### Button styles

<example name="Buttons1" height="500"></example>

### Button sizes

<example name="Buttons2" height="300"></example>

### Buttons with loading animation

<example name="Buttons3" height="300"></example>

### Buttons with icons

<example name="Buttons4" height="300"></example>
