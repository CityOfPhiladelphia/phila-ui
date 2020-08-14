<template>
  <form
    :id="`form-${id}`"
    novalidate
    v-bind="$attrs"
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
      v-if="!isValid && errorsCount > 0"
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
        <slot
          name="submit"
        />
      </div>
    </template>
  </form>
</template>
<script>
export default {
  name: "InputForm",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => `ta_${Math.random().toString(12).substring(2, 8)}`,
    },
    isValid: {
      type: [ Boolean ],
      default () {
        return null;
      },
    },
    errorsCount: {
      type: [ String, Number ],
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
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