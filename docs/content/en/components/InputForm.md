---

title: Form
menuTitle: Form
description: A `<form>` wrapper with error handling and submit button.
category: Components | Inputs
position: 200
badge:

---

A `<form>` wrapper with error handling and submit button.

<alert>Supports VeeValidate. See [VeeValidate Integration](/vee-validate-integration).</alert>

## Usage

#### Import single component...

```js
import { InputForm } from '@phila/phila-ui';

//register it locally...
components: {
  InputForm,
}

//... or register it globally
Vue.component('input-form', InputForm);
```

#### or import the whole library,

```js
import * as PhilaUI from "@phila/phila-ui";

//register it globally
Vue.use(PhilaUI);
```

#### then use it in the vue template

```html
<input-form></input-form>
```

## Props

| Prop name       | Description | Type                   | Values | Default                                                  |
| --------------- | ----------- | ---------------------- | ------ | -------------------------------------------------------- |
| id              |             | string                 | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}` |
| title           |             | string                 | -      | ''                                                       |
| desc            |             | string                 | -      | ''                                                       |
| errors          |             | object\|string\|number | -      | function() {<br> return '';<br>}                         |
| hideErrorsCount |             | boolean                | -      | false                                                    |

## Slots

| Name    | Description                                                                                                                                                  | Bindings |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| default | The form inputs                                                                                                                                              |          |
| submit  | Submit button placement. For standard forms, it's best to use this slot to keep the submit button as the last element in the form, bellow the errors count). |          |

## Purpose

This component is not required when building a form. However it offers a couple of helpers that are useful when validating a form. It's best when used in conjunction with the VeeValidate plugin.

**A few things it does:**

- It wraps the form inputs with the `<form>` tag.
- It shows an error count that can be set manually, or automatically if using the VeeValidate observer
- It has a slot for the submit button which allows the submit button to always be the last element in the form, below the error count
- Provides some basic form styles

## Code Samples

### Default `<slot>`

The default slot takes input elements and/or input components.

```html
<input-form>
  <input type="text" value="" />
  <textbox v-model="myTextbox" />
</input-form>
```

### Submit `<slot>`

The submit slot ensures the submit button is always the last element in the form, which is useful when using the error counter.

```html
<input-form>
  <template slot="submit">
    <button class="is-cta">Submit</button>
  </template>
</input-form>
```

### Title & Description

```html
<input-form title="My form title" description="My form description">
</input-form>
```

### Errors count

The `errors` prop displays the total number of errors. This can be set manually as a String or Number, or a VeeValidate errors object can be passed down to the form.

```html
<input-form :errors="10"> </input-form>
```

When using VeeValidate, the `<input-form>` needs to be wrapped with VeeValidate's `<ValidationObserver>` so that the errors object can be accessed by the `<input-form>`.

```html
<ValidationObserver tag="div" v-slot="{ errors }">
  <input-form :errors="errors"></input-form>
</ValidationObserver>
```

## Live Examples

### Manual validation

A basic example of a form with textbox inputs, a submit button and manual validation.
<example name="Form1" height="500"></example>

### VeeValidate validation

A basic example of a form with textbox inputs, a submit button. Both the form and the inputs use VeeValidate for validation.
<example name="Form2" height="550"></example>
