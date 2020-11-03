<template>
  <header id="app-header">
    <trusted-site />
    <nav
      class="navbar main-nav is-dark-ben-franklin"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <div
          v-if="appLogoImage && appLogoLink"
          class="navbar-item phl-logo"
        >
          <a
            v-bind="appLogoLink"
            class="is-inline-block"
          >
            <img
              v-bind="appLogoImage"
            >
          </a>
        </div>
        <div
          v-if="appLogoImage && appLogoLink"
          class="navbar-item navbar-separator"
        >
          <span />
        </div>
        <div
          class="navbar-item is-block-mobile has-text-centered-mobile"
        >
          <a
            class="app-title"
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
      </div>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div id="app-menu">
              <div id="app-menu-links">
                <template v-if="appTabs.length > 0">
                  <template v-for="(link, index) in appTabs">
                    <template v-if="link.type === 'link'">
                      <a
                        :key="`menu-link-${index}`"
                        :href="link.href"
                        :class="{ 'is-active': link.active }"
                        @click.prevent="link.click"
                      >
                        {{ link.label }}
                      </a>
                    </template>
                    <template v-else>
                      <router-link
                        :key="`menu-link-${index}`"
                        :to="{ name: link.href }"
                      >
                        {{ link.label }}
                      </router-link>
                    </template>
                  </template>
                </template>
                <template v-else>
                  <slot name="app-tabs" />
                </template>
              </div>
            </div>
          </div>
        </div>
        <template v-if="appDropdown.length > 0 || $slots['app-dropdown']">
          <div class="level-right">
            <div class="level-item">
              <div
                id="app-dropdown-links"
                ref="app-dropdown"
                @click.prevent="dropdownIsActive = !dropdownIsActive"
              >
                <div id="app-dropdown-wrap">
                  <ul>
                    <template v-if="appDropdown.length > 0">
                      <template v-for="(link, index) in appDropdown">
                        <template v-if="link.type === 'link'">
                          <li :key="link">
                            <a
                              :key="`dd-menu-link-${index}`"
                              :href="link.href"
                              :class="{ 'is-active': link.active }"
                              @click.prevent="link.click"
                            >
                              {{ link.label }}
                            </a>
                          </li>
                        </template>
                        <template v-else>
                          <li :key="`dd-menu-link-${index}`">
                            <router-link
                              :to="{ name: link.href }"
                            >
                              {{ link.label }}
                            </router-link>
                          </li>
                        </template>
                      </template>
                    </template>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </nav>
  </header>
</template>
<script>

import TrustedSite from '../TrustedSite/TrustedSite.vue';

/**
 * This is the main application header.
 */
export default {
  name: 'AppHeader',
  components: {
    TrustedSite,
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
      // default: () => ({
      //   src: "https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png",
      //   alt: "City of Philadelphia logo",
      //   width: 170,
      // }),
    },

    // appMobileLogoImage: {
    //   type: Object,
    //   default: () => ({
    //     src: "https://www.phila.gov/assets/images/city-bell-yellow.png",
    //     alt: "City of Philadelphia logo",
    //   }),
    // },
    /**
     * The logo link
    */
    appLogoLink: {
      type: Object,
      default () {
        return null;
      },
      // default: () => ({
      //   href: "https://www.phila.gov",
      //   target: "_blank",
      // }),
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

    appTabs: {
      type: Array,
      default () {
        return [];
      },
    },


    appDropdown: {
      type: Array,
      default () {
        return [];
      },
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
  data () {
    return {
      dropdownIsActive: false,
    };
  },
  watch: {
    dropdownIsActive (newe, old) {
      let list = this.$refs['app-dropdown'].querySelectorAll('ul li:not(:first-child)');
      list.forEach(item => {
        item.classList.toggle("active");
      });
    },
  },
};
</script>
<style lang="scss" scoped>

  #app-header {
    .navbar {
      display: block;
      padding: 0 2rem 0 1.25rem;
      // .navbar-burger {
      //   span {
      //     height: 2px;
      //   }
      // }
      // h1, h2 {
      //   font-family: $family-secondary;
      //   font-weight: 500;
      // }
      .navbar-separator {
        padding-left: 0;
        padding-right: 0;
        span {
          width: 1px;
          height: 45px;
          background: $white;
        }
      }
      .navbar-brand img {
        width: auto;
        height: 45px;
      }
      a.app-title {
        color: $white;
        padding: 0.5rem 0 1rem 0;
        max-width: 75%;
        h1 {
          font-family: $family-secondary;
          font-size: 1.375rem;
          font-weight: $weight-bold;
          line-height: 1.09;
          padding: 0;
        }
        h2 {
          font-family: $family-secondary;
          font-size: $size-large;
          font-weight: $weight-normal;
          line-height: 1.33;
          padding: 0;
        }
      }
    }
    #app-menu {
      padding: 0 0.75rem;
    }
    #app-menu-links {
      a {
        display: inline-block;
        background-color: $electric-blue;
        color: $grey-dark;
        font-size: $size-small;
        padding: 0.5rem 1.125rem;
        margin-right: 0.5rem;
        &.is-active, &.router-link-exact-active.router-link-active {
          background-color: $white;
        }
      }
    }

    #app-dropdown-links {
      position: relative;
      display: flow-root;
      #app-dropdown-wrap {
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        display: block;
      }
      ul {
        top: 0;
        right: 0;
        li {
          z-index: 10;
          &:first-child {
            background-color: $ben-franklin-blue-dark;
            display: block;
            a {
              color: $white;
            }
          }
          display: none;
          &.active {
            background-color: $white;
            display: block;
            a {
              color: $grey-dark;
            }
          }
        }
      }
    }
    // @include until(1023px) {
    //   // padding-top: 61px;
    //   .navbar {
    //     .navbar-end {
    //       width: 70%;
    //     }
    //     .navbar-item {
    //       text-align: left;
    //       padding: 0;
    //       .button {
    //         background-color: $electric-blue;
    //         border: none;
    //         color: #fff;
    //         text-align: left;
    //         line-height: 1;
    //         display: block;
    //         margin: 8px 0;
    //         .icon:first-child:not(:last-child) {
    //           margin-left: 0;
    //         }
    //         .icon:last-child:not(:first-child) {
    //           margin-right: 0;
    //         }

    //         &.router-link-exact-active,
    //         &.active,
    //         &.is-active {
    //           background: #e0efff;
    //         }
    //       }

    //       .dropdown {
    //         display: block;
    //         .dropdown-content {
    //           background: none;
    //           box-shadow: none;
    //           margin-left: 2rem;
    //           border-left: 1px solid #e0efff;
    //           a, .button {
    //             color: #fff
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // @include desktop {
    //   // padding: 69px 0 46px 0;

    //   .navbar {
    //     .container.is-fluid {
    //       flex-wrap: wrap !important;
    //     }
    //     .navbar-brand {
    //       height: 64px;
    //     }
    //     .navbar-end {
    //       margin-top: 8px;
    //       // justify-content: flex-start;
    //       width: 100%;

    //       .navbar-item {
    //         padding: 0;
    //         align-items: flex-end;
    //         margin-right: 8px;
    //         .button {
    //           background-color: $electric-blue;
    //           span:not(.icon) {
    //             line-height: 1;
    //             font-size: 1rem;
    //             vertical-align: middle;
    //           }
    //           border: 0;
    //           padding: 0 16px;
    //           height: 2.5rem;
    //           border-radius: 0;
    //           font-size: 1rem;
    //           font-weight: normal;
    //           &.router-link-exact-active,
    //           &.active,
    //           &.is-active {
    //             background-color: $white;
    //             color: $grey-dark;
    //           }
    //           &:focus {
    //             box-shadow: none;
    //           }
    //         }
    //         .dropdown-trigger {
    //           .button {
    //             span.icon {
    //               font-size: 1.438rem;
    //               line-height: 1;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    //   .navbar {
    //     .navbar-end {
    //       .navbar-item {
    //         .button {
    //           text-transform: none;
    //         }
    //       }
    //     }
    //   }
    // }
    // @include desktop-only {
    //   &.is-admin {
    //     padding: 112px 0 46px 0;
    //   }
    // }

    // @include mobile {
    //   .navbar-burger:hover {
    //     color: $electric-blue;
    //   }
    //   .main {
    //     padding: 0;
    //   }
    //   .navbar {
    //     .container.is-fluid {
    //       padding-left: initial !important;
    //       padding-right: initial !important;
    //     }
    //   }
    // }
  }

  // .navbar {
  //   // IE vertical align hack
  //   // height: 73px;
  //   min-height: 64px;
  //   .navbar-burger {
  //     span {
  //       height: 2px;
  //     }
  //   }
  //   h1, h2 {
  //     font-family: $family-secondary;
  //     font-weight: 500;
  //   }
  //   .navbar-separator {
  //     padding-left: 0;
  //     padding-right: 0;
  //     span {
  //       width: 1px;
  //       height: 45px;
  //       background: $white;
  //     }
  //   }
  //   .navbar-brand img {
  //     width: auto;
  //     height: 45px;
  //   }
  //   a.phl-app-title {
  //     color: inherit;
  //     &:hover {
  //       color: $electric-blue;
  //     }
  //     h1, h2 {
  //       font-weight: normal;
  //       font-stretch: normal;
  //       font-style: normal;
  //       line-height: normal;
  //       letter-spacing: normal;
  //     }
  //     h1 {
  //       line-height: 1.5rem;
  //       font-size: 1.25rem;
  //     }
  //     h2 {
  //       line-height: 1.125rem;
  //       font-size: 0.875rem;
  //     }
  //   }
  // }
  // @include until(1023px) {
  //   .navbar {
  //     min-height: auto;
  //     border: none;
  //     .navbar-mobile {
  //       height: 56px;
  //       display: flex;
  //       align-items: stretch;
  //       justify-content: space-between;
  //       flex-flow: row nowrap;
  //       .navbar-item {
  //         align-items: center;
  //         display: flex;
  //         padding: 0;
  //         &.phl-mobile-logo {
  //           a {
  //             padding-right: 8px;
  //             padding-left: 8px;
  //             display: inline-block;
  //             line-height: 1;
  //             img {
  //               min-height: auto;
  //               height: 32px;
  //             }
  //           }
  //         }
  //         &.phl-mobile-title {
  //           flex-grow: 1;
  //           flex-shrink: 1;
  //           @include until(480px) {
  //             h2 {
  //               display: none;
  //             }
  //           }
  //         }
  //         a {
  //           h1, h2 {
  //             line-height: 1.13;
  //           }
  //           h2 {
  //             font-size: 0.75rem;
  //             font-weight: normal;
  //             line-height: 1.08;
  //           }
  //           color: inherit;
  //         }
  //       }
  //     }
  //   }
  // }




</style>