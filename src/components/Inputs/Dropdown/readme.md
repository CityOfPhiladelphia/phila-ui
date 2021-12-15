## Code Samples

### Label

When using the `innerLabel` option (default), the `placeholder` prop should be used as the Dropdown label.

```html
<dropdown v-model="myValue" placeholder="My Label" />
```

If a label is also provided, then the label will be displayed once the user clicks on the field.

```html
<dropdown
  v-model="myValue"
  placeholder="My Label"
  label="My alternative label"
/>
```

When **NOT** using the `innerLabel` option (default), the `placeholder` and `label` props will function independently and both should be provided.

```html
<dropdown
  v-model="myValue"
  placeholder="My placeholder"
  label="My Label"
  :inner-label="false"
/>
```

### Description

Use the `desc` prop or slot to provide extra information about the Dropdown.

```html
<dropdown desc="Extra information about this field" />
```

Use the slot when the description contains html that needs to be rendered. For instance, when adding a link to the description.

```html
<dropdown>
  <template slot="desc">
    Extra information about this field. <a href="#">Learn more</a>.
  </template>
</dropdown>
```

### With icon

The icon prop expects font-awesome icon classes.

```html
<dropdown icon="fa fa-user-circle" />
```

<alert>Use icons sparingly (eg. Indicating that the input has a different function).</alert>

### Options

Options can be provided as an Array when the Dropdown label and value are the same.

```html
<dropdown v-model="myValues" label="My Label" :options="options" />
```

```js
options: ["Option 1", "Option 2", "Option 3"];
```

And options can be provided as an Object when the Dropdown label and value are **NOT** the same.

```js
options: {
  'option-1': 'Option 1',
  'option-2': 'Option 2',
  'option-3': 'Option 3',
}
```

An Array of Objects can also be used, in which case the `text-key` and `value-key` props need to be provided to indicate the text to be displayed and value to be captured.

```html
<dropdown
  v-model="myValues"
  label="My Label"
  text-key="key1"
  value-key="key2"
/>
```

```js
options: [
  {
    key1: "My text 1",
    key2: "my-value-1"
  },
  {
    key1: "My text 2",
    key2: "my-value-2"
  }
];
```

### With optgroup

Version [2.0.5](/changelog) and up.

```html
<dropdown :optgroup="true" />
```

When optgroup is true, wrap the options in an object where the object key is the group name.

```js
options: {
  "Group 1": [
    "Group 1 - Option 1",
    "Group 1 - Option 2",
    "Group 1 - Option 3",
  ],
  "Group 2": [
    "Group 2 - Option 1",
    "Group 2 - Option 2",
    "Group 2 - Option 3",
  ],
},
```

### Displaying errors

To display an error provide a String with the error, or an Array of errors. Only the first error in the array is displayed.

```html
<dropdown errors="This field is required" />
```

<alert>This component supports VeeValidate errors. [Learn how to validate](/vee-validate-integration) with the VeeValidade plugin.<a></alert>

## Live Examples

### Dropdown with Array of options

<example name="Dropdown1" height="300"></example>

### Dropdown with options Object

<example name="Dropdown2" height="300"></example>

### Dropdown with Array of Object options

<example name="Dropdown3" height="300"></example>

### Dropdown with optgroup enabled

<example name="Dropdown4" height="300"></example>
