---
title: Installation & Usage
menuTitle: Installation  & Usage
category: 'Get Started'
position: 1
badge: ''
---

## Installing
Using npm is recommended.
```
npm install @phila/phila-ui --save
```

## Importing components

### Global import and registration
PhilaUI can be imported and registered globally, this way, all of the components are available on all pages.

```js
//import it
import * as PhilaUI from '@phila/phila-ui'

//register it
Vue.use(PhilaUI);

//or register it with options
Vue.use(PhilaUI, options);
```

### Individual import and registration
Components can also be individually imported.

```js
//import it
import { Textbox, Checkbox } from '@phila/phila-ui'

//and register the components globally
Vue.component('textbox', Textbox);
Vue.component('checkbox', Checkbox);

//or register it locally in the vue template
components: {
  ...
  Textbox,
  Checkbox
  ...
}
```

<alert type="warning">Some navigation components make use of responsive helpers that are automatically available when importing the whole library and registering it globally. When importing individual components, the responsive helpers also need to be imported.</alert>

```js
//importing the ResponsiveHeloer along with other components that need it.
import { AppHeader, AppFooter, ResponsiveHelpers } from '@phila/phila-ui'

//Register the helpers globally
Vue.use(ResponsiveHelpers);
```

### Usage
Using the components in the Vue template:
```html
<textbox />
<checkbox />
```

## Styles
PhilaUI scss modifies and expands on the defaults of the [Bulma](https://bulma.io/) css framework, thus Bulma is included as a dependency of PhilaUI.

### Importing styles
Styles need to be imported separately from components. It's best to do it in the project's main scss file.

```scss
@import "@phila/phila-ui/src/assets/styles/scss/all.scss";
```

<alert>The all.scss file has everything needed to get started. It includes the Bulma library and PhilaUI styles.</alert>

### Overwriting scss variables
If needed, scss files can be imported individually, which would allow certain variables to be overwritten.

```scss
@import "@phila/phila-ui/src/assets/styles/scss/variables.scss";
@import "your-own-scss-file-here.scss";
@import "node_modules/bulma/bulma.sass";
@import "@phila/phila-ui/src/assets/styles/scss/base.scss";
```

<alert type="warning">A css minified file is not currently exported, as the project should handle the final css output.</alert>

### Making variables available
It's recommended to import PhilaUI scss variables globally, so that they can be referred to in the project's other styles.

#### Example of adding PhilaUI variables to the vue.config.js
```js
...
css: {
  loaderOptions: {
    sass: {
      data: `
        @import "~@phila/phila-ui/src/assets/styles/scss/functions.scss";
        @import "~@phila/phila-ui/src/assets/styles/scss/colors.scss";
      `,
    },
  },
},
...
```

<alert type="warning">Depending on the version of node-sass, the "data" configuration parameter has changed to "prependData" or "additionalData".</alert>