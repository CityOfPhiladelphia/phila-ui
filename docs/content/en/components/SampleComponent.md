---

title: Sample Component
menuTitle: Sample Component (WIP)
description: A sample component template
category: Components | Other
position: 310
badge: WIP

---

A sample component template

## Usage

#### Import single component...

```js
import { SampleComponent } from '@phila/phila-ui';

//register it locally...
components: {
  SampleComponent,
}

//... or register it globally
Vue.component('sample-component', SampleComponent);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<sample-component></sample-component>
```

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
