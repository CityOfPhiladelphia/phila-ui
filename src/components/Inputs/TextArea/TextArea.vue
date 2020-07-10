<template>
  <div
    class="input-wrap input-textarea"
    :class="classes"
  >
    <!--
      trigered on input change
      @event input
    -->
    <textarea
      :id="`ta-${id}`"
      class="textarea"
      v-bind="$attrs"
      :value="value"
      :placeholder="$attrs.required !== undefined ? placeholder + '*' : placeholder"
      @input="$emit('input', $event.target.value)"
      v-on="inputListeners"
    />
    <label :for="`ta-${id}`">
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
 * Equivalent to the html ```<textarea>``` tag
 */
import { inputMixins } from '../../../utils/inputMixins';
export default {
  name: "TextArea",
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {
    value: {
      type: [ String, Number ],
      default: "",
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Insert label placeholder here',
    },
  },
  data () {
    return {
      localValue: '',
    };
  },
};
</script>
<style lang="scss">
  @import '../../../styles/inputs.scss';
</style>
<style lang="scss" scoped>
  textarea:focus::-webkit-input-placeholder {
    color: transparent;
  }

  textarea:focus:-moz-placeholder {
    color: transparent;
  }
  /* FF 4-18 */
  textarea:focus::-moz-placeholder {
    color: transparent;
  }
  /* FF 19+ */
  textarea:focus:-ms-input-placeholder {
    color: transparent;
  }

  .input-textarea {
    .textarea {
      + label {
        opacity: 0;
        z-index: -1;
      }
      &:not(:placeholder-shown),
      &:focus {
        padding: 1.5rem 1rem 0 1rem;
        + label {
          opacity: 1;
          z-index: 1;
        }
      }
      &:not(:-ms-input-placeholder) {
        padding: 1.5rem 1rem 0 1rem;
        + label {
          opacity: 1;
          z-index: 1;
        }
      }
    }
  }

</style>

