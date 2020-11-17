<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules !== 'none' ? rules : ''"
    :mode="mode"
    :name="$attrs['name'] || $attrs['placeholder']"
    :custom-messages="errorMessages"
    tag="div"
  >
    <text-area
      v-model="localValue"
      v-bind="{ ...$props, ...$attrs }"
      :error="errors[0]"
    />
  </validation-provider>
</template>
<script>
import Vue from 'vue';
import TextArea from '../TextArea/TextArea.vue';
import { inputMixins } from '@/utils/inputMixins';

export default {
  name: 'VeeTextArea',
  components: {
    TextArea,
  },
  mixins: [
    inputMixins,
  ],
  props: {
    value: {
      type: [ String, Number, Object, Array ],
      default: '',
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