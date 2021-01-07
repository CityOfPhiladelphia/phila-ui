<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div class="is-field-info-important">
          This field is required; click in and out of the field to trigger the error.<br>
          Type any value to remove the error.
        </div>
        <vee-textbox
          v-model="value"
          placeholder="Last Name"
          desc="Please enter your last name"
          name="Last Name"
          rules="required"
          required
        />
      </div>
    </div>
  </div>
</template>
<script>
import { extend, withValidation } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { Textbox } from '@phila/phila-ui';

const VeeTextbox = withValidation(Textbox);

extend('required', required);

export default {
  components: {
    VeeTextbox,
  },
  data () {
    return {
      value: "",
    };
  },
};
</script>