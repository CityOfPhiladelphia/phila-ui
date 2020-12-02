---

title: Dropdown / Select
menuTitle: Dropdown / Select (WIP)
description: Styled select input
category: Components | Inputs
position: 220
badge: WIP

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

| Prop name   | Description                             | Type          | Values | Default                                                      |
| ----------- | --------------------------------------- | ------------- | ------ | ------------------------------------------------------------ |
| id          | Random id is generated if none provided | string        | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}`     |
| errors      | Error message                           | array\|string | -      | function() {<br> return '';<br>}                             |
| label       |                                         | string        | -      | ''                                                           |
| options     |                                         | object\|array | -      | () => {<br> return {<br> 'option-1': 'Option 1',<br> };<br>} |
| placeholder |                                         | string        | -      | ''                                                           |
| textKey     |                                         | string        | -      | ""                                                           |
| value       |                                         | string        | -      | ''                                                           |
| valueKey    |                                         | string        | -      | ""                                                           |
| desc        |                                         | string        | -      | ''                                                           |
| icon        |                                         | string        | -      | ''                                                           |
| innerLabel  |                                         | boolean       | -      | true                                                         |

## Slots

| Name | Description | Bindings |
| ---- | ----------- | -------- |
| desc |             |          |
