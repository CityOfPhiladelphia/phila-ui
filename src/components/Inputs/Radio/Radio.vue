<template>
  <div class="input-wrap input-radio">
    <input
      :id="id"
      class="is-checkradio is-info"
      v-bind="$attrs"
      :checked="shouldBeChecked"
      :value="value"
      type="radio"
      @change="updateInput"
    >
    <label
      :for="id"
      class="radio"
    >
      <slot />
    </label>
  </div>
</template>
<script>
export default {
  name: "Radio",
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
      required: true,
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
  // @import '../base.scss';
  @import '../../../styles/inputs.scss';
</style>
