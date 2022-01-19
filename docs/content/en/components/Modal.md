---

title: Modal
menuTitle: Modal (next)
description: A modal window component with basic styles for title, body, and action buttons.
category: Components | Other
position: 302
badge: next

---

A modal window component with basic styles for title, body, and action buttons.

## Usage

#### Import single component...

```js
import { Modal } from '@phila/phila-ui';

//register it locally...
components: {
  Modal,
}

//... or register it globally
Vue.component('modal', Modal);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<modal></modal>
```

## Props

| Prop name        | Description                                                                                                                                                 | Type    | Values | Default                      |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ---------------------------- |
| hideCloseButton  | When type = default, hide the default CLOSE button                                                                                                          | boolean | -      | false                        |
| hideAlertButtons | When type is = alert, hide the default CANCEL and DELETE buttons.                                                                                           | boolean | -      | false                        |
| hideXButton      | Hide the X button.                                                                                                                                          | boolean | -      | false                        |
| close            | Function called to close the window                                                                                                                         | func    | -      |                              |
| type             | Type of windows available:<br>'default' type includes a CLOSE button<br>'alert' type includes CANCEL and DELETE buttons<br>'none' does not include anything | string  | -      | "default"                    |
| title            | Title of the modal window<br>Shows only if the 'title' slot is not used                                                                                     | string  | -      | "Modal window default title" |
| body             | Body/content of the modal window<br>Shows only if the 'default' slot is not used                                                                            | string  | -      | "Modal window default body." |
| deleteButtonText | Body/content of the modal window<br>Shows only if the 'default' slot is not used                                                                            | string  | -      | "Delete"                     |

## Events

| Event name   | Type | Description |
| ------------ | ---- | ----------- |
| deleteAction |      |

## Slots

| Name           | Description                                      | Bindings |
| -------------- | ------------------------------------------------ | -------- |
| title          | Modal title                                      |          |
| default        | Modal body/content                               |          |
| actions-before | Actions buttons to append before default buttons |          |
| actions-after  | Actions buttons to append after default buttons  |          |

## Notes

This component does not include the modal functionality. It's meant to be used with the [VueFinalModal](https://vue-final-modal.org/) third-party plugin or other plugins which are not included with PhilaUI.

## Code Samples

### Basic usage with vue-final-modal

```html
<!-- trigger button -->
<button class="button is-danger" @click.prevent="showModal = !showModal">
  Alert modal
</button>

<!-- vue-final-modal with the modal window -->
<vue-final-modal v-slot="{ close }" v-model="showModal" :click-to-close="false">
  <modal :close="close" />
</vue-final-modal>
```

<alert>It's recommended to set the vue-final-modal's "click-to-close" property to false.</alert>

## Live Examples

### Basic modal window using vue-final-modal (third-party plugin)

<example name="Modal1" height="400"></example>

### Alert modal window using vue-final-modal (third-party plugin)

<example name="Modal2" height="400"></example>

### Custom buttons modal window using vue-final-modal (third-party plugin)

<example name="Modal3" height="400"></example>
