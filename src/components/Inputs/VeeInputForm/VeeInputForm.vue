<template>
  <ValidationObserver
    :id="`form-val-${id}`"
    :ref="`form-val-${id}`"
    v-slot="validation"
    tag="div"
  >
    <input-form
      :id="`form-${id}`"
      :is-valid="!validation.failed"
      :errors-count="getErrorsCount(validation.errors)"
      v-on="inputListeners"
    >
      <template
        v-for="(index, name) in $slots"
        v-slot:[name]
      >
        <slot :name="name" />
      </template>
    </input-form>
  </validationobserver>
</template>
<script>
import InputForm from '../InputForm/InputForm.vue';
export default {
  name: "VeeInputForm",
  components: {
    InputForm,
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => `ta_${Math.random().toString(12).substring(2, 8)}`,
    },
  },
  methods: {
    validate () {
      return this.$refs[`form-${this.id}`].validate();
    },
    getErrorsCount (errors) {
      return Object.values(errors).reduce((total, error) => error.length > 0 ? total + 1 : total, 0);
    },
  },
};
</script>