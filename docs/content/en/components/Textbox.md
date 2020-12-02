---

title: Text Input
menuTitle: Text Input
description: Displays a text input
category: Components | Inputs
position: 205
badge:

---

Displays a text input

<alert>Supports VeeValidate. See [VeeValidate Integration](/vee-validate-integration).</alert>

## Usage

#### Import single component...

```js
import { Textbox } from '@phila/phila-ui';

//register it locally...
components: {
  Textbox,
}

//... or register it globally
Vue.component('textbox', Textbox);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<textbox></textbox>
```

## Props

| Prop name   | Description                                                                        | Type           | Values           | Default                                                  |
| ----------- | ---------------------------------------------------------------------------------- | -------------- | ---------------- | -------------------------------------------------------- |
| id          | Random id is generated if none provided                                            | string         | -                | () => `ta_${Math.random().toString(12).substring(2, 8)}` |
| errors      | Error message                                                                      | array\|string  | -                | function() {<br> return '';<br>}                         |
| label       | The input label                                                                    | string         | -                | ''                                                       |
| desc        | The input description                                                              | string         | -                | ''                                                       |
| placeholder | The input placeholder                                                              | string         | -                | 'Insert placeholder here'                                |
| type        | The input type                                                                     | string         | `text`, `number` | 'text'                                                   |
| value       | The input value / v-model                                                          | string\|number | -                | ""                                                       |
| icon        | The input icon. It expects font-awesome icon classes.                              | string         | -                | ''                                                       |
| isLoading   | Whether a loading indicator should be displayed                                    | boolean        | -                | false                                                    |
| innerLabel  | Whether the label should be displayed inside the input (true) or above it (false). | boolean        | -                | true                                                     |

## Slots

| Name | Description                   | Bindings |
| ---- | ----------------------------- | -------- |
| desc | Alternative input description |          |

## Code Samples

### Label

When using the `innerLabel` option (default), the `placeholder` prop should be used as the input label.

```html
<textbox v-model="myValue" placeholder="My Label" />
```

If a label is also provided, then the label will be displayed once the user clicks on the field.

```html
<textbox
  v-model="myValue"
  placeholder="My Label"
  label="My alternative label"
/>
```

When **NOT** using the `innerLabel` option (default), the `placeholder` and `label` props will function independently and both should be provided.

```html
<textbox
  v-model="myValue"
  placeholder="My placeholder"
  label="My Label"
  :inner-label="false"
/>
```

### Description

Use the `desc` prop or slot to provide extra information about the input.

```html
<textbox desc="Extra information about this field" />
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
<textbox icon="fa fa-search" />
```

<alert>Use icons sparingly (eg. Indicating that the input has a different function).</alert>

### With loading

Use `is-loading` to indicate that the input is fetching content.

```html
<textbox :is-loading="true" />
```

<alert>The loading indicator temporarily replaces the input icon.</alert>

### Displaying errors

To display an error provide a string with the error, or an array of errors. Only the first error in the array is displayed.

```html
<textbox errors="This field required" />
```

<alert>This component supports VeeValidate errors. [Learn how validate](/vee-validate-integration) with the VeeValidade plugin.<a></alert>
