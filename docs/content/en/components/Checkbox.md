---

title: Checkboxes
menuTitle: Checkboxes
description: Displays one or more checkboxes
category: Components | Inputs
position: 210
badge:

---

Displays one or more checkboxes

<alert>Supports VeeValidate. See [VeeValidate Integration](/vee-validate-integration).</alert>

## Usage

#### Import single component...

```js
import { Checkbox } from '@phila/phila-ui';

//register it locally...
components: {
  Checkbox,
}

//... or register it globally
Vue.component('checkbox', Checkbox);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<checkbox></checkbox>
```

## Props

| Prop name    | Description                                                                                       | Type           | Values                                           | Default                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| id           | Random id is generated if none provided                                                           | string         | -                                                | () => `ta_${Math.random().toString(12).substring(2, 8)}`                                                             |
| errors       | Error message                                                                                     | array\|string  | -                                                | function() {<br> return '';<br>}                                                                                     |
| options      | The checkboxes options.                                                                           | object\|array  | `Array of Strings`, `Array of Objects`, `Object` | () => {<br> return {<br> 'option-1': 'Option 1',<br> 'option-2': 'Option 2',<br> 'option-3': 'Option 3',<br> };<br>} |
| textKey      | The Object key containing the checkbox text. Required when using options as an Array of Objects.  | string         | -                                                | ""                                                                                                                   |
| valueKey     | The Object key containing the checkbox value. Required when using options as an Array of Objects. | string         | -                                                | ""                                                                                                                   |
| value        |                                                                                                   | array          | -                                                | []                                                                                                                   |
| label        | The label used for the checkbox or group of checkboxes                                            | string         | -                                                | ''                                                                                                                   |
| desc         | The description used for the checkbox or group of checkboxes                                      | string         | -                                                | ''                                                                                                                   |
| numOfColumns | Splits a group of checkboxes into columns 1 or more columns                                       | string\|number | -                                                | 1                                                                                                                    |

## Slots

| Name  | Description             | Bindings |
| ----- | ----------------------- | -------- |
| label | Alternative label       |          |
| desc  | Alternative description |          |

## Code Samples

### Options

Options can be provided as an Array when the checkbox label and value are the same.

```html
<checkbox v-model="myValues" label="My Label" :options="options" />
```

```js
options: ["Option 1", "Option 2", "Option 3"];
```

And options can be provided as an Object when the checkbox label and value are **NOT** the same.

```js
options: {
  'option-1': 'Option 1',
  'option-2': 'Option 2',
  'option-3': 'Option 3',
}
```

An Array of Objects can also be used, in which case the `text-key` and `value-key` props need to be provided to indicate the text to be displayed and value to be captured.

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
    key1: "My checkbox 1",
    key2: "my-checkbox-value-1"
  },
  {
    key1: "My checkbox 2",
    key2: "my-checkbox-value-2"
  }
];
```

### Columns

By default the checkboxes are displayed in one column. Add more columns to make large amount of checkboxes easier to read.

```html
<checkbox num-of-columns="3" />
```

<alert>Uses the css property `columns`</alert>

### Displaying errors

To display an error provide a String with the error, or an Array of errors. Only the first error in the array is displayed.

```html
<checkbox errors="This field is required" />
```

<alert>This component supports VeeValidate errors. [Learn how to validate](/vee-validate-integration) with the VeeValidade plugin.<a></alert>
