<template>
  <div
    class="input-wrap input-text"
    :class="{ required: $attrs.required !== undefined }"
  >
    <input
      :id="id"
      class="input"
      v-bind="$attrs"
      :name="name"
      :aria-labelledby="id"
      :aria-required="$attrs.required !== undefined"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @on="$listeners"
    >
    <label :for="id">{{ placeholder }}</label>
  </div>
</template>
<script>
export default {
  name: "InputText",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => `tx_${Math.random().toString(12).substring(2, 8)}`,
    },
    name: {
      type: String,
      default: 'Field Name',
    },
    value: {
      type: [ String, Number ],
      default: "",
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Insert placeholder here',
    },
  },
};
</script>
<style lang="scss">
@import './styles.scss';
</style>
