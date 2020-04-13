<template>
  <span
    class="select is-fullwidth"
    :class="{ required: $attrs.required !== undefined }"
  >
    <label>
      <select
        v-bind="$attrs"
        @change="onChange($event)"
      >
        <option
          v-if="defaultOption !== null"
          value=""
        >
          {{ defaultOption }}
        </option>
        <option
          v-for="(option, key) in options"
          :key="key"
          :value="!valueKey ? key : option[valueKey]"
          :selected="isSelected(key, option)"
          :disabled="option['disabled'] ? option['disabled'] : false"
        >
          {{ !textKey ? option : option[textKey] }}
        </option>
      </select>
    </label>
  </span>
</template>
<script>
export default {
  name: 'Dropdown',
  inheritAttrs: false,
  props: {
    value: {
      type: [ Object, String, Boolean, Number ],
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
  methods: {
    isSelected(key, option) {
      if (this.valueKey) {
        return option[this.valueKey] === this.value;
      }
      return key === this.value;
    },
    onChange($event) {
      this.$nextTick(() => {
        this.$emit('input', $event.target.value);
      });
    },
  },
};
</script>
<style lang="scss">
  .select {
    select {
      &:active, &:focus {
        border-width: 2px;
      }
    }
  }
</style>
