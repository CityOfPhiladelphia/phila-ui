# phila-ui
City of Philadelphia Vue Applications Standards and Components

Depends on [Bulma.io](https://bulma.io/) (_bulma is already imported in the project_).

## How to Extend
- Clonse this repo.
- Copy and Past `MyComponent` (this is an example folder) into `src/components/` and program your `main.vue` component.
- In the same folder modify the `MyComponent` text inside `index.js` with the new component *name*.
- In `wrapper.js` create a new `import` with your component (_there is a commented out code example_) and add it to the `PhilaUI` object.
- Upgrade the app version in `package.json`
- Run `npm run build` to build all distributable files.

## How to Use
- Run `npm install --save CityOfPhiladelphia/phila-ui#master` (_this until we have a `public distribution` in npm registries_)

### Import Everything
- In your `main.js` add `import PhilaUI from phila-ui;`
- Then `Vue.use(PhilaUI, settings);` the only parameter we currently have by component is `altName: [name]`, this is to set the component using a diferent name. E.g `Vue.use(PhilaUI, { Header: { altName: 'PhlHeader' }});`.
- Or `Vue.use(PhilaUI.Header, { altName: 'PhlHeader' });` to use a single component;
- Also you can do `import { Header } from 'phila-ui';` (not fully tested yet, but it should work).
- That's it =)

## License

[MIT](LICENSE)
