# AppFooter Component

The AppFooter component has a required *prop* called *links*, this prop is should be an array of *objects* with at least `text` and `href` properties.

### text property
This property should be an string.

### href property
This property accepts:

* A *function*. (e.g `() => { console.log('clicked'); }`)
* URL String (e.g. `http://phila.gov`)
* Or a value for _<router-link>_ _:to_ prop, (e.g: `{ name: 'login' }`, `/login`).
