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
    errors: {
      type: [ Array, String ],
      default () {
        return '';
      },
    },

  },
  watch: {
    error () {
      this.hasError();
    },
  },
  computed: {
    error () {
      if (Array.isArray(this.errors)) {
        return this.errors[0];
      }
      return this.errors;
    },
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
      let options = this.options;

      if (this.optgroup) {
        options = this.ungrouppedOptions;
      }

      if (Array.isArray(options)) {
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