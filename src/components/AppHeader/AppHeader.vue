<template>
  <header class="header">
    <nav
      :class="isSticky ? 'is-fixed-top' : ''"
      class="navbar main-nav is-dark-ben-franklin"
      role="navigation"
      aria-label="main navigation"
    >
      <div
        :class="{ 'is-fluid': fluid }"
        class="container"
      >
        <div class="navbar-brand is-block-mobile">
          <div class="navbar-item is-block-mobile phl-logo">
            <a
              v-bind="appLogoLink"
              class="is-inline-block"
            >
              <img
                v-bind="appLogoImage"
              >
            </a>
          </div>
          <div class="navbar-item navbar-separator is-hidden-mobile">
            <span />
          </div>
          <div
            class="navbar-item is-block-mobile has-text-centered-mobile"
          >
            <a
              class="phl-app-title"
              :href="appLink"
            >
              <h1 class="is-size-5">
                {{ appTitle }}
              </h1>
              <h2
                v-if="appSubtitle"
                class="is-size-6"
              >{{ appSubtitle }}
              </h2>
            </a>
          </div>
          <!-- @slot The mobile-menu slot allows you to pass extra navigation for mobile usage -->
          <slot name="mobile-menu" />
        </div>

        <div class="navbar-menu is-hidden-mobile">
          <div class="navbar-end">
            <!-- @slot The default slot is used to add navigation items -->
            <slot />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
/**
 * This is the application's main header
 */
export default {
  name: 'AppHeader',
  props: {
    /**
     * The application logo. By default the City logo is used, however this could be used to display a department's logo.
    */
    appLogoImage: {
      type: Object,
      default: () => ({
        src: "https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png",
        alt: "City of Philadelphia logo",
        width: 170,
      }),
    },
    /**
     * The logo link
    */
    appLogoLink: {
      type: Object,
      default: () => ({
        href: "https://www.phila.gov",
        target: "_blank",
      }),
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
    fluid: {
      type: Boolean,
      default: true,
    },
    /**
     * Sticks the header to the top of the page
    */
    isSticky: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
  .header .main-nav {
    border-bottom: 5px solid $electric-blue;
  }
  .navbar {
    .navbar-item {
      a {
        color: $white;
      }
    }
    // IE vertical align hack
    // height: 73px;
    min-height: 73px;
    .navbar-burger {
      span {
        height: 2px;
      }
    }
    h1, h2 {
      font-family: $family-secondary;
      font-weight: $weight-normal;
    }
    .navbar-separator {
      padding-left: 0;
      padding-right: 0;
      span {
        width: 1px;
        height: 45px;
        background: $white;
      }
    }
    a.phl-app-title {
      color: inherit;
      &:hover {
        color: $electric-blue;
      }
    }
  }

  @include until($tablet) {
    .navbar-item {
      &.phl-logo {
        margin: 8.5px 13.5px;
      }
      img {
        max-height: 40px !important;
        width: auto;
      }
      margin: 5px 0;
    }
  }
</style>
