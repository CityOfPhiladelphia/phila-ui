<template>
  <div>
    <app-header v-bind="appHeader">
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
          <span>My Profile</span>
        </button>
        <ul>
          <li>
            <a href="#">Action 1</a>
            <a href="#">Action 2</a>
          </li>
        </ul>
      </dropdown-nav>
      <lang-selector
        slot="lang-selector-nav"
        :languages="languages"
      />
      <mobile-nav slot="mobile-nav">
        <ul>
          <li>
            <a href="#"> Link 1</a>
          </li>
          <li>
            <a href="#"> Link 2</a>
          </li>
          <li>
            <a href="#"> Link 3</a>
            <ul>
              <li>
                <a href="#"> Link 3.1</a>
              </li>
              <li>
                <a href="#"> Link 3.2</a>
              </li>
              <li>
                <a href="#"> Link 3.3</a>
                <ul>
                  <li>
                    <a href="#"> Link 3.3.1</a>
                  </li>
                  <li>
                    <a href="#"> Link 3.3.2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </mobile-nav>
    </app-header>
    <main class="container">
      <div class="content">
        <div class="columns is-multiline">
          <div class="column is-full">
            <h2 class="title is-1">
              My page title
            </h2>
            <div class="subtitle is-1">
              My page subtitle
            </div>
            <br>
            <p>Sample text to be translated: <strong>{{ $t("message.hello") }}</strong></p>
          </div>
          <div class="column is-half">
            <input-form
              title="A basic form with inner-labels"
              desc="Some more informatiom about this form"
            >
              <textbox
                v-model="textboxValue"
                placeholder="My textbox value"
                desc="Extra info about this field"
              />
              <checkbox
                v-model="checkboxValue"
                :options="checkboxes"
                label="My group of checkboxes"
                desc="Extra info about these checkboxes"
              />
              <radio
                v-model="radioValue"
                :options="radioButtons"
                label="My group of radio buttons"
                desc="Extra info about these radio buttons"
              />
              <dropdown
                v-model="dropdownValue"
                placeholder="My dropdown"
                :options="dropdownOptions"
              />
              <text-area
                v-model="textAreaValue"
                placeholder="My textArea"
                desc="Extra info about this field"
              />
            </input-form>
          </div>
          <div class="column is-half">
            <input-form
              title="A basic form with outter-labels and errors"
              desc="Some more informatiom about this form"
            >
              <textbox
                v-model="textboxValue"
                label="My textbox label"
                placeholder="My textbox placeholder"
                desc="Extra info about this field"
                :inner-label="false"
                errors="This field is required"
              />
              <checkbox
                v-model="checkboxValue"
                :options="checkboxes"
                label="My checkboxes label"
                desc="Extra info about these checkboxes"
                errors="Select at least one option"
                required
                :inner-label="false"
              />
              <radio
                v-model="radioValue"
                :options="radioButtons"
                label="My radio buttons label"
                desc="Extra info about these radio buttons"
                errors="Select at least one option"
                required
                :inner-label="false"
              />
              <dropdown
                v-model="dropdownValue"
                label="My dropdown label"
                placeholder="My dropdown placeholder"
                :options="dropdownOptions"
                errors="This field is required"
                required
                :inner-label="false"
              />
              <text-area
                v-model="textAreaValue"
                label="My textarea label"
                placeholder="My textarea placeholder"
                desc="Extra info about this field"
                errors="This field is required"
                required
                :inner-label="false"
              />
            </input-form>
          </div>
          <div class="column is-half">
            <h3 class="is-size-2">
              Callout component
            </h3>
            <callout message="This is the default message" />
            <callout
              message="This is a info message"
              type="info"
            />
            <callout
              message="This is a success message"
              type="success"
            />
            <callout
              message="This is a warning message"
              type="warning"
            />
            <callout
              message="This is a danger message"
              type="danger"
            />
          </div>
          <div class="column is-half">
            <h3 class="is-size-2">
              Buttons
            </h3>
            <div class="buttons">
              <button class="button is-primary is-small">
                Primary Small
              </button>
              <button class="button is-primary">
                Primary Default
              </button>
              <button class="button is-primary is-large">
                Primary Large
              </button>
            </div>
            <div class="buttons">
              <button class="button is-secondary is-small">
                Secondary Small
              </button>
              <button class="button is-secondary">
                Secondary Default
              </button>
              <button class="button is-secondary is-large">
                Secondary Large
              </button>
            </div>
            <div class="buttons">
              <button class="button is-tertiary is-small">
                Tertiary Small
              </button>
              <button class="button is-tertiary">
                Tertiary Default
              </button>
              <button class="button is-tertiary is-large">
                Tertiary Large
              </button>
            </div>
            <div class="buttons">
              <button class="button is-danger is-small">
                Destructive Small
              </button>
              <button class="button is-danger">
                Destructive Default
              </button>
              <button class="button is-danger is-large">
                Destructive Large
              </button>
            </div>
            <div class="buttons">
              <button
                class="button is-primary"
                disabled
              >
                Disabled Primary
              </button>
              <button
                class="button is-secondary"
                disabled
              >
                Disabled Secondary
              </button>
              <button
                class="button is-tertiary"
                disabled
              >
                Disabled Tertiary
              </button>
            </div>
            <div class="buttons">
              <button class="button is-cta is-secondary">
                CTA Secondary
              </button>
              <button class="button is-cta">
                CTA Primary
              </button>
            </div>
            <div class="buttons">
              <button class="button is-primary is-small">
                <span class="icon">
                  <i class="fa fa-plus" />
                </span>
                <span>Icon Left</span>
              </button>
              <button class="button is-secondary">
                <span>Icon Right</span>
                <span class="icon">
                  <i class="fa fa-pencil" />
                </span>
              </button>
              <button
                class="button is-tertiary is-large"
                disabled
              >
                <span class="icon">
                  <i class="fa fa-plus" />
                </span>
                <span>Icon Disabled</span>
              </button>
            </div>
          </div>
          <div class="column is-full">
            <div class="columns">
              <div class="column is-half">
                <div class="columns is-multiline">
                  <div class="column is-full">
                    <h2 class="title is-1">
                      A title size 1
                    </h2>
                    <div class="subtitle is-1">
                      With a subtitle size 1
                    </div>
                  </div>
                  <div class="column is-full">
                    <h2 class="title is-2">
                      A title size 2
                    </h2>
                    <div class="subtitle is-2">
                      With a subtitle size 2
                    </div>
                  </div>
                  <div class="column is-full">
                    <h3 class="title is-3">
                      A title size 3
                    </h3>
                    <div class="subtitle is-3">
                      With a subtitle size 3
                    </div>
                  </div>
                  <div class="column is-full">
                    <h4 class="title is-4">
                      A title size 4
                    </h4>
                    <div class="subtitle is-4">
                      With a subtitle size 4
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="columns is-multiline">
                  <div class="column is-full">
                    <div class="subtitle is-1">
                      A inverted subtitle size 1
                    </div>
                    <h2 class="title is-1">
                      A inverted title size 1
                    </h2>
                  </div>
                  <div class="column is-full">
                    <div class="subtitle is-2">
                      A inverted subtitle size 2
                    </div>
                    <h2 class="title is-2">
                      A inverted title size 2
                    </h2>
                  </div>
                  <div class="column is-full">
                    <div class="subtitle is-3">
                      A inverted subtitle size 3
                    </div>
                    <h3 class="title is-3">
                      A inverted title size 3
                    </h3>
                  </div>
                  <div class="column is-full">
                    <div class="subtitle is-4">
                      A inverted subtitle size 4
                    </div>
                    <h4 class="title is-4">
                      A inverted title size 4
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <app-footer :links="footerLinks" />
  </div>
</template>
<script>
import Vue from 'vue';
import * as PhilaUI from '@phila/phila-ui';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
Vue.use(PhilaUI);

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
  data () {
    return {
      appHeader: {
        appTitle: "My First App",
        appSubtitle: "My app description",
        brandingImage: {
          src: require('../../assets/sample-logo.png'),
          width: '200px',
          height: 'auto',
          alt: "My branding image",
        },
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
      textboxValue: "",
      checkboxValue: [],
      checkboxes: [
        "Checkbox 1",
        "Checkbox 2",
        "Checkbox 3",
      ],
      radioValue: "",
      radioButtons: [
        "Radio button 1",
        "Radio button 2",
        "Radio button 3",
      ],
      dropdownValue: "",
      dropdownOptions: [
        "Dropdown Option 1",
        "Dropdown Option 2",
        "Dropdown Option 3",
      ],
      textAreaValue: "",
      footerLinks: [
        {
          type: "native",
          href: "/sample-link",
          text: "Sample Link 1",
        },
        {
          type: "native",
          href: "/sample-link2",
          text: "Sample Link 2",
        },
      ],
    };
  },
};
</script>
<style>
  .back-to {
    display: none;
  }
</style>