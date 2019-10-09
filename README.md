# phila-ui
City of Philadelphia Vue Applications Standards and Components

## How to Extend
- Clonse this repo.
- Copy and Past `MyComponent` (this is an example folder) into `src/components/` and program your `main.vue` component.
- In the same folder modify the `MyComponent` text inside `index.js` with the new component *name*.
- In `wrapper.js` create a new `import` with your component (_there is a commented out code example_) and add it to the `PhilaUI` object.
- Upgrade the app version in `package.json`
- Run `npm run build` to build all distributable files.

## How to Use
- Run `npm install --save CityOfPhiladelphia/phila-ui#master` (_this until we have a `public distribution` in npm registries_)

### Usage method 1
- In your `main.js` add `import PhilaUI from phila-ui`
- Then `Vue.use(PhilaUI)`

### Usage method 2
-

## License

[MIT](LICENSE)
