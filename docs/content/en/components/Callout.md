---

title: Callout / Message
menuTitle: Callout / Message
description: Displays important messages and warnings
category: Components | Other
position: 300
badge:

---

Displays important messages and warnings

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

| Prop name | Description                 | Type   | Values                                 | Default |
| --------- | --------------------------- | ------ | -------------------------------------- | ------- |
| message   | The message to be displayed | string | -                                      | ''      |
| type      | The type of message         | string | `info`, `success`, `warning`, `danger` | ''      |

## Slots

| Name    | Description         | Bindings |
| ------- | ------------------- | -------- |
| default | Alternative message |          |

## Code Samples

### Message `<slot>`

Use the message slot in case it contains html code that needs to be rendered, otherwise use the `message` prop.

### Message Types

There are two ways of changing the callout color.

1. Use the prop `type`
2. Passing a class attribute to the callout (uses bulma colors)

The default callout has a gray color

```html
<callout message="This is the default message" />
```

### Using the prop `type`

#### Info

```html
<callout message="This is a info message" type="info" />
```

#### Success

```html
<callout message="This is a success message" type="success" />
```

#### Warning

```html
<callout message="This is a warning message" type="warning" />
```

#### Danger

```html
<callout message="This is a danger message" type="danger" />
```

### Using the class attribute

```html
<callout message="This is a info message" class="is-info" />

<callout message="This is a success message" class="is-success" />

<callout message="This is a warning message" class="is-warning" />

<callout message="This is a danger message" class="is-danger" />
```

## Live Examples

### Callout types

<example name="Callout1" height="500"></example>

### Callout types using class and slot

<example name="Callout2" height="500"></example>
