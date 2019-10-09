<template>
  <div class="input-wrap input-radio">
    <label 
      :for="id"
      class="radio"
    >
      <input
        :id="id"
        v-bind="$attrs"
        :checked="shouldBeChecked"
        :value="value"
        type="radio"
        @change="updateInput"
      >
      <slot />
    </label>
  </div>
</template>
<script>
export default {
  name: "InputRadio",
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    id: {
      type: String,
      default: () => `rb_${Math.random().toString(12).substring(2, 8)}`,
    },
    value: {
      type: [ String, Number, Boolean ],
      default: "",
    },
    modelValue: {
      type: [ String, Number, Boolean, Array ],
      default: "",
    },
  },
  computed: {
    shouldBeChecked() {
      return this.modelValue === this.value;
    },
  },
  methods: {
    updateInput() {
      this.$emit("change", this.value);
    },
    uniqid() {},
  },
};
</script>
<style lang="scss">
  @import './styles.scss';
</style>
