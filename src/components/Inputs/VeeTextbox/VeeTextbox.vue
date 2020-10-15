<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules !== 'none' ? rules : ''"
    :mode="mode"
    :name="$attrs['name'] || `vp-${id}`"
    :custom-messages="errorMessages"
    tag="div"
  >
    <textbox
      v-model="localValue"
      v-bind="{ ...$attrs, ...$props }"
      :error="errors[0]"
      v-on="$listeners"
    />
  </validation-provider>
</template>
<script>
import Vue from 'vue';
import Textbox from '../Textbox/Textbox.vue';
import { inputMixins } from '../../../utils/inputMixins';

export default {
  name: 'VeeTextbox',
  components: {
    Textbox,
  },
  mixins: [
    inputMixins,
  ],
  props: {
    value: {
      type: [ String, Number ],
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
      default: 'eager',
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
