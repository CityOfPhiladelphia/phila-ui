# AppFooter

> This is the application's main footer.

## Props

| Prop name | Description                                                                                                                                                                                | Type  | Values | Default |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------ | ------- |
| links     | An array of links to be displayed. Each link should have at least a `href` and a `text` property. The href property of the link may contain a function, a string, or a router-link object. | array | -      | []      |

---

### link href property

This property accept:

- A _function_. (e.g `() => { console.log('clicked'); }`)
- URL String (e.g. `http://phila.gov`)
- Or a value for the _:to_ prop of **router-link** component, (e.g: `{ name: 'login' }`, `/login`).
