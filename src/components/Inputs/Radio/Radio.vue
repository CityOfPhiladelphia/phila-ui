<template>
  <div
    class="input-wrap input-radio"
    :class="classes"
  >
    <fieldset>
      <legend>
        <template v-if="label">
          {{ label }}
        </template>
        <template v-else>
          <slot name="label" />
        </template>
      </legend>
      <template v-if="error">
        <div class="input-error-msg">
          <span class="icon"><i class="fas fa-exclamation-circle" /></span>
          <span>{{ error }}</span>
        </div>
      </template>
      <dic
        v-if="desc"
        class="is-field-info"
      >
        {{ desc }}
      </dic>
      <template v-else>
        <div
          v-if="$slots['desc']"
          class="is-field-info"
        >
          <slot name="desc" />
        </div>
      </template>
      <div
        :id="`rd-group-${id}`"
        :style="`columns: ${numOfColumns} auto`"
      >
        <div
          v-for="(option, key) in options"
          :key="key"
          class="control"
        >
          <input
            :id="`rd-${key}-${id}`"
            type="radio"
            :name="`rd-${key}-${id}`"
            class="is-checkradio is-info"
            :class="value == optionValue(option, key) ? 'has-background-color' : ''"
            :value="optionValue(option, key)"
            :true-value="optionValue(option, key)"
            :checked="value == optionValue(option, key)"
            v-bind="option.attrs || {}"
            v-on="inputListeners"
          >
          <label
            :for="`rd-${key}-${id}`"
          >
            {{ !textKey ? option : option[textKey] }}
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
import { inputMixins } from '../../../utils/inputMixins';
export default {
  name: 'Radio',
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {
    options: {
      type: [ Object, Array ],
      default: () => {
        return {
          'option-1': 'Option 1',
          'option-2': 'Option 2',
          'option-3': 'Option 3',
        };
      },
    },
    textKey: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: '',
    },
    valueKey: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    numOfColumns: {
      type: [ String, Number ],
      default: 1,
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

<style lang="scss">
  @import "../../../styles/inputs.scss";
</style>