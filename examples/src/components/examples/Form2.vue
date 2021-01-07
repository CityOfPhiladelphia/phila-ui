<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <ValidationObserver
          v-slot="{ errors, handleSubmit }"
          tag="div"
        >
          <input-form
            title="Form title"
            desc="Form description"
            :errors="errors"
          >
            <p class="is-field-info-important">
              This form shows error counts only on submit.
            </p>
            <vee-textbox
              v-model="value1"
              rules="required"
              placeholder="First Name"
              required
              name="Firs Name"
            />
            <vee-textbox
              v-model="value2"
              rules="required"
              placeholder="Last Name"
              required
              name="Last Name"
            />
            <button
              slot="submit"
              class="is-cta button"
              @click.prevent="handleSubmit(validateOnSubmit)"
            >
              Submit
            </button>
          </input-form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
import { InputForm, Textbox } from '@phila/phila-ui';
import { ValidationObserver, withValidation, extend, setInteractionMode } from 'vee-validate';

import { required } from 'vee-validate/dist/rules';
extend('required', {
  ...required,
  message: 'This field is required',
});

setInteractionMode('passive');


const VeeTextbox = withValidation(Textbox);

export default {
  components: {
    InputForm,
    ValidationObserver,
    VeeTextbox,
  },
  data () {
    return {
      value1: "",
      value2: "",
    };
  },
  methods: {
    validateOnSubmit () {
      alert('Form has been submitted!');
    },
  },
};
</script>