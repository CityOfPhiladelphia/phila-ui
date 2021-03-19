<template>
  <div class="columns is-vcentered is-gapless is-mobile">
    <div
      class="column is-10 is-paddingless is-marginless"
    >
      <textbox
        id="app-search"
        v-model="localValue"
        class="is-paddingless"
        placeholder="Search an address"
        label="Search an address in Philadelphia"
        v-on="inputListeners"
      />
    </div>

    <div
      class="column is-paddingless is-marginless"
    >
      <button
        id="app-search-icon"
        class="button"
        @click.prevent="$emit('search');"
      >
        <i class="fa fa-search fa-lg lg" />
      </button>
    </div>
  </div>
</template>
<script>

// import NavLink from 'components/NavLink/NavLink.vue';
import Textbox from 'components/Inputs/Textbox/Textbox.vue';

export default {
  components: {
    Textbox,
    // Navlink,
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    func: {
      type: Function,
      default: null,
    },
  },
  data () {
    return {
      localValue: '',
    };
  },
  computed: {
    inputListeners: function () {

      delete this.$listeners['input'];

      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          input: function () {
            vm.$emit('input', vm.localValue);
          },
          change: function () {
            vm.$emit('change', vm.localValue);
          },
        },
      );
    },
  },
  watch: {
    value (value) {
      this.localValue = value;
    },
  },
};

</script>
<style lang="scss">
  #app-search-icon {
    height: 3.5rem;
    border: 0;
    background-color: $electric-blue;
    color: $grey-dark;
    // i {
    //   color: $grey-dark;
    // }
  }
</style>