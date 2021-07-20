import { IMaskDirective } from 'vue-imask';
export default {
  data() {
    return {
      localValue: '',
      mask: {
        mask: '(000) 000 - 0000',
        lazy: true,
      },
      onAccept: this.acceptEvent,
      onComplete: this.completeEvent,
    };
  },
  directives: {
    imask: IMaskDirective,
  },
  watch: {
    value() {
      this.localValue = this.value;
    },
  },
  beforeMount() {
    this.localValue = this.value;
  },
  methods: {
    acceptEvent(e) {
      console.log(e.detail._value);
      console.log(e.detail);
      const maskRef = e.detail;
      this.$emit('input', maskRef._value);
      this.$emit('unmasked-input', maskRef._unmaskedValue);
    },
    completeEvent(e) {
      const maskRef = e.detail;
      this.$emit('complete', maskRef._value);
    },
    onFocus() {
      if (!this.localValue) {
        this.mask.lazy = false;
      }
    },
    onBlur(e) {
      if (!e.target.maskRef._unmaskedValue) {
        this.mask.lazy = true;
      }
    },
  },
};