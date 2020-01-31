# phila-ui
City of Philadelphia Vue Applications Standards and Components

Depends on [Bulma.io](https://bulma.io/) (_bulma is already imported in the project_).

## How to Extend
1. Clone this repo.
2. Copy and paste `MyComponent` (this is an example folder) into `src/components/` and create your `main.vue` component.
3. In `src/phila-ui.js` create a new `import` with your component (_look for the commented code example_) and add it to the `export` object.
4.  Upgrade the app version in `package.json` (using [Semantic Versioning](https://semver.org/)).
5. Run `npm run build` to build all distributable files.

## How to Use
Run `npm install --save CityOfPhiladelphia/phila-ui#master` (_until there is a `public distribution` in npm_)

### Importing

#### Importing individually
You can import components individually. This is the reccomended method. If you import components individually, you will also need to import the base.scss phila-ui file in your `main.js` file:`import 'phila-ui/src/styles/base.scss'`

```
import { Header, InputText } from 'phila-ui';
Vue.use(Header, { altName: 'PhlHeader' });
Vue.use(InputText);
``` 

#### How to test it
- Clone repo
- Go into repo's directory
- ```npm install```
- ```npm watch```
- Open another command line instance and run ```npm link```
- Clone [https://github.com/CityOfPhiladelphia/phila-vue-boilerplate](phila-vue-boilerplate)
- Go into repo's folder
- ```npm uninstall @phila/phila-ui``` to remove the default package
- ```npm install```
- ```npm link @phila/phila-ui```



#### Importing everything
*Note: Importing the entire library will cause a very large package size. We reccommend you only import what you need.*

In `main.js`, import phila-ui.

```
import * from PhilaUI from phila-ui;
Vue.use(PhilaUI, settings);
Vue.use(PhilaUI, { Header: { altName: 'PhlHeader' }});
```

Currently, all components only have one option. 

Default: Component Name.

```
altName: 'AlternativeName'
```


**Note:**
To if you would like to use the City's sass color helpers and functions in your project, add the following to `vue.config.js`:

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
