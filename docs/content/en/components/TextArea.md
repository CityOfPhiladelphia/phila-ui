---

title: Textarea
menuTitle: Textarea (WIP)
description: A textarea input
category: Components | Inputs
position: 225
badge: WIP

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

| Prop name   | Description                             | Type           | Values | Default                                                  |
| ----------- | --------------------------------------- | -------------- | ------ | -------------------------------------------------------- |
| id          | Random id is generated if none provided | string         | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}` |
| errors      | Error message                           | array\|string  | -      | function() {<br> return '';<br>}                         |
| value       |                                         | string\|number | -      | ""                                                       |
| label       |                                         | string         | -      | ''                                                       |
| placeholder |                                         | string         | -      | 'Insert label placeholder here'                          |
| desc        |                                         | string         | -      | ''                                                       |
| innerLabel  |                                         | boolean        | -      | true                                                     |

## Slots

| Name | Description | Bindings |
| ---- | ----------- | -------- |
| desc |             |          |

### Examples

```jsx
<text-area />
```
