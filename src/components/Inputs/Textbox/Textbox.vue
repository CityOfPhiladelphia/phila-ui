<template>
  <div
    class="input-wrap input-textbox"
    :class="classes"
  >
    <input
      :id="`tb-${id}`"
      class="input"
      v-bind="$attrs"
      :placeholder="$attrs.required !== undefined ? `${placeholder}*` : placeholder"
      :type="type"
      :value="value"
      :v-on="inputListeners"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    >
    <label :for="`tb-${id}`">
      {{ label ? label : placeholder }}
    </label>
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

import { inputMixins } from '../../../utils/inputMixins';

export default {
  name: "Textbox",
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Insert placeholder here',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [ String, Number ],
      default: "",
    },
  },
};
</script>

<style lang="scss">
  @import '../../../styles/inputs.scss';
</style>

<style lang="scss" scoped>
.input-textbox {
  .input {
    height: 3.5rem;
    + label {
      opacity: 0;
    }
    &:not(:placeholder-shown),
    &:focus {
      padding: 1rem 1rem 0 1rem;
      + label {
        opacity: 1;
      }
    }
  }

  .input:not(:-ms-input-placeholder) {
    padding: 1rem 1rem 0 1rem;
    + label {
      opacity: 1;
    }
  }
}
</style>