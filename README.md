# phila-ui
City of Philadelphia Vue Applications Standards and Components

Depends on [Bulma.io](https://bulma.io/) (_bulma is already imported in the project_).

## How to Extend
- Clonse this repo.
- Copy and Past `MyComponent` (this is an example folder) into `src/components/` and program your `main.vue` component.
- In `wrapper.js` create a new `import` with your component (_there is a commented out code example_) and add it to the `PhilaUI` object.
- Upgrade the app version in `package.json`
- Run `npm run build` to build all distributable files.

## How to Use
- Run `npm install --save CityOfPhiladelphia/phila-ui#master` (_this until we have a `public distribution` in npm registries_)

### Import Everything
- In your `main.js` add `import PhilaUI from phila-ui;`
- Then `Vue.use(PhilaUI, settings);`
  Currently all components have just one option. 
    `altName: 'AlternativeName'`, Default: Component Name.
    E.g. `Vue.use(PhilaUI, { Header: { altName: 'PhlHeader' }});` or `Vue.use(PhilaUI.Header, { altName: 'PhlHeader' });`
- Also you can do `import { Header } from 'phila-ui';` (not fully tested yet, but it should work).
- That's it =)

Note:

If you want to use the City of Philadelphia SCSS Colors and Functions in your project, modify your `vue.config.js` with this code:

```
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~phila-ui/src/styles/functions.scss";
          @import "~phila-ui/src/styles/colors.scss";
        `,
      },
    },
  },
};
```

NOTE: 

## License

[MIT](LICENSE)
