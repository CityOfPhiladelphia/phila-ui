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
              class="column is-narrow has-text-centered mobile-nav-col"
            >
              <slot name="mobile-nav" />
            </div>
            <div
              v-if="showBranding"
              class="column is-narrow logo-col"
            >
              <branding
                :app-logo-image="appLogoImage"
                :app-logo-link="appLogoLink"
              />
            </div>
            <div
              class="column title-col is-narrow"
              :class="{ 'no-mobile': isMobile && !$slots['mobile-nav'], 'is-4': isTablet && showBranding }"
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
                :class="{ 'is-pulled-right': showRightNavOnSide }"
              >
                <div
                  v-if="showLeftNav"
                  class="level-left"
                >
                  <div
                    v-if="$slots['tabs-nav']"
                    class="level-item"
                  >
                    <slot name="tabs-nav" />
                  </div>
                  <div
                    v-if="$slots['left-nav']"
                    class="level-item"
                  >
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
                    <slot name="right-nav" />
                  </div>
                  <div
                    v-if="$slots['lang-selector-nav']"
                    class="level-item"
                  >
                    <slot name="lang-selector-nav" />
                  </div>
                  <div
                    v-if="$slots['dropdown-nav'] && !isMobile"
                    class="level-item"
                  >
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
import TrustedSite from './TrustedSite.vue';
import Branding from './Branding.vue';

/**
 * This is the main application header.
 */
export default {
  name: 'AppHeader',
  components: {
    TrustedSite,
    Branding,
  },
  props: {
    /**
     * The application logo. By default the City logo is used, however this could be used to display a department's logo.
    */
    appLogoImage: {
      type: Object,
      default () {
        return null;
      },
    },

    /**
     * The logo link
    */
    appLogoLink: {
      type: Object,
      default () {
        return null;
      },
    },
    /**
     * The application's title/name
    */
    appTitle: {
      type: String,
      default: "",
    },
    /**
     * The application's subtitle
    */
    appSubtitle: {
      type: String,
      default: "",
    },
    /**
     * The application's link. By default it links to the root.
    */
    appLink: {
      type: String,
      default: "/",
    },

    /**
     * Allows the header elements (logo, title, navigation...) to expand with the window width, or stay in the center
    */
    isFluid: {
      type: Boolean,
      default: false,
    },
    /**
     * Sticks the header to the top of the page
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
      return this.appLogoImage && this.appLogoLink && !this.isMobile;
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
          main.style['margin-top'] = header.offsetHeight + 'px';

        });

      }
    },

  },
};
</script>

<style lang="scss">
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
          padding-bottom: 0.5rem;
        }

        &.nav-col {
          padding: 0;
        }
        &.logo-col {
          padding-left: 0;
          padding-right: 0;
        }
        &.title-col {
          padding-left: 0;
          padding-right: 0;
          @include until ($tablet) {
            padding-left: 0.75rem;
          }
          &.no-mobile {
            padding-left: 0 !important;
          }
        }
        &.mobile-nav-col {
          margin-left: -0.25rem;
          padding-left: 0;
          padding-right: 0;
        }
      }
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
        font-size: $size-large;
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