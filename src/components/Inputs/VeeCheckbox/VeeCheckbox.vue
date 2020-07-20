<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules !== 'none' ? rules : ''"
    :mode="mode"
    :custom-messages="errorMessages"
    :name="$attrs['name'] || $attrs['placeholder']"
    tag="div"
  >
    <checkbox
      v-model="localValue"
      v-bind="{ ...$props, ...$attrs }"
      :error="errors[0]"
    >
      <template
        v-for="(index, name) in $slots"
        v-slot:[name]
      >
        <slot :name="name" />
      </template>
    </checkbox>
  </validation-provider>
</template>
<script>
import Vue from 'vue';
import Checkbox from '../Checkbox/Checkbox.vue';
import { inputMixins } from '../../../utils/inputMixins';

export default {
  name: 'VeeCheckbox',
  components: {
    Checkbox,
  },
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {
    value: {
      type: [ String, Number, Object, Array ],
      default: '',
    },
    options: {
      type: [ Array, Object ],
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
      },
    },
  },
};
</script>
