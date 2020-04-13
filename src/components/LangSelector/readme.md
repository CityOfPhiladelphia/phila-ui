# Language Selector

Use this component for projects that need have i18n internationalization and need a selector in the header.

## Usage

Selector should be imported within the Phila standards app header. (Component background is clear with white font.)

## Local Storage

Language selector uses local storage to save the current locale for your application.

## Dependencies

i18n needs to be installed within your project with locales for this component to function. 
See vue-i18n documentation for more info at http://kazupon.github.io/vue-i18n/ for the following basic settings:

```js static
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
```

```js static
const i18n = new VueI18n({
  locale: 'en-US',
  messages: {
    'en-US': {
    },
  }
})
```

```js static
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
```


## Languages

'En' is set as the default but languages may be bound as a prop from the project. 

Example: 

```
  languages: [
    { language: 'en', title: 'English' },
    { language: 'es', title: 'Español' },
  ],
```
