<template>
  <div
    class="input-wrap input-select select"
    :class="{ required: $attrs.required !== undefined }"
  >
    <select
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    >
      <option value="">
        {{ defaultOption }}
      </option>
      <option
        v-for="(option, key) in options"
        :key="key"
        :value="!valueKey ? key : option[valueKey]"
        :selected="(value === key)"
      >
        {{ !textKey ? option : option[textKey] }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'InputSelect',
  inheritAttrs: false,
  props: {
    value: {
      type: [ Object, String, Boolean, Number ],
      default: '',
    },
    options: {
      type: [ Object ],
      default: () => { 
        return { 
          'option-1': 'Option 1', 
          'option-2': 'Option 2', 
          'option-3': 'Option 3',
        };
      },
    },
    defaultOption: {
      type: String,
      default: "Default option",
    },
    valueKey: {
      type: String,
      default: "",
    },
    textKey: {
      type: String,
      default: "",
    },
  },
  mounted() {
  },
};
</script>
<style lang="scss">
@import './styles.scss';
</style>
