## Code Samples

### Options
Options can be provided as an Array when the checkbox label and value are the same.
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
And options can be provided as an Object when the checkbox label and value are **NOT** the same.

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

### Displaying errors
To display an error provide a string with the error, or an array of errors. Only the first error in the array is displayed.
```html
  <textbox
    errors="This field required"
  />
```

<alert>This component supports VeeValidate errors. [Learn how validate](/vee-validate-integration) with the VeeValidade plugin.<a></alert>