---

title: Tooltip
menuTitle: Tooltip
description: A tooltip which display a custom message on hover or click.
category: Components | Other
position: 310
badge:

---

A tooltip which display a custom message on hover or click.

## Usage

#### Import single component...

```js
import { Tooltip } from '@phila/phila-ui';

//register it locally...
components: {
  Tooltip,
}

//... or register it globally
Vue.component('tooltip', Tooltip);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<tooltip></tooltip>
```

## Props

| Prop name | Description                                         | Type   | Values          | Default                   |
| --------- | --------------------------------------------------- | ------ | --------------- | ------------------------- |
| mode      | light mode: off-white bg<br>dark mode: dark grey bg | string | `light`, `dark` | "dark"                    |
| message   | the tooltip message                                 | string | -               | "Default tooltip message" |

## Notes

The tooltip is positioned according to the space available on the screen. On mobile the tooltip is enabled on tap, and an X is shown to allow users to close it.

## Code Samples

### Basic tooltip with dark mode enabled (default)

```html
<tooltip message="My tooltip message" />
```

### Basic tooltip with light mode enabled

```html
<tooltip message="My tooltip message" mode="light" />
```

## Live Examples

### Basic tooltip with dark mode enabled (default)

<example name="Tooltip1" height="300"></example>

### Basic tooltip with light mode enabled

<example name="Tooltip2" height="300"></example>
