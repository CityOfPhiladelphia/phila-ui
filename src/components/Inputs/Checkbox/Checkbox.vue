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
            :name="`cb-${key}-${id}`"
            :aria-checked="modelValue.includes(optionValue(option, value))"
            type="checkbox"
            class="is-checkradio"
            role="checkbox"
            v-bind="option.attrs || {}"
            :value="optionValue(option, value)"
            @change="updateModelValue($event, optionValue(option, value))"
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
import { inputMixins } from '@/utils/inputMixins';
/**
 * @group Inputs
 * Displays one or more checkboxes
 */
export default {
  name: 'Checkbox',
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change',
  },
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
  data () {
    return {
      modelValue: [],
    };
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          change: function (event) {
            vm.$emit('change', vm.modelValue);
          },
        }
      );
    },
  },
  methods: {
    updateModelValue (event, value) {
      if (event.target.checked) {
        if (this.options.length === 1) {
          this.modelValue = [ this.$attrs['true-value'] || value ];
        } else {
          this.modelValue.push(value);
        }
      } else {
        if (this.options.length === 1) {
          if (this.$attrs['false-value']) {
            this.modelValue.push(this.$attrs['false-value']);
          } else {
            this.modelValue = [];
          }
        } else {
          this.modelValue.splice(this.modelValue.indexOf(value), 1);
        }
      }
    },
  },
};
</script>

<style lang="scss">
  @import '../../../assets/styles/scss/inputs.scss';
</style>
