<template>
  <div
    class="input-wrap input-textarea"
    :class="classes"
  >
    <!--
      trigered on input change
      @event input
    -->
    <div class="field">
      <label
        v-if="!innerLabel"
        :for="`ta-${id}`"
      >
        {{ label }}
      </label>
      <div class="control">
        <textarea
          :id="`ta-${id}`"
          class="textarea"
          v-bind="$attrs"
          :value="value"
          :placeholder="$attrs.required !== undefined ? placeholder + '*' : placeholder"
          v-on="inputListeners"
        />
        <label
          v-if="innerLabel"
          :for="`ta-${id}`"
        >
          {{ label ? label : placeholder }}
        </label>
        <div
          v-if="desc"
          class="supplemental-text"
        >
          {{ desc }}
        </div>
        <template v-else>
          <div
            v-if="$slots['desc']"
            class="supplemental-text"
          >
            <slot name="desc" />
          </div>
        </template>
      </div>
    </div>
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
import { inputMixins } from '@/utils/inputMixins';
// @group Inputs
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
    desc: {
      type: String,
      default: '',
    },
    innerLabel: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      localValue: '',
    };
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
<style lang="scss">
  @import '../../../assets/styles/scss/inputs.scss';
</style>
<style lang="scss" scoped>

  textarea::-webkit-input-placeholder {
    color: $grey-dark !important;
    opacity: 1 !important;
  }

  textarea::-moz-placeholder {
    color: $grey-dark !important;
    opacity: 1 !important;
  }
  /* FF 4-18 */
  textarea:-moz-placeholder {
    color: $grey-dark !important;
    opacity: 1 !important;
  }
  /* FF 19+ */
  textarea:-ms-input-placeholder {
    color: $grey-dark !important;
    opacity: 1 !important;
  }

  textarea::placeholder {
    color: $grey-dark !important;
    opacity: 1 !important;
  }
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
    &.inner-label {
      .textarea {
      + label {
        opacity: 0;
        z-index: -1;
      }
      &:not(:placeholder-shown),
      &:focus {
        padding: 1.5rem 1rem 0 0.75rem;
        + label {
          opacity: 1;
          z-index: 1;
        }
      }
      &:not(:-ms-input-placeholder) {
        padding: 1.5rem 1rem 0 0.75rem;
        + label {
          opacity: 1;
          z-index: 1;
        }
      }
    }
    }
  }

</style>

