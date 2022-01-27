<template>
  <form
    :id="`form-${id}`"
    v-bind="$attrs"
    novalidate
  >
    <div
      v-if="title"
      class="form-title form-padding"
    >
      {{ title }}
    </div>
    <p
      v-if="desc"
      class="form-subtitle form-padding"
    >
      {{ desc }}
    </p>
    <!-- @slot The form inputs -->
    <slot />
    <div
      v-if="!hideErrorsCount && errorsCount > 0"
      class="form-errors has-text-centered has-text-weight-bold has-text-love-park-red-dark"
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
        <!-- @slot Submit button placement. For standard forms, it's best to use this slot to keep the submit button as the last element in the form, bellow the errors count). -->
        <slot name="submit" />
      </div>
    </template>
  </form>
</template>
<script>
/**
 * A ```<form>``` wrapper with error handling and submit button.
 * @niceName Form
 * @group Inputs
 * @position 200
 */
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
        },
      );
    },
  },
  methods: {
    countVeeValidateErrors (errors) {

      let values = Object.keys(errors).map(key => {
        return errors[key];
      });

      let count = values.reduce((total, error) => error.length > 0 ? total + 1 : total, 0);

      return count;
    },
  },
};
</script>
<style lang="scss" scoped>
  .form-title {
    @include heading-2;
  }
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