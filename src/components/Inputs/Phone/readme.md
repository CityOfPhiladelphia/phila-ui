## Code Samples

### Label

When using the `innerLabel` option (default), the `placeholder` prop should be used as the input label.

```html
<phone v-model="myValue" placeholder="My Label" />
```

If a label is also provided, then the label will be displayed once the user clicks on the field.

```html
<phone v-model="myValue" placeholder="My Label" label="My alternative label" />
```

When **NOT** using the `innerLabel` option (default), the `placeholder` and `label` props will function independently and both should be provided.

```html
<phone
  v-model="myValue"
  placeholder="My placeholder"
  label="My Label"
  :inner-label="false"
/>
```

### Description

Use the `desc` prop or slot to provide extra information about the input.

```html
<phone desc="Extra information about this field" />
```

Use the slot when the description contains html that needs to be rendered. For instance, when adding a link to the description.

```html
<phone>
  <template slot="desc">
    Extra information about this field. <a href="#">Learn more</a>.
  </template>
</phone>
```

### With icon

The icon prop expects font-awesome icon classes.

```html
<phone icon="fa fa-phone" />
```

<alert>Use icons sparingly (eg. Indicating that the input has a different function).</alert>

### With loading

Use `is-loading` to indicate that the input is fetching content.

```html
<phone :is-loading="true" />
```

<alert>The loading indicator temporarily replaces the input icon.</alert>

### Displaying errors

To display an error provide a String with the error, or an Array of errors. Only the first error in the array is displayed.

```html
<phone errors="This field is required" />
```

<alert>This component supports VeeValidate errors. [Learn how to validate](/vendors/vee-validate-integration) with the VeeValidade plugin.<a></alert>

## Live Examples

### Basic phone input

<example name="Phone1" height="200"></example>
