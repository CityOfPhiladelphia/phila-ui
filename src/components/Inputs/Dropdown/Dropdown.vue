<template>
  <div
    class="input-wrap input-dropdown"
    :class="classes"
  >
    <div
      class="select is-fullwidth"
    >
      <label
        v-if="localSelected !== ''"
        :for="`dd-${id}`"
      >
        {{ label ? label : placeholder }}
      </label>
      <select
        :id="`dd-${id}`"
        v-model="localSelected"
        v-bind="$attrs"
        @change="onChange($event)"
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
import { inputMixins } from '../../../utils/inputMixins';
export default {
  name: 'Dropdown',
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    options: {
      type: [ Object, Array ],
      default: () => {
        return {
          'option-1': 'Option 1',
        };
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    textKey: {
      type: String,
      default: "",
    },
    value: {
      type: [ Object, String, Boolean, Number ],
      default: '',
    },
    valueKey: {
      type: String,
      default: "",
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
          change: vm.onChange,
        }
      );
    },
  },
  methods: {
    isSelected (key, option) {
      if (this.valueKey) {
        return option[this.valueKey] === this.value;
      }
      return key === this.value;
    },
    onChange ($event) {
      this.$nextTick(() => {
        this.$emit('change', $event.target.value);
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../../styles/inputs.scss';
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
      padding: 1rem 1rem 0 1rem;
    }
  }
}

</style>
