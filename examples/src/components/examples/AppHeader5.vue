<template>
  <div>
    <app-header
      app-title="My Application"
      app-subtitle="My application subtitle"
    >
      <lang-selector
        slot="lang-selector-nav"
        :languages="languages"
      />
    </app-header>
    <main>
      Sample text to be translated: <strong>{{ $t("message.hello") }}</strong>
    </main>
  </div>
</template>
<script>
import Vue from 'vue';
import { AppHeader, LangSelector } from '@phila/phila-ui';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en-US",
  messages: {
    "en-US": {
      message: {
        hello: 'Hello',
      },
    },
    "es": {
      message: {
        hello: "Hola",
      },
    },
    "it": {
      message: {
        hello: "Ciao",
      },
    },
    "pt-BR": {
      message: {
        hello: "Olá",
      },
    },
  },
});

export default {
  i18n,
  components: {
    AppHeader,
    LangSelector,
  },
  data () {
    return {
      languages: [
        {
          language: 'en-US',
          title: 'English',
        },
        {
          language: 'es',
          title: 'Spanish',
        },
        {
          language: 'it',
          title: 'Italian',
        },
        {
          language: 'pt-BR',
          title: 'Portuguese (Brazil)',
        },
      ],
    };
  },
};
</script>