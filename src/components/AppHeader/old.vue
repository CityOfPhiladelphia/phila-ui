<template>
  <header
    id="app-header"
    class="header"
  >
    <div
      id="trusted-site"
      class="level is-marginless"
      :class="{ 'is-fluid': fluid }"
    >
      <div class="level-left logo">
        <img
          src="../../assets/images/phila-bell.svg"
          width="13px"
          height="auto"
        >City of Philadelphia
      </div>
      <div class="level-right logo-right">
        An official website of the City of Philadelphia government
      </div>
    </div>
    <nav
      :class="isSticky ? 'is-fixed-top' : ''"
      class="navbar main-nav is-ben-franklin-blue-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div
        :class="{ 'is-fluid': fluid }"
        class="container"
      >
        <!-- Desktop header -->
        <div class="navbar-brand">
          <div
            class="navbar-item"
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

        <div class="navbar-menu is-hidden-mobile">
          <div class="navbar-end">
            <slot />
          </div>

          <!-- Navbar mobile -->
          <div class="navbar-mobile is-hidden-desktop">
            <div class="navbar-item mobile-logo">
              <a href="#">
                <img v-bind="appMobileLogoImage">
              </a>
            </div>
            <div class="navbar-item mobile-title">
              <a
                :href="appLink"
              >
                <h1>
                  {{ appTitle }}
                </h1>
                <h2
                  v-if="appSubtitle"
                >{{ appSubtitle }}
                </h2>
              </a>
            </div>
            <!-- @slot The mobile-menu slot allows you to pass extra navigation for mobile usage -->
            <slot name="mobile-menu" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
/**
 * This is the main application header.
 */
export default {
  name: 'AppHeader',
  props: {
    /**
     * The application logo. By default the City logo is used, however this could be used to display a department's logo.
    */
    // appLogoImage: {
    //   type: Object,
    //   default: () => ({
    //     src: "https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png",
    //     alt: "City of Philadelphia logo",
    //     width: 170,
    //   }),
    // },

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
<style lang="scss">
  #app-header {
    .navbar {
      .navbar-burger {
        span {
          height: 2px;
        }
      }
      h1, h2 {
        font-family: $family-secondary;
        font-weight: 500;
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
      .navbar-brand img {
        width: auto;
        height: 45px;
      }
      a.app-title {
        color: inherit;
        &:hover {
          color: $electric-blue;
        }
        h1, h2 {
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
        }
        h1 {
          line-height: 1.5rem;
          font-size: 1.25rem;
        }
        h2 {
          line-height: 1.125rem;
          font-size: 0.875rem;
        }
      }
    }
    @include until(1023px) {
      // padding-top: 61px;
      .navbar {
        .navbar-end {
          width: 70%;
        }
        .navbar-item {
          text-align: left;
          padding: 0;
          .button {
            background-color: $electric-blue;
            border: none;
            color: #fff;
            text-align: left;
            line-height: 1;
            display: block;
            margin: 8px 0;
            .icon:first-child:not(:last-child) {
              margin-left: 0;
            }
            .icon:last-child:not(:first-child) {
              margin-right: 0;
            }

            &.router-link-exact-active,
            &.active,
            &.is-active {
              background: #e0efff;
            }
          }

          .dropdown {
            display: block;
            .dropdown-content {
              background: none;
              box-shadow: none;
              margin-left: 2rem;
              border-left: 1px solid #e0efff;
              a, .button {
                color: #fff
              }
            }
          }
        }
      }
    }
    @include desktop {
      // padding: 69px 0 46px 0;

      .navbar {
        .container.is-fluid {
          flex-wrap: wrap !important;
        }
        .navbar-brand {
          height: 64px;
        }
        .navbar-end {
          margin-top: 8px;
          // justify-content: flex-start;
          width: 100%;

          .navbar-item {
            padding: 0;
            align-items: flex-end;
            margin-right: 8px;
            .button {
              background-color: $electric-blue;
              span:not(.icon) {
                line-height: 1;
                font-size: 1rem;
                vertical-align: middle;
              }
              border: 0;
              padding: 0 16px;
              height: 2.5rem;
              border-radius: 0;
              font-size: 1rem;
              font-weight: normal;
              &.router-link-exact-active,
              &.active,
              &.is-active {
                background-color: $white;
                color: $grey-dark;
              }
              &:focus {
                box-shadow: none;
              }
            }
            .dropdown-trigger {
              .button {
                span.icon {
                  font-size: 1.438rem;
                  line-height: 1;
                }
              }
            }
          }
        }
      }

      .navbar {
        .navbar-end {
          .navbar-item {
            .button {
              text-transform: none;
            }
          }
        }
      }
    }
    @include desktop-only {
      &.is-admin {
        padding: 112px 0 46px 0;
      }
    }

    @include mobile {
      .navbar-burger:hover {
        color: $electric-blue;
      }
      .main {
        padding: 0;
      }
      .navbar {
        .container.is-fluid {
          padding-left: initial !important;
          padding-right: initial !important;
        }
      }
    }
  }

  #trusted-site {
    color: $white;
    background-color: $ben-franklin-blue;
    .logo {
      img {
        margin-right: 0.188rem;
      }
      font-size: $size-small;
      font-weight: $weight-semibold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.45;
      letter-spacing: 1px
    }
    .logo-right {
      font-size: 0.75rem;
    }
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