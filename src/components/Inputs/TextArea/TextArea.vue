<template>
  <div
    class="input-wrap input-textarea"
    :class="{ required: $attrs.required !== undefined }"
  >
    <label :for="id">{{ placeholder }}</label>
    <!--
      trigered on input change
      @event input      
    -->
    <textarea
      class="textarea"
      v-bind="$attrs"
      :aria-labelledby="id"
      :aria-required="$attrs.required !== undefined"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @on="$listeners"
    />
  </div>
</template>
<script>
/**
 * Equivalent to the html ```<textarea>``` tag
 */
export default {
  name: "TextArea",
  inheritAttrs: false,
  props: {
    /**
     * Random id is generated if none provided
     */
    id: {
      type: String,
      default: () => `ta_${Math.random().toString(12).substring(2, 8)}`,
    },
    value: {
      type: [ String, Number ],
      default: "",
    },
    placeholder: {
      type: String,
      default: 'Insert label placeholder here',
    },
  },
};
</script>
<style lang="scss">
  @import '../../../styles/inputs.scss';

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
    position: relative;
    label {
      position: absolute;
      top: 0px;
      left: 10px;
      z-index: 5;
      font-size: 10px;
      color: #909090;
      font-weight: 300;
    }
    textarea{
      &:focus {
        border-width: 2px;
        padding-bottom: 0;
      }
    }
  }
</style>

