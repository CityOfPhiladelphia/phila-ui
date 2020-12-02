---

title: Tabbed Navigation
menuTitle: Tabbed Navigation
description: A tabbed navigation. Primarily used as a slot of the [Application Header](/components/AppHeader).
category: Components | Navigation
position: 120
badge:

---

A tabbed navigation. Primarily used as a slot of the [Application Header](/components/AppHeader).

## Usage

#### Import single component...

```js
import { TabsNav } from '@phila/phila-ui';

//register it locally...
components: {
  TabsNav,
}

//... or register it globally
Vue.component('tabs-nav', TabsNav);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<tabs-nav></tabs-nav>
```

## Props

| Prop name | Description                                                   | Type  | Values | Default |
| --------- | ------------------------------------------------------------- | ----- | ------ | ------- |
| links     | An array of links. See [Navigation Link](/components/NavLink) | array | -      | []      |

## Slots

| Name    | Description                                                     | Bindings |
| ------- | --------------------------------------------------------------- | -------- |
| default | The default slot accepts side-by-side links (no other elements) |          |

## Code Samples

### Props vs Slots Links

The Tabbed Navigation links can be added via props using the [Navigation Links](/components/NavLinks) format.

```html
<tabs-nav :links="myTabbedNavLinks" />
```

Or the links can be added using the default slot. The default slot accepts any number of anchors.

```html
<tabs-nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
</tabs-nav>
```
