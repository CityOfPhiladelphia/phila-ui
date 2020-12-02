---

title: Navigation Link
menuTitle: Navigation Link (WIP)
description: A link helper component. By default it accepts a router-link (most common), but it also accepts native links.
category: Components | Other
position: 305
badge: WIP

---

A link helper component. By default it accepts a router-link (most common), but it also accepts native links.

## Usage

#### Import single component...

```js
import { NavLink } from '@phila/phila-ui';

//register it locally...
components: {
  NavLink,
}

//... or register it globally
Vue.component('nav-link', NavLink);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<nav-link></nav-link>
```

## Props

| Prop name | Description                                                                                                                                                           | Type   | Values | Default |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------- |
| link      | A link Object. `{ type: [null/native], href: '', active: [bool], click: [func], attrs: 'all other anchor attributes' }`. If using native links, set tyoe to `native`. | object | -      | {}      |

<alert type="warning">NavLink is NOT exported as other components. </alert>
