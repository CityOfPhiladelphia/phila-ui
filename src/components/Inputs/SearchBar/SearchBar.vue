<template>
  <div class="search-bar">
    <dropdown
      v-model="dropdownValue"
      :options="dropdownOptions"
      @change="$emit('dropdownSelect', dropdownValue);"
    />
    <div id="app-search-box">
      <textbox
        id="app-search"
        v-model="localValue"
        class="is-paddingless"
        :placeholder="textboxPlaceholder"
        :label="textboxLabel"
        v-on="inputListeners"
      />
      <template
        v-if="localValue !== ''"
      >
        <button
          class="button is-secondary"
          @click.prevent="clearSearch"
        >
          <i class="fa fa-times fa-lg lg" />
        </button>
      </template>
    </div>
    <button
      id="app-search-icon"
      class="button"
      @click.prevent="$emit('search');"
    >
      <!-- search -->
      <i class="fa fa-search fa-lg lg" />
    </button>

    <!-- <div
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
    </div> -->
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
      default: () => {
        return [];
      },
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
  computed: {
    searchColumns() {
      let value;
      if (this.localValue == '') {
        value = 'is-7';
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
  mounted() {
    this.dropdownValue = this.dropdownDefault;
  },
  methods: {
    clearSearch() {
      console.log('SearchBar.vue clearSearch is running');
      this.localValue = '';
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
    vertical-align: middle;
    box-shadow: none !important;
    // i {
    //   color: $grey-dark;
    // }
  }

  #app-search-box {
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 220px);
    position: relative;
    button {
      position: absolute;
      top: 50%;
      right: 3px;
      transform: translateY(-50%);
    }
  }

  .search-bar {
    width: 100%;
    font-size: 0;
    .input-wrap {
      padding-left: 0px;
      padding-right: 0px;
    }

    .input-dropdown {
      width: 130px;
      display: inline-block;
      vertical-align: middle;
      .select {
        label + select {
          padding: 0 0 0 0.5rem !important;
        }
      }
    }

  }


</style>
