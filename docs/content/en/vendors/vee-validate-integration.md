---
title: VeeValidate Integration
menuTitle: VeeValidate Integration
category: "Other | Vendors"
position: 500
badge: ""
---

All PhilaUI input components support the third-party [VeeValidate](https://logaretm.github.io/vee-validate/) library, version 3.

Adding validation to the PhilaUI input components requires wrapping the PhilaUI input with VeeValidate's `<ValidationProvider>` component, which watches for changes in the input. VeeValidate provides a function called `withValidation` which does just that. [Learn more](https://logaretm.github.io/vee-validate/api/with-validation.html) about this function.

## VeeValidate setup

### Install it

Install VeeValidate

```
npm install vee-validate --save
```

### Register validation rules

See VeeValidation documentation on how to register/extend the [validation rules](https://logaretm.github.io/vee-validate/guide/basics.html#adding-rules).

## withValidation setup

Below are two ways of using the `withValidation` function, depending on how PhilaUI was registered.

<alert type="warning">The `withValidation` function does NOT currently support components with slots. If the input being validated requires a slot, then the input will need to be wrapped manually by using the `<ValidationProvider>`.
</alert>

#### Global registration using withValidation

```js
//Import the whole library
import * as PhilaUI from "@phila/phila-ui";

//Import withValidation
import { withValidation } from "vee-validate";

//Register components globally
Vue.use(PhilaUI);

//Add validation to Textbox and Checkbox
const VeeTextbox = withValidation(PhilaUI.Textbox);
const VeeCheckbox = withValidation(PhilaUI.Checkbox);

//Register new components globally
Vue.component("VeeTextbox", VeeTextbox);
Vue.component("VeeCheckbox", VeeCheckbox);
```

#### Local registration using withValidation

```js
//Import individual PhilaUI components
import { Textbox, Checkbox } from '@phila/phila-ui';

//Import withValidation
import { withValidation } from 'vee-validate';

//Add validation to Textbox and Checkbox
const VeeTextbox = withValidation(Textbox);
const VeeCheckbox = withValidation(Checkbox);

//Register the components locally
...
components: {
  VeeTextbox,
  VeeCheckbox,
}
...
```

### Usage example

The PhilaUI components that have validation can now accept VeeValidate props. For example, bellow is a `<vee-textbox>` component using VeeValidate's **_required_** rule and **_eager_** mode.

```js
<vee-textbox
  v-model="myValue"
  name="Full Name"
  rules="required"
  mode="eager"
  required
>
```

<alert>Note that the `name` attributed is added so that VeeValidate knows this field's "nice" name, which is used on the default error messages.</alert>

<alert>There's no need to use the `errors` prop as the errors are handled by VeeValidate's `<ValidationProvider>` and passed down to the component automatically.</alert>
