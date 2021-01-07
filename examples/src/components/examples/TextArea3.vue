<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div class="is-field-info-important">
          This field is required; click in and out of the field to trigger the error.<br>
          Type any value to remove the error.
        </div>
        <vee-text-area
          v-model="value"
          name="Comment"
          placeholder="Leave a comment"
          desc="Please provide more information"
          required
          rules="required"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { extend, withValidation } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { TextArea } from '@phila/phila-ui';

const VeeTextArea = withValidation(TextArea);

extend('required', required);

export default {
  components: {
    VeeTextArea,
  },
  data () {
    return {
      value: "",
    };
  },
};
</script>