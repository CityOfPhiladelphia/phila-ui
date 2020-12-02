---

title: Mobile Navigation
menuTitle: Mobile Navigation
description: The mobile navigation. Primarily, used as a slot of the [Application Header](/components/AppHeader).
category: Components | Navigation
position: 110
badge:

---

The mobile navigation. Primarily, used as a slot of the [Application Header](/components/AppHeader).

## Usage

#### Import single component...

```js
import { MobileNav } from '@phila/phila-ui';

//register it locally...
components: {
  MobileNav,
}

//... or register it globally
Vue.component('mobile-nav', MobileNav);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<mobile-nav></mobile-nav>
```

## Props

| Prop name | Description                                                    | Type  | Values | Default |
| --------- | -------------------------------------------------------------- | ----- | ------ | ------- |
| links     | An array of links . See [Navigation Link](/components/NavLink) | array | -      | []      |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| before  |             |          |
| default |             |          |
| after   |             |          |

## Code Samples

<alert type="warning">The Mobile Navigation only shows on screens smaller than 768px.</alert>

### Props vs Slots Links

The Mobile Navigation links can be added via props using the [Navigation Links](/components/NavLinks) format.

```html
<mobile-nav :links="myMobileNavLinks" />
```

Or the links can be added using the default slot. The default slot accepts an unodered list of links.

```html
<mobile-nav>
  <ul>
    <li>
      <a href="/home">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
  </ul>
</mobile-nav>
```

### Nested Links

The mobile navigation links can be nested down two levels.

#### Props nesting

When using props, use the key `submenu` to indicate nesting. The `submenu` key takes an array of Navigation Links.

```html
<mobile-nav :links="myMobileNavNestedLinks" />
```

```js
myMobileNavNestedLinks: [
  {
    text: "Parent Link 1",
    submenu: [
      {
        href: "/nested-link-1-1",
        text: "Nested Link 1.1"
      },
      {
        href: "/nested-link-1-2",
        text: "Nested Link 1.2"
      }
    ]
  },
  {
    text: "Parent Link 2",
    submenu: [
      {
        href: "/nested-link-2-1",
        text: "Nested Link 2.1"
      },
      {
        href: "/nested-link-2-2",
        text: "Nested Link 2.2"
      }
    ]
  }
];
```

When using slots, simply nest the unordered list.

```html
<mobile-nav>
  <ul>
    <li>
      <a href="#">Parent Link 1</a>
      <ul>
        <li>
          <a href="/nested-link-1-1">Nested Link 1.1</a>
        </li>
        <li>
          <a href="/nested-link-1-2">Nested Link 1.2</a>
        </li>
      </ul>
    </li>
  </ul>
</mobile-nav>
```
