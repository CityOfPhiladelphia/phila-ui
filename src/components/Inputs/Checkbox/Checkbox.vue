<template>
  <div
    class="input-wrap input-checkbox"
    :class="checkRadioClasses"
  >
    <fieldset>
      <legend>
        <template v-if="label">
          {{ label }}
        </template>
        <template v-else>
          <!-- @slot Alternative label -->
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
          <!-- @slot Alternative description -->
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
            :aria-checked="value.includes(optionValue(option, key))"
            class="is-checkradio"
            role="checkbox"
            v-bind="option.attrs || {}"
            :value="optionValue(option, key)"
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
 * Displays one or more checkboxes
 * @niceName Checkboxes
 * @group Inputs
 * @position 210
 */
export default {
  name: 'Checkbox',
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {
    /**
     * The checkboxes options.
     * @values Array of Strings, Array of Objects, Object
     */
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
    /**
     * The Object key containing the checkbox text. Required when using options as an Array of Objects.
     */
    textKey: {
      type: String,
      default: "",
    },

    /**
     * The Object key containing the checkbox value. Required when using options as an Array of Objects.
     */
    valueKey: {
      type: String,
      default: "",
    },

    value: {
      type: [ Array ],
      default () {
        return [];
      },
    },

    /**
     * The label used for the checkbox or group of checkboxes
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * The description used for the checkbox or group of checkboxes
     */
    desc: {
      type: String,
      default: '',
    },

    /**
     * Splits a group of checkboxes into columns 1 or more columns
     */
    numOfColumns: {
      type: [ String, Number ],
      default: 1,
    },

    /**
     * Use small checkboxes
     */
    small: {
      type: Boolean ,
      default: false,
    },
  },

  data () {
    return {
      localValue: this.value,
    };
  },
  computed: {
    inputListeners: function () {

      delete this.$listeners['input'];

      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          change: function (event) {

            //IE11 needs the change event to be emitted as it does not listen to input
            vm.$emit('change', vm.localValue);

            //VeeValidate needs the input event to be emitted.
            vm.$emit('input', vm.localValue);

          },
        },
      );
    },
    checkRadioClasses () {
      if (this.small) {
        return `${this.classes} small-checkradio`;
      }
      return this.classes;
    },
  },
  watch: {
    value (newValue) {
      this.localValue = newValue;
    },
  },
};
</script>