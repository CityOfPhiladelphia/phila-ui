<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div class="is-field-info-important">
          This field is required; check and uncheck one checkbox to trigger the error.
        </div>
        <vee-checkbox
          v-model="value"
          name="MyField"
          label="Label for all checkboxes in this group"
          desc="Description for all checkboxes in this group"
          :options="options"
          required
          rules="required"
        />
        <pre>Selected option(s): {{ value }}</pre>
      </div>
    </div>
  </div>
</template>
<script>

import { extend, withValidation } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { Checkbox } from '@phila/phila-ui';

const VeeCheckbox = withValidation(Checkbox);

extend('required', required);

export default {
  components: {
    VeeCheckbox,
  },
  data () {
    return {
      value: [],
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
    };
  },
};
</script>