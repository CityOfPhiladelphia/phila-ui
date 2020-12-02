---

title: Radio Buttons
menuTitle: Radio Buttons (WIP)
description: Displays a group of radio buttons
category: Components | Inputs
position: 215
badge: WIP

---

Displays a group of radio buttons

<alert>Supports VeeValidate. See [VeeValidate Integration](/vee-validate-integration).</alert>

## Usage

#### Import single component...

```js
import { Radio } from '@phila/phila-ui';

//register it locally...
components: {
  Radio,
}

//... or register it globally
Vue.component('radio', Radio);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<radio></radio>
```

## Props

| Prop name    | Description                             | Type           | Values | Default                                                                                                              |
| ------------ | --------------------------------------- | -------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| id           | Random id is generated if none provided | string         | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}`                                                             |
| errors       | Error message                           | array\|string  | -      | function() {<br> return '';<br>}                                                                                     |
| options      |                                         | object\|array  | -      | () => {<br> return {<br> 'option-1': 'Option 1',<br> 'option-2': 'Option 2',<br> 'option-3': 'Option 3',<br> };<br>} |
| textKey      |                                         | string         | -      | ""                                                                                                                   |
| value        |                                         | string         | -      | ''                                                                                                                   |
| v-model      |                                         | string         | -      | ''                                                                                                                   |
| valueKey     |                                         | string         | -      | ""                                                                                                                   |
| label        |                                         | string         | -      | ''                                                                                                                   |
| desc         |                                         | string         | -      | ''                                                                                                                   |
| numOfColumns |                                         | string\|number | -      | 1                                                                                                                    |

## Slots

| Name  | Description | Bindings |
| ----- | ----------- | -------- |
| label |             |          |
| desc  |             |          |
