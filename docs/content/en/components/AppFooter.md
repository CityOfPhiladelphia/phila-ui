---

title: Application Footer
menuTitle: Application Footer
description: This is the application's main footer. It displays a list of links via slot or props
category: Components | Navigation
position: 105
badge:

---

This is the application's main footer. It displays a list of links via slot or props

## Usage

#### Import single component...

```js
import { AppFooter } from '@phila/phila-ui';

//register it locally...
components: {
  AppFooter,
}

//... or register it globally
Vue.component('app-footer', AppFooter);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<app-footer></app-footer>
```

## Props

| Prop name      | Description                                                     | Type    | Values | Default |
| -------------- | --------------------------------------------------------------- | ------- | ------ | ------- |
| isSticky       | Fixes footer to the bottom of the window                        | boolean | -      | false   |
| isHiddenMobile | Hides footer navigation on mobile (recommended)                 | boolean | -      | true    |
| links          | An array of objects. See [Navigation Link](/components/NavLink) | array   | -      | []      |

## Slots

| Name    | Description                                                 | Bindings |
| ------- | ----------------------------------------------------------- | -------- |
| default | The default slot takes an unordered list (`<ul>`) of links. |          |

## Code Samples

### Props vs Slots Links

The footer links can be added via props using the [Navigation Links](/components/NavLink) format.

```html
<app-footer :links="myFooterLinks" />
```

Or the links can be added using the default slot. The default slot accepts an unodered list of links.

```html
<app-footer>
  <ul>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/terms-and-conditions">Terms & Conditions</a>
    </li>
  </ul>
</app-footer>
```

### Sticky Footer

The footer can be fixed to the bottom of the page, so it's always visible.

```html
<app-footer :is-sticky="true" />
```

### Mobile Display

By default the footer is hidden on mobile devices. If the links in the footer are important, they should be added to the [Mobile Navigation](/components/MobileNav).

If the footer must be displayed on mobile, set `is-hidden-mobile` to `false`.

```html
<app-footer :is-hidden-mobile="false" />
```
