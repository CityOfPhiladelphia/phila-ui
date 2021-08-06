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
    getCursorPosition(event, formattedPhone) {
      if (event.data === null) {
        return event.target.selectionStart;
      }

      if (formattedPhone.length == 2) {
        return 2;
      }

      let initialPos = event.target.selectionStart;
      let newPosition = initialPos;
      let threshold = 0;
      while (/\s|\(|\)|-/gi.test(formattedPhone[newPosition]) && newPosition < 16) {
        newPosition += 1;
        threshold = 1;
      }

      if (initialPos == 9 || initialPos == 4) {
        return newPosition;
      }

      return newPosition + threshold;
    },
    formatAndEmitPhone (value, event) { 
      console.log(event);
      let phone = this.localValue.replace(/\D/g, "").split("");

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
      if (event) {
        const element = event.target;
        const cursorPost = this.getCursorPosition(event, formattedPhone);
        window.requestAnimationFrame(() => {
          element.selectionStart = cursorPost;
          element.selectionEnd = cursorPost;
        });
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
