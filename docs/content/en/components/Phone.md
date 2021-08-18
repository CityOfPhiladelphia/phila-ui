---

title: Phone Number
menuTitle: Phone Number
description: A phone number input
category: Components | Inputs
position: 230
badge:

---

A phone number input

<alert>Supports VeeValidate. See [VeeValidate Integration](/vee-validate-integration).</alert>

## Usage

#### Import single component...

```js
import { Phone } from '@phila/phila-ui';

//register it locally...
components: {
  Phone,
}

//... or register it globally
Vue.component('phone', Phone);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<phone></phone>
```

## Props

| Prop name | Description                             | Type          | Values | Default                                                  |
| --------- | --------------------------------------- | ------------- | ------ | -------------------------------------------------------- |
| id        | Random id is generated if none provided | string        | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}` |
| errors    | Error message                           | array\|string | -      | function() {<br> return '';<br>}                         |
| value     |                                         | null          | -      | ''                                                       |

## Events

| Event name | Type      | Description |
| ---------- | --------- | ----------- |
| input      | undefined |
