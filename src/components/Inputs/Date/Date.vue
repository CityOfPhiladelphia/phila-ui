<template>
  <div
    class="input-wrap input-textbox"
    :class="classes"
  >
    <div class="field">
      <label
        v-if="!innerLabel"
        class="label"
        :for="`date-${id}`"
      >
        {{ label }}
      </label>
      <div
        class="control is-large"
        :class="inputModifierClasses"
      >
        <input
          :id="`date-${id}`"
          v-imask="mask"
          :placeholder="$attrs.required !== undefined ? `${placeholder}*` : placeholder"
          :value="localValue"
          class="input"
          @accept="onAccept"
          @complete="onComplete"
          @focus="onFocus"
          @blur="onBlur"
        >
        <label
          v-if="innerLabel"
          :for="`date-${id}`"
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
import IMask from 'imask';
import { inputMixins } from '@/utils/inputMixins';
import textBoxMixins  from '@/utils/textBoxMixins';
import maskedElementsMixins  from '@/utils/maskedElementsMixins';

/**
 * Displays a text input
 * @niceName Text Input
 * @group Inputs
 * @position 205
 */
export default {
  name: "Date",
  mixins: [
    inputMixins,
    textBoxMixins,
    maskedElementsMixins,
  ],
  data() {
    return {
      mask: {
        mask: Date,
        pattern: 'M/D/Y',
        blocks: {
          D: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            maxLength: 2,
            placeholderChar: 'D',
          },
          M: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            maxLength: 2,
            placeholderChar: 'M',
          },
          Y: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 9999,
            maxLength: 4,
            placeholderChar: 'Y',
          },
        },
        format: function (date) {
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();

          if (day < 10) {
            day = "0" + day;
          }
          if (month < 10) {
            month = "0" + month;
          }

          return [ month, day, year ].join('/');
        },
        parse: function (str) {
          var monthDayYear = str.split('/');
          return new Date(monthDayYear[2], monthDayYear[0] - 1, monthDayYear[1]);
        },
        override: true,
        lazy: false,
      },
    };
  },
};
</script>

<style lang="scss">
  @import '../../../assets/styles/scss/inputs.scss';
</style>

<style lang="scss" scoped>
  @import '../../../assets/styles/scss/textbox-inputs.scss';
</style>