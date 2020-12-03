---
title: VeeValidate Integration
menuTitle: VeeValidate Integration (WIP)
category: 'Other'
position: 1000
badge: WIP
---

All PhilaUI input components support the third-party [VeeValidate](https://logaretm.github.io/vee-validate/) library.

Adding validation to the PhilaUI input components requires wrapping the PhilaUI input with VeeValidate's ``<ValidationProvider>`` component, which watches for changes in the input. VeeValidate provides a function called ``withValidation`` which does just that. [Learn more](https://logaretm.github.io/vee-validate/api/with-validation.html) about this function.

## VeeValidate setup
### Install it
Install VeeValidate
```
npm install vee-validate --save
```
### Register validation rules
See VeeValidation documentation on how to register/extend the [validation rules](https://logaretm.github.io/vee-validate/guide/basics.html#adding-rules).

## PhilaUI setup
Below are two ways of using the ``withValidation`` function, depending on how PhilaUI was registered.

### Global registration
If importing the whole PhilaUI library and registering it globally with ``Vue.use(PhilaUI)``, then a PhilaUI helper can be used to automate this task.

<alert type="warning">Please note that VeeValidate must be installed for the helper to work.</alert>

#### Configuring the helper
The helper settings are passed during the registration as an option. The example below would add validation to the Textbox and Checkbox components:

```js
//Import the whole library PhilaUI
import * as PhilaUI from '@phila/phila-ui';

Vue.use(PhilaUI, {
  addValidationTo: ['Textbox', 'Checkbox']
});
```

The above, registers two new components ``<vee-textbox>`` and ``<vee-checkbox>`` which are globally available in all vue templates.


### Local registration
If importing PhilaUI components individually, simply, use the ```withValidation``` function as needed.

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
The PhilaUI components that have validation can now accept VeeValidate props. For example, bellow is a ``<vee-textbox>`` component using VeeValidate's ___required___ rule and ___eager___ mode.
```js
<vee-textbox
  v-model="myValue"
  name="Full Name"
  rules="required"
  mode="eager"
>
```
<alert>Note that the ``name`` attributed is added so that VeeValidate knows this field's "nice" name, which is used on the default error messages.</alert>

<alert>There's no need to use the ``errors`` prop as the errors are handled by VeeValidate's ``<ValidationProvider>`` and passed down to the component automatically.</alert>