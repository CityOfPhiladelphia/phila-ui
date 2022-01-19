<template>
  <div class="input-wrap input-textbox" :class="classes">
    <div class="field">
      <label v-if="!innerLabel" class="label" :for="`phone-${id}`">
        {{ label }}
      </label>
      <div class="control is-large" :class="inputModifierClasses">
        <input
          :id="`phone-${id}`"
          v-imask="mask"
          :placeholder="
            $attrs.required !== undefined && placeholder !== ''
              ? `${placeholder} *`
              : placeholder
          "
          :value="localValue"
          class="input"
          @accept="onAccept"
          @complete="onComplete"
          @focus="onFocus"
          @blur="onBlur"
        />
        <label v-if="innerLabel" :for="`phone-${id}`">
          {{ label ? label : placeholder }}
        </label>
        <span v-if="icon" class="icon is-large is-right input-icon">
          <i :class="icon" />
        </span>
        <div v-if="desc" class="supplemental-text">
          {{ desc }}
        </div>
        <template v-else>
          <div v-if="$slots['desc']" class="supplemental-text">
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
import { inputMixins } from "@/utils/inputMixins";
import textBoxMixins from "@/utils/textBoxMixins";
import maskedElementsMixins from "@/utils/maskedElementsMixins";

/**
 * Displays a phone number input. Currently this input is compatible with US numbers only.
 * @niceName Phone
 * @group Inputs
 * @position 230
 * @badge next
 */
export default {
  name: "Phone",
  mixins: [inputMixins, textBoxMixins, maskedElementsMixins],
  props: {
    /**
     * Forces the phone input box to be at a specific width.
     */
    forceInputBoxSize: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/scss/textbox-inputs.scss";

.input-width {
  max-width: 220px;
}
</style>