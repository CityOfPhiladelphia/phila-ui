---

title: Dropdown / Select
menuTitle: Dropdown / Select
description: Styled select input
category: Components | Inputs
position: 220
badge:

---

Styled select input

<alert>Supports VeeValidate. See [VeeValidate Integration](/vee-validate-integration).</alert>

## Usage

#### Import single component...

```js
import { Dropdown } from '@phila/phila-ui';

//register it locally...
components: {
  Dropdown,
}

//... or register it globally
Vue.component('dropdown', Dropdown);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<dropdown></dropdown>
```

## Props

| Prop name   | Description                                                                                       | Type           | Values                                           | Default                                                      |
| ----------- | ------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| id          | Random id is generated if none provided                                                           | string         | -                                                | () => `ta_${Math.random().toString(12).substring(2, 8)}`     |
| errors      | Error message                                                                                     | array\|string  | -                                                | function() {<br> return '';<br>}                             |
| options     | The dropdown options.                                                                             | object\|array  | `Array of Strings`, `Array of Objects`, `Object` | () => {<br> return {<br> 'option-1': 'Option 1',<br> };<br>} |
| label       | The dropdown label                                                                                | string         | -                                                | ''                                                           |
| placeholder | The dropdown placeholder                                                                          | string         | -                                                | ''                                                           |
| textKey     | The Object key containing the dropdown text. Required when using options as an Array of Objects.  | string         | -                                                | ""                                                           |
| value       | The dropdown value / v-model                                                                      | string\|number | -                                                | ''                                                           |
| valueKey    | The Object key containing the dropdown value. Required when using options as an Array of Objects. | string         | -                                                | ""                                                           |
| desc        | The dropdown description                                                                          | string         | -                                                | ''                                                           |
| icon        | The dropdown icon. It expects font-awesome icon classes.                                          | string         | -                                                | ''                                                           |
| innerLabel  | Whether the label should be displayed inside the dropdown (true) or above it (false).             | boolean        | -                                                | true                                                         |
| optgroup    | Enables optgroup                                                                                  | boolean        | -                                                |                                                              |

## Slots

| Name | Description             | Bindings |
| ---- | ----------------------- | -------- |
| desc | Alternative description |          |

## Code Samples

### Label

When using the `innerLabel` option (default), the `placeholder` prop should be used as the dropdown label.

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

Use the `desc` prop or slot to provide extra information about the dropdown.

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

Options can be provided as an Array when the dropdown label and value are the same.

```html
<dropdown v-model="myValues" label="My Label" :options="options" />
```

```js
options: ["Option 1", "Option 2", "Option 3"];
```

And options can be provided as an Object when the dropdown label and value are **NOT** the same.

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
