---

title: Language Selector
menuTitle: Language Selector
description: A language dropdopwn navigation. Primarily used as a slot of the [Application Header](/components/AppHeader). <alert type="warning">Requires the third-party component [vue-i18n](https://kazupon.github.io/vue-i18n/) which is not included. See #[dependencies](#dependencies).</alert>
category: Components | Navigation
position: 130
badge:

---

A language dropdopwn navigation. Primarily used as a slot of the [Application Header](/components/AppHeader). <alert type="warning">Requires the third-party component [vue-i18n](https://kazupon.github.io/vue-i18n/) which is not included. See #[dependencies](#dependencies).</alert>

## Usage

#### Import single component...

```js
import { LangSelector } from '@phila/phila-ui';

//register it locally...
components: {
  LangSelector,
}

//... or register it globally
Vue.component('lang-selector', LangSelector);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<lang-selector></lang-selector>
```

## Props

| Prop name | Description                  | Type  | Values | Default                                                          |
| --------- | ---------------------------- | ----- | ------ | ---------------------------------------------------------------- |
| languages | An array of language objects | array | -      | [<br> {<br> language: "en-US",<br> title: "English",<br> },<br>] |

## Dependencies

i18n needs to be installed within your project with locales for this component to function.
See vue-i18n documentation for more info at http://kazupon.github.io/vue-i18n/ for the following basic settings:

```js
import Vue from "vue";
//import the vue-i18n library
import VueI18n from "vue-i18n";

//initialize it with basic locale
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "en-US",
  messages: {
    "en-US": {}
  }
});

//add it globaly to the vue instance
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
```

## Local Storage

The Language selector uses local storage to save the current locale, but it does not retrieve it. The application should be in charged of retrieving the selected language.

## Code Samples

### Languages

'En' is set as the default, but more languages can be added via props:

```html
<lang-selector :languages="languages"></lang-selector>
```

```js
languages: [
  {
    language: 'en',
    title: 'English'
  },
  {
    language: 'es',
    title: 'Español'
  },
],
```
