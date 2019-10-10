# phila-ui
City of Philadelphia Vue Applications Standards and Components

Depends on [Bulma.io](https://bulma.io/) (_bulma is already imported in the project_).

## How to Extend
1. Clone this repo.
2. Copy and paste `MyComponent` (this is an example folder) into `src/components/` and create your `main.vue` component.
3. In `wrapper.js` create a new `import` with your component (_look for the commented code example_) and add it to the `PhilaUI` object.
4.  Upgrade the app version in `package.json` (using [Semantic Versioning](https://semver.org/)).
5. Run `npm run build` to build all distributable files.

## How to Use
Run `npm install --save CityOfPhiladelphia/phila-ui#master` (_until there is a `public distribution` in npm_)

### Import Everything
In `main.js`, import phila-ui.

```
import PhilaUI from phila-ui;
Vue.use(PhilaUI, settings);
```

Currently, all components only have one option. 

Default: Component Name.

```
altName: 'AlternativeName'
```
You can also import components individually: 

 ```
Vue.use(PhilaUI, { Header: { altName: 'PhlHeader' }});
```
or

```
Vue.use(PhilaUI.Header, { altName: 'PhlHeader' });
```
or
```
import { Header } from 'phila-ui';
``` 
(still being tested)


**Note:**
To import the City's sass colors and functions to your project, add the following to `vue.config.js`:

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
## License

[MIT](LICENSE)
