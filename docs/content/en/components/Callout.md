---

title: Callout / Message
menuTitle: Callout / Message (WIP)
description: Displays messages and warnings. Pass a class attribute to the component to change the callout color.
category: Components | Other
position: 300
badge: WIP

---

Displays messages and warnings. Pass a class attribute to the component to change the callout color.

## Usage

#### Import single component...

```js
import { Callout } from '@phila/phila-ui';

//register it locally...
components: {
  Callout,
}

//... or register it globally
Vue.component('callout', Callout);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<callout></callout>
```

## Props

| Prop name | Description                 | Type   | Values | Default |
| --------- | --------------------------- | ------ | ------ | ------- |
| message   | The message to be displayed | string | -      | ''      |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

### Examples

Use color classes from phila-ui or bulma.

```vue live
<callout message="My super message" class="is-info" />
```

```vue live
<callout message="My super message" class="is-danger" />
```

<!--
**Example of a success message using a phila-ui class:**
<Callout message="A success message" class="is-danger"/>

```jsx
  <callout message="A success message" class="is-kelly-drive-green" />
```

**Example of an error message using a bulma class:**
```jsx
  <callout message="An error message" class="is-danger" />
```

**Example of an info message using a bulma class:**
```jsx
  <callout message="An info message" class="is-info" />
``` -->

### Disclaimer:

Uses v-html. Be careful with what content that you pass to the component. Do not use for rendering content to the url.
