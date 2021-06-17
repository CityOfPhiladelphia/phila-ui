## Code Samples

### Options
Options can be provided as an Array when the Checkbox label and value are the same.
```html
  <checkbox
    v-model="myValues"
    label="My Label"
    :options="options"
  />
```

```js
options: [
  'Option 1',
  'Option 2',
  'Option 3',
]
```
And options can be provided as an Object when the Checkbox label and value are **NOT** the same.

```js
options: {
  'option-1': 'Option 1',
  'option-2': 'Option 2',
  'option-3': 'Option 3',
}
```

An Array of Objects can also be used, in which case the ```text-key``` and ```value-key``` props need to be provided to indicate the text to be displayed and value to be captured.

```html
  <checkbox
    v-model="myValues"
    label="My Label"
    text-key="key1"
    value-key="key2"
  />
```

```js
options: [
  {
    'key1': 'My checkbox 1',
    'key2': 'my-checkbox-value-1'
  },
  {
    'key1': 'My checkbox 2',
    'key2': 'my-checkbox-value-2'
  }
]
```

### Columns
By default the checkboxes are displayed in one column. Add more columns to make large amount of checkboxes easier to read.
```html
  <checkbox
    num-of-columns="3"
  />
```
<alert>Uses the css property ```columns```</alert>

### Displaying errors
To display an error provide a String with the error, or an Array of errors. Only the first error in the array is displayed.
```html
  <checkbox
    errors="This field is required"
  />
```

<alert>This component supports VeeValidate errors. [Learn how to validate](/vee-validate-integration) with the VeeValidade plugin.<a></alert>

## Live Examples
### Checkbox with Array of options
<example name="Checkbox1" height="300"></example>

### Checkbox with options Object
<example name="Checkbox2" height="300"></example>

### Checkbox with Array of Object options
<example name="Checkbox3" height="300"></example>

### Checkbox with error
<example name="Checkbox4" height="350"></example>

### Checkbox with VeeValidate's validation
<example name="Checkbox5" height="380"></example>