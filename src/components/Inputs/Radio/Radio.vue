<template>
  <div
    class="input-wrap input-radio"
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
        :id="`rd-group-${id}`"
        :style="`columns: ${numOfColumns} auto`"
        role="radiogroup"
      >
        <div
          v-for="(option, key) in options"
          :key="key"
          class="control"
        >
          <input
            :id="`rd-${key}-${id}`"
            v-model="localValue"
            type="radio"
            role="radio"
            :aria-checked="value === optionValue(option, key)"
            :name="`rd-${key}-${id}`"
            class="is-checkradio"
            :value="optionValue(option, key)"
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
import { inputMixins } from '@/utils/inputMixins';
/**
 * Displays a group of radio buttons
 * @niceName Radio Buttons
 * @group Inputs
 * @position 215
 */
export default {
  name: 'Radio',
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {

    /**
     * The radio buttons options.
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

    /**
    * @ignore
    */
    value: {
      type: null,
      default: '',
    },

    /**
     * The label used for the group of radio buttons
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * The description used for the group of radio buttons
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
     * Use small radio buttons
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
    checkRadioClasses () {
      if (this.small) {
        return `${this.classes} small-checkradio`;
      }
      return this.classes;
    },
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
  },
  watch: {
    value (newValue) {
      this.localValue = newValue;
    },
  },
};
</script>
