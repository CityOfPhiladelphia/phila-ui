<template>
  <ValidationObserver
    :id="`form-val-${id}`"
    :ref="`form-val-${id}`"
    v-slot="validation"
    tag="div"
    v-on="inputListeners"
  >
    <input-form
      :id="`form-${id}`"
      :is-valid="!validation.failed"
      :errors-count="getErrorsCount(validation)"
      v-bind="{ ...$attrs, ...$props }"
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
  computed: {
    inputListeners: function () {
      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value);
          },
        }
      );
    },
  },
  methods: {
    validate () {
      return this.$refs[`form-val-${this.id}`].validate();
    },
    getErrorsCount (validation) {
      let count = Object.values(validation.errors).reduce((total, error) => error.length > 0 ? total + 1 : total, 0);

      this.$emit('validation', validation);

      return count;
    },
  },
};
</script>