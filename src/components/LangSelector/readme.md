# Language Selector

Use this component for projects that need have i18n internationalization and need a selector in the header.

## Dependencies

i18n needs to be installed within your project with locales for this component to function. 
See vue-i18n documentation for more info at http://kazupon.github.io/vue-i18n/

## Languages

'En' is set as the default but languages may be bound as a prop from the project. 

Example: 

```
  languages: [
    { language: 'en', title: 'English' },
    { language: 'es', title: 'Español' },
  ],
```
