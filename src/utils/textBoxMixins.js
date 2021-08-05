export default {
  inheritAttrs: false,
  props: {
    /**
     * The input label
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * The input description
     */
    desc: {
      type: String,
      default: '',
    },

    /**
     * The input placeholder
     */
    placeholder: {
      type: String,
      default: 'Insert placeholder here',
    },

    /**
     * The input type
     * @values text, number
     */
    type: {
      type: String,
      default: 'text',
    },

    /**
     * The text input value / v-model
     */
    value: {
      type: [ String, Number ],
      default: "",
    },

    /**
     * The input icon. It expects font-awesome icon classes.
     */
    icon: {
      type: String,
      default: '',
    },

    /**
     * Whether a loading indicator should be displayed
     */
    isLoading: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether the label should be displayed inside the input (true) or above it (false).
     */
    innerLabel: {
      type: Boolean,
      default: true,
    },

  },
  computed: {
    inputListeners: function () {
      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value, event);
          },
        },
      );
    },
    inputModifierClasses () {
      let classes = [];
      if (this.isLoading) {
        classes.push('is-loading');
      }
      if (this.icon !== '') {
        classes.push('has-icons-right');
      }
      return classes.join(' ');
    },
  },
};