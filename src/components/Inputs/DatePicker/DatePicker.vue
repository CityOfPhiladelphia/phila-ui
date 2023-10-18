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
          :value="localValue"
          v-bind="defaultDatePickerProps"
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
    value: {
      type: [ String, Number, Object, Date ],
      default: "",
    },
    datePickerProps: {
      type: Object,
      default: () => ({}),
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
      defaultDatePickerProps: {
        mode: 'date',
        isRange: false,
        timezone: 'America/New_York',
        popover: {
          keepVisibleOnInput: false,
          visibility: 'focus',
        },
      },
    };
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    inputListeners: function () {
      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          input: function (value) {
            vm.$emit('input', value);
          },
        },
      );
    },
  },
  beforeMount () {
    this.defaultDatePickerProps = {
      ...this.defaultDatePickerProps,
      ...this.datePickerProps,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/scss/textbox-inputs.scss";
</style>
