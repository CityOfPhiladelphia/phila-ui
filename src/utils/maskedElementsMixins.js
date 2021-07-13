import { IMaskDirective } from 'vue-imask';

if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length >= targetLength) {
      return String(this);
    }
    targetLength = targetLength - this.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
    }
    return padString.slice(0, targetLength) + String(this);

  };
}

if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(targetLength,padString) {
    targetLength = targetLength>>0; //floor if number or convert non-number to 0;
    padString = String((typeof padString !== 'undefined' ? padString : ' '));
    if (this.length > targetLength) {
      return String(this);
    }

    targetLength = targetLength-this.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
    }
    return String(this) + padString.slice(0,targetLength);

  };
}

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