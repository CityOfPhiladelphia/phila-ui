<template>
  <header
    id="app-header"
    ref="app-header"
    :class="{ 'is-sticky' : isSticky }"
  >
    <trusted-site
      :is-fluid="isFluid"
      @update-status="stickyHeader"
    />
    <div id="nav-wrap">
      <div
        class="container"
        :class="{ 'is-fluid' : isFluid }"
      >
        <nav id="main-nav">
          <div class="columns is-marginless is-mobile is-vcentered is-multiline">
            <div
              v-if="$slots['mobile-nav'] && isMobile"
              class="column has-text-centered mobile-nav-col"
            >
              <!-- @slot See [Mobile Navigation](/components/MobileNav) -->
              <slot name="mobile-nav" />
            </div>
            <div
              v-if="showBranding"
              class="column is-narrow branding-col"
            >
              <branding
                :branding-image="brandingImage"
                :branding-link="brandingLink"
              />
            </div>
            <div
              class="column title-col"
              :class="{
                'no-mobile-nav': isMobile && !$slots['mobile-nav'],
                'is-4': !isMobile && showBranding && showRightNavOnSide,
                'is-6': !showBranding && showRightNavOnSide,
                'is-8': !isMobile && !showRightNavOnSide && !showBranding
              }"
            >
              <div>
                <a
                  class="app-title"
                  :href="appLink"
                >
                  <h1 class="is-size-5">
                    {{ appTitle }}
                  </h1>
                  <h2
                    v-if="appSubtitle && !isMobile"
                    class="is-size-6"
                  >{{ appSubtitle }}
                  </h2>
                </a>
              </div>
            </div>
            <div
              v-if="showLeftNav || showRightNav"
              class="column nav-col"
              :class="{ 'is-12': !isMobile && showLeftNav }"
            >
              <div
                class="level"
                :class="{ 'is-pulled-right': !isMobile && !showLeftNav }"
              >
                <div
                  v-if="showLeftNav"
                  class="level-left"
                >
                  <div
                    v-if="$slots['tabs-nav']"
                    class="level-item"
                  >
                    <!-- @slot See [Tabbed Navigation](/components/TabsNav) -->
                    <slot name="tabs-nav" />
                  </div>
                  <div
                    v-if="$slots['left-nav']"
                    class="level-item"
                  >
                    <!-- @slot Allows additional items on the left side of the header (on the right of the tabs navigation) -->
                    <slot name="left-nav" />
                  </div>
                </div>
                <div
                  v-if="showRightNav"
                  class="level-right"
                >
                  <div
                    v-if="$slots['right-nav'] && !isMobile"
                    class="level-item"
                  >
                    <!-- @slot Allows additional items on the right side of the header (on the left of the dropdown navigation) -->
                    <slot name="right-nav" />
                  </div>
                  <div
                    v-if="$slots['lang-selector-nav']"
                    class="level-item"
                  >
                    <!-- @slot See [Language Selector](/components/LangSelector) -->
                    <slot name="lang-selector-nav" />
                  </div>
                  <div
                    v-if="$slots['dropdown-nav'] && !isMobile"
                    class="level-item"
                  >
                    <!-- @slot See [Dropdown Navigation](/components/DropdownNav) -->
                    <slot name="dropdown-nav" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>

import Vue from 'vue';
import TrustedSite from './_TrustedSite.vue';
import Branding from './_Branding.vue';

/**
 * This is the application's main header.
 * @niceName Application Header
 * @group Navigation
 * @position 100
 */
export default {
  name: 'AppHeader',
  components: {
    TrustedSite,
    Branding,
  },
  props: {

    /**
     * The application's title/name
    */
    appTitle: {
      type: String,
      default: "Application Name",
    },

    /**
     * The application's title link. 99% of the time the application title should link to itself.
    */
    appLink: {
      type: String,
      default: "/",
    },

    /**
     * The application's subtitle/description
    */
    appSubtitle: {
      type: String,
      default: "",
    },

    /**
     * Branding image (eg. department logo). Accepts an Object of image attributes.
    */
    brandingImage: {
      type: Object,
      default: null,
    },

    /**
     * Branding image link. Accepts an Object of link attributes.
    */
    brandingLink: {
      type: Object,
      default () {
        return {
          href: '/',
        };
      },
    },

    /**
     * Allows the header elements (logo, title, navigation...) to expand with the window width, or stay aligned in the center (not recommended).
    */
    isFluid: {
      type: Boolean,
      default: false,
    },

    /**
     * Fixes the header to the top of the page
     * Requires the application to have the ``<main>`` tag for content positioning calculations
    */
    isSticky: {
      type: Boolean,
      default: true,
    },

  },
  data () {
    return {
      timeout: null,
    };
  },
  computed: {

    showRightNavOnSide () {
      return !this.showLeftNav && this.showRightNav;
    },

    showLeftNav () {
      return (this.$slots['tabs-nav'] || this.$slots['left-nav']) && !this.isMobile;
    },

    showRightNav () {
      return (
        (
          this.$slots['lang-selector-nav'] ||
          this.$slots['dropdown-nav'] ||
          this.$slots['right-nav']
        )
      );
    },

    showBranding () {
      return this.brandingImage && this.brandingLink && !this.isMobile;
    },

  },
  created () {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    clearTimeout(this.timeout);
  },
  mounted () {
    this.stickyHeader();
  },
  methods: {
    handleResize () {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.stickyHeader();
      }, 500);
    },

    stickyHeader () {

      if (this.isSticky) {

        //wait for dom to finish updating
        Vue.nextTick(function () {

          let body = document.querySelector('body');
          let header = document.querySelector('#app-header');
          let main = document.querySelector('main');

          body.classList.add('has-sticky-header');
          if (!main) {
            console.warn('Remember to add a main container (<main>) when the header is sticky.');
            return;
          }
          main.style['margin-top'] = header.offsetHeight + 'px';
        });

      }
    },
  },
};
</script>

<style lang="scss">
  #app-header {
    .container {
      padding: 0 1rem;
    }
    @include until ($tablet) {
      .container {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }
  }
  .m-nav-opened {
    height:100%;
    overflow: hidden;
  }
</style>

<style lang="scss" scoped>

  #app-header {

    @include until ($tablet) {
      border-bottom: 2px solid $electric-blue;
    }

    &.is-sticky {
      width: 100%;
      position: fixed;
      top:0;
      left:0;
      z-index: 998;
    }
  }

  #main-nav {
    > .columns {

      .column {
        padding-top: 0.5rem;
        padding-bottom: 1rem;

        @include until ($tablet) {
          padding: 0;
        }

        &.mobile-nav-col {
          @include until ($tablet) {
            width: 50px;
            flex: none;
          }
        }

        &.branding-col {
          padding-left: 0;
          padding-right: 0;
        }

        &.title-col {
          padding-left: 0;
          text-align: left;
          @include until ($tablet) {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            width: calc(100% - 100px);
            flex: none;
            &.no-mobile-nav {
              padding-left: 1rem;
              width: calc(100% - 50px);
            }
          }
        }

        &.nav-col {
          padding: 0;
          @include until ($tablet) {
            width: 50px;
            flex: none;
          }
        }

      }
      margin: 5px 0;
    }
  }

  #nav-wrap {
    background-color: $ben-franklin-blue-dark;
  }

  a.app-title {
    color: $white;
    h1 {
      font-family: $family-secondary;
      font-size: 1.375rem;
      font-weight: $weight-bold;
      line-height: 1.09;
      padding: 0;
      @include until ($tablet) {
        font-weight: $weight-normal;
        font-size: $size-normal;
      }
    }
    h2 {
      font-family: $family-secondary;
      font-size: $size-large;
      font-weight: $weight-normal;
      line-height: 1.33;
      padding: 0;
    }
  }

</style>