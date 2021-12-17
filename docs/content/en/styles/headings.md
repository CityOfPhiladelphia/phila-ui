---
title: Headings
menuTitle: Headings
category: "Styles Guide"
position: 16
badge: ""
---

## Intro

Headings should be hierarchically inserted from larger to smaller on a page, or page section.

### h1

Typically only one `<h1>` per page.

### h2, h3

Use it normally, as needed.

### h4, h5, h6

These headings are hardly ever used and should be avoided when possible.

<alert>Headings 1 - 3 have unique styles and sizes. However, headings 4 - 6 maintain the same style as heading 3.</alert>

## Overwriting heading styles

Use heading classes to overwrite heading styles within the _.content_ class or to style headings outside of the _.content_ class.

- `h1` &DoubleRightArrow; `.is-1`
- `h2` &DoubleRightArrow; `.is-2`
- `h3` &DoubleRightArrow; `.is-3`
- `h4` &DoubleRightArrow; `.is-4`
- `h5` &DoubleRightArrow; `.is-5`
- `h6` &DoubleRightArrow; `.is-6`

For the sake of design, at times, combining a heading element with a different size class might be required. For instance, when needing to use a `h1` style without adding another `h1` to the page:

```html
<h2 class="is-1">A h2 heading with h1 styles</h2>
```

## Live examples

### Headings within the content class

<example name="Headings1" height="500"></example>

### Headings with size classes

<example name="Headings2" height="500"></example>
