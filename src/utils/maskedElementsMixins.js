import { IMaskDirective } from 'vue-imask';

export default {
  props: {
    imaskProps: {
      type: Object,
      default () {
        return {
          mask: '',
          lazy: true,
        };
      },
    },
    returnValue: {
      type: String,
      default: 'masked',
    },
  },
  data() {
    return {
      localValue: '',
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
      const maskRef = e.detail;
      if (this.returnValue === 'masked') {
        this.$emit('input', maskRef._value);
      } else if (this.returnValue === 'unmasked') {
        this.$emit('input', maskRef._unmaskedValue);
      }
      this.$emit('unmasked-input', maskRef._unmaskedValue);
    },
    completeEvent(e) {
      const maskRef = e.detail;
      if (this.returnValue === 'masked') {
        this.$emit('input', maskRef._value);
      } else if (this.returnValue === 'unmasked') {
        this.$emit('input', maskRef._unmaskedValue);
      }
      this.$emit('unmasked-input', maskRef._unmaskedValue);
    },
    onFocus() {
      if (!this.localValue) {
        this.imaskProps.lazy = false;
      }
    },
    onBlur(e) {
      if (!e.target.maskRef._unmaskedValue) {
        this.imaskProps.lazy = true;
      }
    },
  },
};
