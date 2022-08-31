<template>
  <div
    class="input-wrap input-textbox input-date-mask"
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
          :id="`date-mask-${id}`"
          v-imask="dateProps"
          v-bind="$attrs"
          :placeholder="$attrs.required !== undefined && placeholder !== '' && innerLabel ? `${placeholder} *` : placeholder"
          :value="localValue"
          class="input"
          @accept="onAccept"
          @complete="onComplete"
          @focus="onFocus"
          @blur="onBlur"
        >
        <label
          v-if="innerLabel"
          :for="`date-mask-${id}`"
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
import { IMask } from 'vue-imask';

/**
 * Displays a text input with a date mask.
 * @niceName DateMask
 * @group Inputs
 * @position 230
 */
export default {
  name: "DateOfBirth",
  mixins: [ inputMixins, textBoxMixins, maskedElementsMixins ],
  props: {
    /**
     * The input placeholder
     */
    placeholder: {
      type: String,
      default () {
        return 'MM/DD/YYYY';
      },
    },
  },
  data () {
    return {
      dateProps: {},
    };
  },
  created () {
    this.dateProps = {
      ...this.imaskProps,
      mask: Date,
      pattern: 'm{/}d{/}Y',
      autofix: false,
      blocks: {
        d: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 31,
          maxLength: 2,
        },
        m: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2,
        },
        Y: {
          mask: IMask.MaskedRange,
          from: 1900,
          to: 2999,
          maxLength: 4,
        },
      },
      format: function (date) {
        const day = date.getDate().toString();
        const month = (date.getMonth() + 1).toString();
        const year = date.getFullYear();
        return [ month.padStart(2, '0'), day.padStart(2, '0'), year ].join('/');
      },
      parse: function (str) {
        const [ month, day, year ] = str.split('/');
        return new Date(+year, +month - 1, +day);
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/scss/textbox-inputs.scss";
.input-date-mask {
  max-width: 180px;
}
</style>
