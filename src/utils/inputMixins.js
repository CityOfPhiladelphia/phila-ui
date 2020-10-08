export const inputMixins = {
  props: {
    /**
     * Random id is generated if none provided
     */
    id: {
      type: String,
      default: () => `ta_${Math.random().toString(12).substring(2, 8)}`,
    },
    /**
     * Error message
     */
    error: {
      type: String,
      default: null,
    },
    /**
     * VeeValidate custom errror messages
     */
    errorMessages: {
      type: Object,
      default () {
        return {};
      },
    },
  },
  watch: {
    error () {
      this.hasError();
    },
  },
  computed: {
    classes () {
      let classes = [];
      if (this.$attrs.required !== undefined) {
        classes.push('required');
      }
      if (this.error) {
        classes.push('has-error');
      }
      if (this.innerLabel) {
        classes.push('inner-label');
      }
      return classes.join(" ");
    },
  },
  mounted () {
    this.hasError();
  },
  methods: {
    hasError () {
      if (this.error) {
        this.$parent.$emit('hasError', { [this.id]: this.error !== '' ? true : false });
      }
    },
    optionValue (option, key) {
      if (Array.isArray(this.options)) {
        if (typeof option === 'string') {
          return option;
        }
        if (typeof option === 'object') {
          return option[this.valueKey];
        }
      } else {
        return key;
      }
    },
  },
};