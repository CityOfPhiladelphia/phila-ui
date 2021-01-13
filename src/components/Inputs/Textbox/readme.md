## Code Samples

### Label
When using the ```innerLabel``` option (default), the ```placeholder``` prop should be used as the input label.
```html
  <textbox
    v-model="myValue"
    placeholder="My Label"
  />
```

If a label is also provided, then the label will be displayed once the user clicks on the field.
```html
  <textbox
    v-model="myValue"
    placeholder="My Label"
    label="My alternative label"
  />
```

When **NOT** using the ```innerLabel``` option (default), the ```placeholder``` and ```label``` props will function independently and both should be provided.
```html
  <textbox
    v-model="myValue"
    placeholder="My placeholder"
    label="My Label"
    :inner-label="false"
  />
```

### Description
Use the ```desc``` prop or slot to provide extra information about the input.
```html
  <textbox
    desc="Extra information about this field"
  />
```

Use the slot when the description contains html that needs to be rendered. For instance, when adding a link to the description.
```html
  <textbox>
    <template slot="desc">
      Extra information about this field. <a href="#">Learn more</a>.
    </template>
  </textbox>
```

### With icon
The icon prop expects font-awesome icon classes.
```html
  <textbox
    icon="fa fa-search"
  />
```
<alert>Use icons sparingly (eg. Indicating that the input has a different function).</alert>

### With loading
Use ```is-loading``` to indicate that the input is fetching content.
```html
  <textbox
    :is-loading="true"
  />
```
<alert>The loading indicator temporarily replaces the input icon.</alert>

### Displaying errors
To display an error provide a String with the error, or an Array of errors. Only the first error in the array is displayed.
```html
  <textbox
    errors="This field is required"
  />
```

<alert>This component supports VeeValidate errors. [Learn how to validate](/vee-validate-integration) with the VeeValidade plugin.<a></alert>

## Live Examples
### Basic text input
<example name="Textbox1" height="200"></example>

### Text input with error
<example name="Textbox2" height="200"></example>

### Text input with outer label
<example name="Textbox3" height="200"></example>

### Text input with VeeValidate's validation
<example name="Textbox4" height="300"></example>

