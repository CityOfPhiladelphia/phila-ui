---

title: Textarea
menuTitle: Textarea
description: A textarea input
category: Components | Inputs
position: 225
badge:

---

A textarea input

<alert>Supports VeeValidate. See [VeeValidate Integration](/vee-validate-integration).</alert>

## Usage

#### Import single component...

```js
import { TextArea } from '@phila/phila-ui';

//register it locally...
components: {
  TextArea,
}

//... or register it globally
Vue.component('text-area', TextArea);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<text-area></text-area>
```

## Props

| Prop name   | Description                                                                           | Type           | Values | Default                                                  |
| ----------- | ------------------------------------------------------------------------------------- | -------------- | ------ | -------------------------------------------------------- |
| id          | Random id is generated if none provided                                               | string         | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}` |
| errors      | Error message                                                                         | array\|string  | -      | function() {<br> return '';<br>}                         |
| value       | The textarea value / v-model                                                          | string\|number | -      | ""                                                       |
| label       | The textarea label                                                                    | string         | -      | ''                                                       |
| placeholder | The textarea placeholder                                                              | string         | -      | 'Insert label placeholder here'                          |
| desc        | The textarea description                                                              | string         | -      | ''                                                       |
| innerLabel  | Whether the label should be displayed inside the textarea (true) or above it (false). | boolean        | -      | true                                                     |

## Slots

| Name | Description             | Bindings |
| ---- | ----------------------- | -------- |
| desc | Alternative description |          |

<alert type="warning">Please, note that the component tag is `<text-area>` (with a dash) to prevent collision with the textarea html tag.</alert>

## Code Samples

### Label

When using the `innerLabel` option (default), the `placeholder` prop should be used as the TextArea label.

```html
<text-area v-model="myValue" placeholder="My Label" />
```

If a label is also provided, then the label will be displayed once the user clicks on the field.

```html
<text-area
  v-model="myValue"
  placeholder="My Label"
  label="My alternative label"
/>
```

When **NOT** using the `innerLabel` option (default), the `placeholder` and `label` props will function independently and both should be provided.

```html
<text-area
  v-model="myValue"
  placeholder="My placeholder"
  label="My Label"
  :inner-label="false"
/>
```

### Description

Use the `desc` prop or slot to provide extra information about the input.

```html
<text-area desc="Extra information about this field" />
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
<text-area errors="This field is required" />
```

<alert>This component supports VeeValidate errors. [Learn how to validate](/vee-validate-integration) with the VeeValidade plugin.<a></alert>

## Live Examples

### Textarea with placeholder and description

<example name="TextArea1" height="300"></example>

### Textarea with error

<example name="TextArea2" height="300"></example>

### Textarea with VeeValidate's validation

<example name="TextArea3" height="380"></example>
