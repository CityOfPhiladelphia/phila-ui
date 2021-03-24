<template>
  <div class="search-bar columns is-vcentered is-gapless is-mobile">
    <div
      class="column is-4 is-paddingless is-marginless"
    >
      <dropdown
        :options="dropdownOptions"
        v-model="dropdownValue"
        @change="$emit('dropdownSelect', dropdownValue);"
      >
      <!-- :value="dropdownValue" -->
      </dropdown>
    </div>
    <div
      :class="'column is-paddingless is-marginless '+ searchColumns"
    >
    <!-- class="column is-10 is-paddingless is-marginless" -->
      <textbox
        id="app-search"
        v-model="localValue"
        class="is-paddingless"
        :placeholder="textboxPlaceholder"
        :label="textboxLabel"
        v-on="inputListeners"
      />
    </div>

    <div
      v-if="localValue !== ''"
      class="column is-paddingless is-marginless"
    >
      <button
        id="app-search-icon"
        class="button"
        @click.prevent="clearSearch"
      >
        <i class="fa fa-times fa-lg lg" />
      </button>
    </div>

    <div
      class="column is-paddingless is-marginless"
    >
      <button
        id="app-search-icon"
        class="button"
        @click.prevent="$emit('search');"
      >
        <!-- search -->
        <i class="fa fa-search fa-lg lg" />
      </button>
    </div>
  </div>
</template>
<script>

// import NavLink from 'components/NavLink/NavLink.vue';
import Textbox from 'components/Inputs/Textbox/Textbox.vue';
import Dropdown from 'components/Inputs/Dropdown/Dropdown.vue';

export default {
  components: {
    Textbox,
    Dropdown,
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
    dropdownOptions: {
      type: Array,
      default: [],
    },
    dropdownDefault: {
      type: String,
      default: '',
    },
    textboxPlaceholder: {
      type: String,
      default: '',
    },
    textboxLabel: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      localValue: '',
      dropdownValue: '',
    };
  },
  mounted() {
    this.dropdownValue = this.dropdownDefault;
  },
  computed: {
    searchColumns() {
      let value;
      if (this.localValue == '') {
        value = 'is-6';
      } else {
        value = 'is-4';
      }
      return value;
    },
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
  methods: {
    clearSearch() {
      console.log('SearchBar.vue clearSearch is running');
      this.localValue = '';
    }
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

  .search-bar {

    .input-wrap {
      padding-left: 0px;
      padding-right: 0px;
    }

    .input-dropdown {
      .select {
        label + select {
          padding: 0 0 0 0.5rem !important;
        }
      }
    }

  }


</style>
