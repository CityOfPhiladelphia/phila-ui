<template>
  <div v-if="ready">
    <dropdown-nav>
      <button>
        <span class="icon"><i class="fa fa-globe" /></span>
        <span>{{ selectedLang }}</span>
      </button>
      <ul>
        <li
          v-for="(lang, i) in languages"
          :key="`languages${i}`"
        >
          <a
            href="#"
            @click.prevent="changeLang(lang.language)"
          >{{ lang.title }}</a>
        </li>
      </ul>
    </dropdown-nav>
  </div>
</template>

<script>
import DropdownNav from 'components/DropdownNav/DropdownNav.vue';

export default {
  name: 'LangSelector',
  components: {
    DropdownNav,
  },
  props: {
    languages: {
      type: Array,
      validator: function (languages) {
        const isValid = languages.every(language => language.language && language.title);
        if (!isValid) {
          console.error(`The languages array must contain one or more objects with with
          "language" and "title" keys`);
        }
        return isValid;
      },
      default() {
        return [
          {
            language: "en-US",
            title: "English",
          },
          {
            language: "es",
            title: "Español",
          },
        ];
      },
    },
  },
  data() {
    return { ready: false };
  },
  computed : {
    selectedLang() {
      return this.languages.find(lang => lang.language === this.$i18n.locale).title;
    },
  },
  created() {
    if(this.$i18n) {
      this.ready = true;
    } else {
      console.error("You must import i18n globally for LangSelector");
    }
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('lang', lang);
    },
  },
};
</script>
