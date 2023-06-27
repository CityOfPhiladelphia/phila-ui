<template>
  <div
    class="input-wrap input-checkbox"
    :class="checkRadioClasses"
  >
    <fieldset>
      <template v-if="error">
        <div class="input-error-msg">
          <span class="icon"><i class="fas fa-exclamation-circle" /></span>
          <span>{{ error }}</span>
        </div>
      </template>
      <template v-else>
        <div
          v-if="$slots['desc']"
          class="is-field-info"
        >
          <!-- @slot Alternative description -->
          <slot name="desc" />
        </div>
      </template>
      <div :id="`cb-group-${id}`">
        <div class="control">
          <input
            :id="`compliance-cb-${id}`"
            v-model="localValue"
            :name="`compliance-cb-${id}`"
            type="checkbox"
            :aria-checked="localValue"
            class="is-checkradio"
            role="checkbox"
            v-bind="$attrs"
            :value="localValue"
            v-on="inputListeners"
          >
          <label
            :for="`compliance-cb-${id}`"
          >
            <template v-if="label">
              {{ label }}
            </template>
            <template v-else>
              <!-- @slot Alternative label -->
              <slot name="label" />
            </template>
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

    value: {
      type: Boolean,
      default: false,
    },

    /**
     * The label used for the checkbox or group of checkboxes
     */
    label: {
      type: String,
      default: '',
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
