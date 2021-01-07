<template>
  <div>
    <app-header
      app-title="My Application"
      app-subtitle="My application subtitle"
      :branding-image="brandingImage"
      :branding-link="brandingLink"
      :is-stikcy="true"
      :is-fluid="false"
    >
      <tabs-nav slot="tabs-nav">
        <a
          href="#"
          class="is-active"
        >Tab 1</a>
        <a href="#">Tab 2</a>
        <a href="#">Tab 3</a>
      </tabs-nav>
      <dropdown-nav slot="dropdown-nav">
        <button>
          <span class="icon">
            <i class="fa fa-user-circle" />
          </span>
          <span>Account</span>
        </button>
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </dropdown-nav>
      <mobile-nav slot="mobile-nav">
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Nest Link 3</a>
            <ul>
              <li>
                <a href="#">Link 3.1 Level 2</a>
              </li>
              <li>
                <a href="#">Link 3.2 Level 2</a>
              </li>
              <li>
                <a href="#">Link 3.3 Level 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Nested Link 4</a>
            <ul>
              <li>
                <a href="#">Link 4.1 Level 2</a>
              </li>
              <li>
                <a href="#">Nested Link 4.2 Level 2</a>
                <ul>
                  <li>
                    <a href="#">Link 4.2.1 Level 3</a>
                  </li>
                  <li>
                    <a href="#">Link 4.2.2 Level 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </mobile-nav>
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
import { AppHeader, DropdownNav, TabsNav, LangSelector } from '@phila/phila-ui';
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
    DropdownNav,
    TabsNav,
  },
  data () {
    return {
      brandingImage: {
        src: require('@/assets/sample-logo.png'),
        alt: "City of Philadelphia logo",
        width: "200px",
      },
      brandingLink: {
        href: "https://www.phila.gov",
        target: "_blank",
      },
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