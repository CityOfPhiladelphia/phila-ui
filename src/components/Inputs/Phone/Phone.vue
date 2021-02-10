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
        placeholder: "Phone Number",
        label: "Phone Number",
      };
      return {
        ...defaults,
        ...this.$attrs,
      };
    },
    inputListeners: function () {
      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          input: function (value) {
            vm.$emit('input', vm.formatPhone(value));
          },
        },
      );
    },
  },
  mounted () {
    this.localValue = this.value;
  },
  methods: {
    formatPhone (event) {
      if (event.keyCode !== 8) {

        let phone = this.localValue.trim().split("").filter(c => {
          let regex = new RegExp(/\d/);
          return regex.test(c);
        });

        this.localValue = '';
        for (let i=0; i<phone.length;i++) {
          if (i === 0) {
            this.localValue += '(';
          }
          if (i === 3) {
            this.localValue += ') ';
          }
          if (i === 6) {
            this.localValue += ' - ';
          }
          this.localValue += phone[i] || '';
        }
        this.localValue = this.localValue.substring(0, 16);
      }
    },
  },
};
</script>

<style lang="scss">
  @import '../../../assets/styles/scss/inputs.scss';
</style>
