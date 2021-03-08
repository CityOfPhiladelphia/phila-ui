<template>
  <div
    class="input-wrap input-phone"
    :class="classes"
  >
    <textbox
      v-model="localValue"
      v-bind="attributes"
      v-on="inputListeners"
    />
  </div>
</template>
<script>
import { inputMixins } from '@/utils/inputMixins';
import Textbox from '@/components/Inputs/Textbox/Textbox.vue';

/**
 * A phone number input
 * @niceName Phone Number
 * @group Inputs
 * @position 230
 */
export default {
  name: 'Phone',
  components: {
    Textbox,
  },
  mixins: [
    inputMixins,
  ],
  inheritAttrs: false,
  props: {

    /**
    * @ignore
    */
    value: {
      type: null,
      default: '',
    },

  },
  data () {
    return {
      localValue: '',
    };
  },
  computed: {
    attributes () {
      const defaults = {
        desc: "Enter numbers only",
        placeholder: "Phone number",
        label: "Phone number",
      };

      return {
        ...defaults,
        ...this.$attrs,
        ...this.$props,
      };
    },
    inputListeners: function () {
      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          input: this.formatAndEmitPhone,
        },
      );
    },
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue != oldValue) {
        this.setValueFromOutside();
      }
    },
  },
  mounted () {
    this.setValueFromOutside();
  },
  methods: {
    setValueFromOutside() {
      this.localValue = this.value;
      this.formatAndEmitPhone();
    },
    formatAndEmitPhone () {
      let phone = this.localValue.trim().split("").filter(c => {
        let regex = new RegExp(/\d/);
        return regex.test(c);
      });

      let formattedPhone = '';
      for (let i=0; i<phone.length;i++) {
        if (i === 0) {
          formattedPhone += '(';
        }
        if (i === 3) {
          formattedPhone += ') ';
        }
        if (i === 6) {
          formattedPhone += ' - ';
        }
        formattedPhone += phone[i] || '';
      }
      this.localValue = formattedPhone.substring(0, 16);
      this.$emit('input', formattedPhone);
    },
  },
};
</script>

<style lang="scss">
  @import '../../../assets/styles/scss/inputs.scss';
</style>
