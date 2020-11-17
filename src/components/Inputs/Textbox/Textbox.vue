<template>
  <div
    class="input-wrap input-textbox"
    :class="classes"
  >
    <div class="field">
      <label
        v-if="!innerLabel"
        class="label"
        :for="`tb-${id}`"
      >
        {{ label }}
      </label>
      <div
        class="control is-large"
        :class="inputModifierClasses"
      >
        <input
          :id="`tb-${id}`"
          class="input"
          v-bind="$attrs"
          :placeholder="$attrs.required !== undefined ? `${placeholder}*` : placeholder"
          :type="type"
          :value="value"
          v-on="inputListeners"
        >
        <label
          v-if="innerLabel"
          :for="`tb-${id}`"
        >
          {{ label ? label : placeholder }}
        </label>
        <span
          v-if="icon"
          class="icon is-large is-right input-icon"
        >
          <i :class="icon" />
        </span>
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
      <template v-if="error">
        <div class="input-error-msg">
          <span class="icon"><i class="fas fa-exclamation-circle" /></span>
          <span>{{ error }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
/**
 * Equivalent to the html ```<input type="text">``` tag
 */

import { inputMixins } from '@/utils/inputMixins';

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
    desc: {
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
    icon: {
      type: String,
      default: '',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    innerLabel: {
      type: Boolean,
      default: true,
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
    inputModifierClasses () {
      let classes = [];
      if (this.isLoading) {
        classes.push('is-loading');
      }
      if (this.icon !== '') {
        classes.push('has-icons-right');
      }
      return classes.join(' ');
    },
  },
};
</script>

<style lang="scss">
  @import '../../../assets/styles/scss/inputs.scss';
</style>

<style lang="scss" scoped>
  .input-textbox {
    .input {
      height: 3.5rem;
    }
    &.inner-label {
      .input {
        + label {
          opacity: 0;
        }
        &:not(:placeholder-shown),
        &:focus {
          padding: 1rem 2.2rem 0 0.75rem;
          + label {
            opacity: 1;
          }
        }
      }
      .input:not(:-ms-input-placeholder) {
        padding: 1rem 2.2rem 0 0.75rem;
        + label {
          opacity: 1;
        }
      }
    }
  }
</style>