---

title: Dropdown Navigation
menuTitle: Dropdown Navigation
description: A dropdown navigation. Primarily used as a slot of the [Application Header](/components/AppHeader).
category: Components | Navigation
position: 125
badge:

---

A dropdown navigation. Primarily used as a slot of the [Application Header](/components/AppHeader).

## Usage

#### Import single component...

```js
import { DropdownNav } from '@phila/phila-ui';

//register it locally...
components: {
  DropdownNav,
}

//... or register it globally
Vue.component('dropdown-nav', DropdownNav);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<dropdown-nav></dropdown-nav>
```

## Props

| Prop name | Description                                                                                                                                     | Type   | Values | Default                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------------------------------------------------------------- |
| nav       | An Object which includes the button (trigger), a FontAwesome icon (optional), and the list of links. See [Navigation Link](/components/NavLink) | object | -      | {<br> button: 'My Items',<br> icon: null,<br> links: [],<br>} |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

## Code Samples

### Props vs Slots Links

The Dropdown Navigation links can be added via props:

```html
<dropdown-nav :links="myDropdownNavLinks" />
```

```js
myDropdownNavLinks: {
  button: "Options", //trigger
  links: [
    {
      href: "profile"
      text: "Profile",
    },
    {
      href: "logout"
      text: "Logout",
    }
  ]
}
```

<alert>The key `links` uses the same format as the [Navigation Links](/components/NavLinks).</alert>

Or the links can be added using the default slot. The default slot accepts a `<button>` which acts as the trigger, followed by a `<ul>` of links.

```html
<dropdown-nav>
  <button>Options</button>
  <ul>
    <li>
      <a href="/profile">Profile</a>
    </li>
    <li>
      <a href="/logout">Logout</a>
    </li>
  </ul>
</dropdown-nav>
```
