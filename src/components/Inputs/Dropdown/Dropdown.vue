<template>
  <div
    class="input-wrap input-dropdown"
    :class="classes"
  >
    <div class="field">
      <label
        v-if="!innerLabel"
        class="label"
        :for="`dd-${id}`"
      >
        {{ label }}
      </label>
      <div
        class="control is-large"
        :class="inputModifierClasses"
      >
        <div
          class="select is-fullwidth"
        >
          <label
            v-if="localSelected !== '' && innerLabel"
            :for="`dd-${id}`"
          >
            {{ label ? label : placeholder }}
          </label>
          <select
            :id="`dd-${id}`"
            v-model="localSelected"
            :aria-label="label ? label : placeholder"
            v-bind="$attrs"
            v-on="inputListeners"
          >
            <option value="">
              {{ this.$attrs.required !== undefined ? `${placeholder}*` : placeholder }}
            </option>
            <option
              v-for="(option, key) in options"
              :key="key"
              :value="optionValue(option, key)"
              :selected="isSelected(key, option)"
              :disabled="option['disabled'] ? option['disabled'] : false"
            >
              {{ !textKey ? option : option[textKey] }}
            </option>
          </select>
          <span
            v-if="icon"
            class="icon is-large is-left input-icon"
          >
            <i :class="icon" />
          </span>
        </div>
      </div>
    </div>
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
        <!-- @slot Alternative description -->
        <slot name="desc" />
      </div>
    </template>
    <template v-if="error">
      <div class="input-error-msg">
        <span class="icon"><i class="fas fa-exclamation-circle" /></span>
        <span>{{ error }}</span>
      </div>
    </template>
  </div>
</template>
<script>
import { inputMixins } from 'utils/inputMixins';
/**
 * Styled select input
 * @niceName Dropdown / Select
 * @group Inputs
 * @position 220
 */
export default {
  name: 'Dropdown',
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {

    /**
     * The dropdown options.
     * @values Array of Strings, Array of Objects, Object
     */
    options: {
      type: [ Object, Array ],
      default: () => {
        return {
          'option-1': 'Option 1',
        };
      },
    },

    /**
     * The dropdown label
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * The dropdown placeholder
     */
    placeholder: {
      type: String,
      default: '',
    },

    /**
     * The Object key containing the dropdown text. Required when using options as an Array of Objects.
     */
    textKey: {
      type: String,
      default: "",
    },

    /**
     * The dropdown value / v-model
     */
    value: {
      type: String,
      default: '',
    },

    /**
     * The Object key containing the dropdown value. Required when using options as an Array of Objects.
     */
    valueKey: {
      type: String,
      default: "",
    },

    /**
     * The dropdown description
     */
    desc: {
      type: String,
      default: '',
    },

    /**
     * The dropdown icon. It expects font-awesome icon classes.
     */
    icon: {
      type: String,
      default: '',
    },

    /**
     * Whether the label should be displayed inside the dropdown (true) or above it (false).
     */
    innerLabel: {
      type: Boolean,
      default: true,
    },

  },
  data () {
    return {
      localSelected: '',
    };
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      delete this.$listeners.input;
      return Object.assign(
        {},
        this.$listeners,
        {
          change: function (event) {
            //Input event is necessary for v-model
            vm.$emit('input', vm.localSelected);
            //Change event is necessary for everything else
            vm.$emit('change', vm.localSelected);
          },
        }
      );
    },
    inputModifierClasses () {
      let classes = [];
      if (this.icon !== '') {
        classes.push('has-icons-left');
      }
      return classes.join(' ');
    },
  },
  watch: {
    value (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.localSelected = this.value;
      }
    },
  },
  mounted () {
    this.localSelected = this.value;
  },
  methods: {
    isSelected (key, option) {
      let dropdownOptionValue = this.optionValue(option, key);

      if (dropdownOptionValue === this.value) {
        this.localSelected = this.value;
      }
    },
  },
};
</script>

<style lang="scss">
@import '../../../assets/styles/scss/inputs.scss';
</style>

<style lang="scss" scoped>

.input-dropdown {
  .select {
    height: 3.5rem;
    label {
      top: 0;
      left: 0;
      opacity: 1;
    }
    select {
      height: 100%;
      width: 100%;
    }
    label + select {
      padding: 1rem 1rem 0 0.5rem;
    }
  }
}

</style>
