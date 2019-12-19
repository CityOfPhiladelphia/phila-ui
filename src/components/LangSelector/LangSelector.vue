<template>
  <div class="control-container">
    <div class="control has-icons-left">
      <div class="select">
        <select
          aria-label="language"
          @change="onChange($event)"
        >
          <option
            v-for="(lang, i) in languages"
            :key="`languages${i}`"
            :value="lang.language"
            :selected="lang.language === selectedLang"
          >
            {{ lang.title }}
          </option>
        </select>
      </div>
      <span class="icon is-left">
        <i class="fas fa-globe fa-lg" />
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LangSelector',
  props: {
    languages: {
      type: [ Array ],
      default() {
        return [{ language: "En", title: "English" }];
      },
    },
  },
  data() {
    return {ready: false};
  },
  computed : {
    selectedLang() {
      return this.$i18n.locale;
    },
  },
  created() {
    if(this.$i18n) {
      this.ready = true;
    } else {
      console.log("You must import i18n globally for LangSelector");
    }
  },
  methods: {
    onChange(event) {
      this.$i18n.locale = event.target.value;
      localStorage.setItem('lang', event.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "node_modules/bulma/bulma.sass";
@media screen and (max-width: $tablet) {
 .control div.select {
    select {
      color: transparent;
      padding: 0;
      // display: none !important;
      border-color: transparent;
    }
  }

  .control-container .control .icon {
    margin-right: 0 !important;
    left: unset !important;
    right: 10px;
  }

  .control .select:not(.is-multiple):not(.is-loading)::after  {
    border-color: transparent !important;
  }

}
.select {
  padding-right: 5px;
}

.control-container {
    display: inline-flex;
    position: absolute;
    right: 0;
    top: 12px;
}

.select select, .fa-globe {
  background-color: transparent;
  opacity: 1.0;
  border-color:#fff;
  color: #fff;
  option {
    color: #363636;
    width: 10px;
  }
}

.select:not(.is-multiple):not(.is-loading)::after  {
  border-color: #fff !important;
}

</style>
