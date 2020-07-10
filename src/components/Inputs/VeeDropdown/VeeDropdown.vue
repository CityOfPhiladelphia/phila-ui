<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules !== 'none' ? rules : ''"
    :mode="mode"
    :name="$attrs['name'] || $attrs['placeholder']"
    :custom-messages="errorMessages"
    tag="div"
  >
    <dropdown
      v-model="localValue"
      v-bind="{ ...$props, ...$attrs }"
      :error="errors[0]"
      v-on="inputListeners"
    />
  </validation-provider>
</template>
<script>
import Vue from 'vue';
import Dropdown from '../Dropdown/Dropdown.vue';
import { inputMixins } from '../../../utils/inputMixins';

export default {
  name: 'VeeDropdown',
  components: {
    Dropdown,
  },
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: [ Object, Array ],
      default: () => {
        return {};
      },
    },
    numOfColumns: {
      type: [ String, Number ],
      default: 1,
    },
    rules: {
      type: [ String, Object ],
      default () {
        return 'required';
      },
    },
    mode: {
      type: String,
      default: 'passive',
    },
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(localValue) {
        this.$emit('input', localValue);
        this.$emit('change', localValue);
      },
    },
  },
};
</script>
