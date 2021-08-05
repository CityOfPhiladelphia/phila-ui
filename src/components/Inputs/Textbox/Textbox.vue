<template>
  <div
    class="input-wrap input-textbox"
    :class="classes"
  >
    <div class="field">
      <label
        v-if="!innerLabel"
        class="label"
        :for="`tb-${id}`"
      >
        {{ label }}
      </label>
      <div
        class="control is-large"
        :class="inputModifierClasses"
      >
        <input
          :id="`tb-${id}`"
          class="input"
          v-bind="$attrs"
          :placeholder="$attrs.required !== undefined ? `${placeholder}*` : placeholder"
          :type="type"
          :value="value"
          v-on="inputListeners"
        >
        <label
          v-if="innerLabel"
          :for="`tb-${id}`"
        >
          {{ label ? label : placeholder }}
        </label>
        <span
          v-if="icon"
          class="icon is-large is-right input-icon"
        >
          <i :class="icon" />
        </span>
        <div
          v-if="desc"
          class="supplemental-text"
        >
          {{ desc }}
        </div>
        <template v-else>
          <div
            v-if="$slots['desc']"
            class="supplemental-text"
          >
            <!-- @slot Alternative description -->
            <slot name="desc" />
          </div>
        </template>
      </div>
      <template v-if="error">
        <div class="input-error-msg">
          <span class="icon"><i class="fas fa-exclamation-circle" /></span>
          <span>{{ error }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { inputMixins } from '@/utils/inputMixins';
import textBoxMixins  from '@/utils/textBoxMixins';
/**
 * Displays a text input
 * @niceName Text Input
 * @group Inputs
 * @position 205
 */
export default {
  name: "Textbox",
  mixins: [
    inputMixins,
    textBoxMixins,
  ],
  
};
</script>

<style lang="scss">
  @import '../../../assets/styles/scss/inputs.scss';
</style>

<style lang="scss" scoped>
  @import '../../../assets/styles/scss/textbox-inputs.scss';
</style>