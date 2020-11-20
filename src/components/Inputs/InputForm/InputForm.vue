<template>
  <form
    :id="`form-${id}`"
    v-bind="$attrs"
    novalidate
  >
    <h3
      v-if="title"
      class="title is-4 form-padding"
    >
      {{ title }}
    </h3>
    <div
      v-if="desc"
      class="subtitle is-5 form-padding"
    >
      {{ desc }}
    </div>
    <slot />
    <div
      v-if="!hideErrorsCount && errorsCount > 0"
      class="form-errors has-text-centered has-text-weight-bold has-text-danger"
    >
      <span class="icon">
        <i class="fa fa-exclamation-triangle" />
      </span>
      <span>
        This form has {{ errorsCount }} error{{ errorsCount > 1 ? 's' : '' }}
      </span>
    </div>
    <template v-if="$slots['submit']">
      <div class="form-submit form-padding">
        <slot name="submit" />
      </div>
    </template>
  </form>
</template>
<script>
// @group Inputs
export default {
  name: "InputForm",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => `ta_${Math.random().toString(12).substring(2, 8)}`,
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    errors: {
      type: [ Object, String, Number ],
      default () {
        return '';
      },
    },
    hideErrorsCount: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    errorsCount () {
      if (typeof this.errors === 'string' || typeof this.errors === 'number') {
        return this.errors;
      }
      return this.countVeeValidateErrors(this.errors);
    },
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
    countVeeValidateErrors (errors) {
      let count = Object.values(errors).reduce((total, error) => error.length > 0 ? total + 1 : total, 0);

      return count;
    },
  },
};
</script>
<style lang="scss" scoped>
  .form-errors {
    font-size: 0.875rem;
    padding: 1rem 1.5rem;
    background-color: $error-light;
    margin: 1rem 0;
    span.icon {
      font-size: 1rem;
    }
  }
</style>