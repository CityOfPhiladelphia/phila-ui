<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div class="is-field-info-important">
          This field is required. Click the button without selecting an option to validate it.
        </div>
        <vee-radio
          ref="rb"
          v-model="value"
          label="Label for all radio buttons in this group"
          desc="Description for all radio buttons in this group"
          :options="options"
          rules="required"
          required
          name="myRadioButton"
        />
        <pre>Selected option: {{ value }}</pre>

        <button
          class="button is-primary"
          @click.prevent="$refs.rb.validate()"
        >
          Validate
        </button>
      </div>
    </div>
  </div>
</template>
<script>

import { extend, withValidation } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { Radio } from '@phila/phila-ui';

const VeeRadio = withValidation(Radio);

extend('required', required);

export default {
  components: {
    VeeRadio,
  },
  data () {
    return {
      value: "",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
    };
  },
};
</script>