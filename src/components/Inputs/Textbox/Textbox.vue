<template>
  <div
    class="input-wrap input-text"
    :class="{ required: $attrs.required !== undefined, 'has-error': error }"
  >
    <input
      :id="id"
      class="input"
      v-bind="$attrs"
      :name="name"
      :aria-labelledby="id"
      :aria-required="$attrs.required !== undefined"
      :value="value"
      :type="type"
      :placeholder="$attrs.required !== undefined ? placeholder + '*' : placeholder"
      @input="$emit('input', $event.target.value)"
      @on="$listeners"
    >
    <label :for="id">{{ placeholder }}</label>
    <template v-if="error">
      <div class="input-error-msg">
        <span class="icon"><i class="fas fa-exclamation-circle" /></span>
        <span>{{ error }}</span>
      </div>
    </template>
  </div>
</template>
<script>
/**
 * Equivalent to the html ```<input type="text">``` tag
 */
export default {
  name: "Textbox",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => `tx_${Math.random().toString(12).substring(2, 8)}`,
    },
    name: {
      type: String,
      default: 'Field Name',
    },
    value: {
      type: [ String, Number ],
      default: "",
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Insert placeholder here',
    },
    error: {
      type: String,
      default: null,
    },
  },
};
</script>
<style lang="scss">
  @import '../../../styles/inputs.scss';

  .input {
    font-size: 1.063rem;
    line-height: 1.5rem;
    height: 3.5rem;
    color: $dark-gray;
    padding: 1.1rem 1rem 1rem 1rem;
    border-bottom: 1px solid #979797;
    &:not(:placeholder-shown),
    &:focus {
      padding: 1rem 1rem 0 1rem;
      + label {
        opacity: 1;
      }
    }
    &:focus {
      background-color: $white;
      border: 2px solid $electric-blue !important;
    }
    &:hover {
      border-bottom: 1px solid #979797;
    }
  }

  .input:not(:-ms-input-placeholder) {
    padding: 1rem 1rem 0 1rem;
    + label {
      opacity: 1;
    }
  }

  .input-text {
    position: relative;
    padding: 0.5rem 0.5rem 0.25rem;
    &.has-error {
      background-color: $error-light;
      .input {
        border: 2px solid $love-park-red;
      }
      .input-error-msg {
        font-size: 0.813rem;
        color: $love-park-red;
      }
    }
    &.required {
      label {
        &:after {
          content: "*";
          font-size: 0.813rem;
        }
      }
    }
  }

  label {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 5;
    font-size: 0.813rem;
    color: #666666;
    font-weight: 400;
    line-height: 1.5rem;
    padding: 0 0 0 0.90rem;
    opacity: 0;
  }

</style>