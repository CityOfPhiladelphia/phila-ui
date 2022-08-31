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
        <v-date-picker
          :value="value"
          v-bind="calOptions"
          v-on="inputListeners"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input
              :id="`date-picker-${id}`"
              class="input"
              v-bind="$attrs"
              icon="fa fa-calendar-alt"
              :placeholder="$attrs.required !== undefined && placeholder !== '' && innerLabel ? `${placeholder} *` : placeholder"
              :type="type"
              :value="inputValue"
              v-on="inputEvents"
            >
            <label
              v-if="innerLabel"
              :for="`date-picker-${id}`"
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
          </template>
        </v-date-picker>
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
import { DatePicker } from 'v-calendar';
import 'v-calendar/src/styles/base.css';

/**
 * Displays an input field with a date picker.
 * @niceName DatePicker
 * @group Inputs
 * @position 230
 */
export default {
  name: "DatePicker",
  components: {
    VDatePicker: DatePicker,
  },
  mixins: [ inputMixins, textBoxMixins ],
  props: {
    vCalendarProps: {
      type: Object,
      default () {
        return {};
      },
    },
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
      calOptions: {
        mode: 'date',
        isRange: false,
        popover: {
          keepVisibleOnInput: false,
          visibility: 'focus',
        },
      },
    };
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          input: function (date) {
            const dateFromStr = new Date(date);
            let day = dateFromStr.getDate();
            let month = dateFromStr.getMonth() + 1;
            if (month.toString().length === 1) {
              month = `0${month}`;
            }
            if (day.toString().length === 1) {
              day = `0${day}`;
            }

            const year = dateFromStr.getFullYear();
            const outputDate = `${year}-${month}-${day}`;
            vm.$emit('input', outputDate);
          },
        },
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/scss/textbox-inputs.scss";
.input-date-mask {
  max-width: 180px;
}
</style>
