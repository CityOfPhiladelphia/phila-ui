<template>
  <div
    class="input-wrap input-checkbox"
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
      <div
        v-if="desc"
        class="is-field-info"
      >
        {{ desc }}
      </div>
      <template v-else>
        <div
          v-if="$slots['desc']"
          class="is-field-info"
        >
          <slot name="desc" />
        </div>
      </template>
      <div
        :id="`cb-group-${id}`"
        :style="`columns: ${numOfColumns} auto`"
      >
        <div
          v-for="(option, key) in options"
          :key="`k-${key}`"
          class="control"
        >
          <input
            :id="`cb-${key}-${id}`"
            v-model="localValue"
            :name="`cb-${key}-${id}`"
            type="checkbox"
            class="is-checkradio is-info"
            :class="localValue.includes(optionValue(option, key)) ? 'has-background-color' : ''"
            :value="optionValue(option, key)"
            :true-value="optionValue(option, key)"
            :checked="localValue.includes(optionValue(option, key))"
            v-bind="option.attrs || {}"
            v-on="inputListeners"
          >
          <label
            :for="`cb-${key}-${id}`"
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
  name: 'Checkbox',
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
      type: Array,
      default () {
        return [];
      },
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
            vm.$emit('input', vm.localValue);
          },
        }
      );
    },
    localValue: {
      get() {
        return this.value;
      },
      set(localValue) {
        this.$emit('input', localValue);
      },
    },
  },
};
</script>

<style lang="scss">
  @import '../../../styles/inputs.scss';
</style>
