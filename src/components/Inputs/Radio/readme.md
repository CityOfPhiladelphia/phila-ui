## Code Samples

### Options
Options can be provided as an Array when the radio button label and value are the same.
```html
  <radio
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
And options can be provided as an Object when the radio button label and value are **NOT** the same.

```js
options: {
  'option-1': 'Option 1',
  'option-2': 'Option 2',
  'option-3': 'Option 3',
}
```

An Array of Objects can also be used, in which case the ```text-key``` and ```value-key``` props need to be provided to indicate the text to be displayed and value to be captured.

```html
  <radio
    v-model="myValues"
    label="My Label"
    text-key="key1"
    value-key="key2"
  />
```

```js
options: [
  {
    'key1': 'My radio-button 1',
    'key2': 'my-radio-button-value-1'
  },
  {
    'key1': 'My radio-button 2',
    'key2': 'my-radio-button-value-2'
  }
]
```

### Columns
By default the radio buttons are displayed in one column. Add more columns to make a large amount of radio buttons easier to read.
```html
  <radio
    num-of-columns="3"
  />
```
<alert>Uses the css property ```columns```</alert>

### Displaying errors
To display an error provide a String with the error, or an Array of errors. Only the first error in the array is displayed.
```html
  <radio
    errors="This field required"
  />
```

<alert>This component supports VeeValidate errors. [Learn how to validate](/vee-validate-integration) with the VeeValidade plugin.<a></alert>