<alert type="warning">Please, note that the component tag is ``<text-area>``  (with a dash) to prevent collision with the textarea html tag.</alert>

## Code Samples

### Label
When using the ```innerLabel``` option (default), the ```placeholder``` prop should be used as the TextArea label.
```html
  <text-area
    v-model="myValue"
    placeholder="My Label"
  />
```

If a label is also provided, then the label will be displayed once the user clicks on the field.
```html
  <text-area
    v-model="myValue"
    placeholder="My Label"
    label="My alternative label"
  />
```

When **NOT** using the ```innerLabel``` option (default), the ```placeholder``` and ```label``` props will function independently and both should be provided.
```html
  <text-area
    v-model="myValue"
    placeholder="My placeholder"
    label="My Label"
    :inner-label="false"
  />
```

### Description
Use the ```desc``` prop or slot to provide extra information about the input.
```html
  <text-area
    desc="Extra information about this field"
  />
```

Use the slot when the description contains html that needs to be rendered. For instance, when adding a link to the description.
```html
  <text-area>
    <template slot="desc">
      Extra information about this field. <a href="#">Learn more</a>.
    </template>
  </text-area>
```

### Displaying errors
To display an error provide a String with the error, or an Array of errors. Only the first error in the array is displayed.
```html
  <text-area
    errors="This field is required"
  />
```

<alert>This component supports VeeValidate errors. [Learn how to validate](/vee-validate-integration) with the VeeValidade plugin.<a></alert>

## Live Examples
### Textarea with placeholder and description
<example name="TextArea1" height="300"></example>

### Textarea with error
<example name="TextArea2" height="300"></example>

### Textarea with VeeValidate's validation
<example name="TextArea3" height="380"></example>