<template>
  <div
    class="input-wrap input-textbox input-zip-code"
    :class="classes"
  >
    <div class="field">
      <label
        v-if="!innerLabel"
        class="label"
        :for="`phone-${id}`"
      >
        {{ label }}
      </label>
      <div
        class="control is-large"
        :class="inputModifierClasses"
      >
        <input
          :id="`zip-code-${id}`"
          v-imask="zipCodeProps"
          v-bind="$attrs"
          :placeholder="placeholder"
          :value="localValue"
          class="input"
          @accept="onAccept"
          @complete="onComplete"
          @focus="onFocus"
          @blur="onBlur"
        >
        <label
          v-if="innerLabel"
          :for="`masked-input-${id}`"
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
import { inputMixins } from "@/utils/inputMixins";
import textBoxMixins from "@/utils/textBoxMixins";
import maskedElementsMixins from "@/utils/maskedElementsMixins";

/**
 * Displays a ZipCode masked input.
 * @niceName ZipCode
 * @group Inputs
 * @position 230
 */
export default {
  name: "ZipCode",
  mixins: [ inputMixins, textBoxMixins, maskedElementsMixins ],
  props: {
    /**
     * The input placeholder
     */
    placeholder: {
      type: String,
      default () {
        return 'XXXXX-XXXX';
      },
    },
  },
  data () {
    return {
      zipCodeProps: {},
    };
  },
  created () {
    this.zipCodeProps = {
      ...this.imaskProps,
      mask: '00000[-0000]',
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/scss/textbox-inputs.scss";

.input-zip-code {
  max-width: 180px;
}
</style>
