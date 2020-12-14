---

title: Application Header
menuTitle: Application Header
description: This is the application's main header.
category: Components | Navigation
position: 100
badge:

---

This is the application's main header.

## Usage

#### Import single component...

```js
import { AppHeader } from '@phila/phila-ui';

//register it locally...
components: {
  AppHeader,
}

//... or register it globally
Vue.component('app-header', AppHeader);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<app-header></app-header>
```

## Props

| Prop name     | Description                                                                                                                               | Type    | Values | Default               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | --------------------- |
| appTitle      | The application's title/name                                                                                                              | string  | -      | "Application Name"    |
| appLink       | The application's title link. 99% of the time the application title should link to itself.                                                | string  | -      | "/"                   |
| appSubtitle   | The application's subtitle/description                                                                                                    | string  | -      | ""                    |
| brandingImage | Branding image (eg. department logo). Accepts an Object of image attributes.                                                              | object  | -      | null                  |
| brandingLink  | Branding image link. Accepts an Object of link attributes.                                                                                | object  | -      | {<br> href: '/',<br>} |
| isFluid       | Allows the header elements (logo, title, navigation...) to expand with the window width, or stay aligned in the center (not recommended). | boolean | -      | false                 |
| isSticky      | Fixes the header to the top of the page<br>Requires the application to have a <main> tag                                                  | boolean | -      | true                  |

## Slots

| Name              | Description                                                                                      | Bindings |
| ----------------- | ------------------------------------------------------------------------------------------------ | -------- |
| mobile-nav        | See [Mobile Navigation](/components/MobileNav)                                                   |          |
| tabs-nav          | See [Tabbed Navigation](/components/TabsNav)                                                     |          |
| left-nav          | Allows additional items on the left side of the header (on the right of the tabs navigation)     |          |
| right-nav         | Allows additional items on the right side of the header (on the left of the dropdown navigation) |          |
| lang-selector-nav | See [Language Selector](/components/LangSelector)                                                |          |
| dropdown-nav      | See [Dropdown Navigation](/components/DropdownNav)                                               |          |

## Code Samples

### Basic

The most basic header with an application title and sub-title.

```html
<app-header
  app-title="My Application"
  app-subtitle="Description about this application"
/>
```

### Branding

Adds an application specific logo and link. Often used to display a department's logo and link back to the department's website.

```html
<app-header
  :branding-image="{ src: 'my-logo-image.jpg'}"
  :branding-link="{ href: 'http://www.example.com '}"
/>
```

The `branding-image` accepts an object of `<img>` attributes.

```js
{
  src: "my-logo-image.png",
  alt: "department logo"
  width: "200px"
}
```

<alert>The image width and height are not enforced. Use the image attributes width/height, or css styles to set it.</alert>

The `branding-link` accepts an object of `<a>` attributes.

```js
{
  href: "http://phila.gov/my-department",
  target: "_blank"
}
```

<alert type="warning">If the `branding-image` is set, then a `branding-link` is also used. By default the `branding-link` is '/'</alert>

### Fixed & Fluid

Makes the header non-sticky and fluid (content stretches to the length of the window).

```html
<app-header :is-sticky="false" :is-fluid="false" />
```

<alert>Most applications should use the default values</alert>

### Mobile Navigation `<slot>`

```html
<app-header>
  <mobile-nav slot="mobile-nav" :links="myLinks" />
</app-header>
```

<alert>See the [Mobile Navigation](/components/MobileNav) component for more information.</alert>

### Tabbed Navigation `<slot>`

```html
<app-header>
  <tabs-nav slot="tabs-nav" :links="myLinks" />
</app-header>
```

<alert>See the [Tabbed Navigation](/components/TabsNav) component for more information.</alert>

### Dropdown Navigation `<slot>`

```html
<app-header>
  <dropdown-nav slot="dropdown-nav" :links="myLinks" />
</app-header>
```

<alert>The positioning of the dropdown navigation depends on the presence of the tabbed navigation. If a tabbed navigation is present, then the dropdown is aligned with the tabs. If the tabs are not present, then the dropdopwn is aligned with the title.</alert>
<alert>See the [Dropdown Navigation](/components/DropdownNav) component for more information.</alert>

### Language Selector `<slot>`

```html
<app-header>
  <lang-selector slot="lang-selector-nav" :languages="myLanguages" />
</app-header>
```

<alert>The positioning of the language selector depends on the presence of the tabbed navigation. If a tabbed navigation is present, then the language selector dropdown is aligned with the tabs. If the tabs are not present, then the dropdopwn is aligned with the title.</alert>
<alert>See the [Language Selector](/components/LangSelector) component for more information.</alert>
