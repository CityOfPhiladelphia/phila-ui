<template>
  <header class="header">
    <nav
      class="navbar is-dark-ben-franklin"
      role="navigation"
      aria-label="main navigation"
    >
      <div
        :class="{ 'is-fluid': fluid }"
        class="container"
      >
        <div class="navbar-brand is-block-mobile">
          <div class="navbar-item is-block-mobile has-text-centered-mobile">
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
            <a :href="appLink">
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
          <a
            :aria-expanded="!showOnBurgerClicked"
            :aria-hidden="showOnBurgerClicked"
            :class="{ 'is-active': !showOnBurgerClicked }"
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            data-target="navbarBasicExample"
            @click="showOnBurgerClicked = !showOnBurgerClicked"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <!-- Menu Desktop -->
        <!-- <div
          class="navbar-menu is-hidden-mobile"
        >
          <slot />
        </div> -->
        <div class="navbar-menu is-hidden-mobile">
          <div class="navbar-end">
            <slot />
          </div>
        </div>
      </div>

      <!-- Menu Mobile -->
      <transition name="slide-in-out">
        <div
          v-show="!showOnBurgerClicked"
          :aria-expanded="!showOnBurgerClicked"
          :aria-hidden="showOnBurgerClicked"
          class="navbar-menu mobile-menu is-hidden-desktop"
        >
          <slot />
        </div>
      </transition>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
  props: {
    appLogoLink: {
      type: Object,
      default: () => ({
        href: "https://www.phila.gov",
        target: "_blank",
      }),
    },
    appLogoImage: {
      type: Object,
      default: () => ({
        src: "https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png",
        alt: "City of Philadelphia logo",
        width: 170,
      }),
    },
    appTitle: {
      type: String,
      default: "",
    },
    appSubtitle: {
      type: String,
      default: "",
    },
    appLink: {
      type: String,
      default: "/",
    },
    fluid: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showOnBurgerClicked: true,
    };
  },
  watch: {
    '$route' () {
      this.showOnBurgerClicked = true;
    },
  },
};
</script>
<style lang="scss" scoped>
  .hero {
    .header {
      background: $primary;
      border-bottom: 5px solid $electric-blue;
    }
  }
  .navbar {
    min-height: 73px;
    .navbar-burger {
      span {
        height: 2px;
      }
    }
    h1, h2 {
      font-family: 'Montserrat', 'Tahoma', sans-serif;
      font-weight: 400;
    }
    .navbar-separator {
      padding-left: 0;
      padding-right: 0;
      span {
        width: 1px;
        height: 45px;
        background: #fff;
      }
    }

    @include until($tablet) {
      // Fix Margin
      .navbar-brand {
        padding: 1px 0;
      }
      .navbar-burger {
        z-index: 2;
        position: fixed !important;
        bottom: 20px;
        right: 10px;
        top: auto;
        background-color: $electric-blue;
        box-shadow: 0px 0px 2px $dark-gray;
        border-radius: 100%;
        width: 50px;
        // border: 1px solid $dark-gray;
        height: 50px;
        span {
          color: $dark-gray;
        }
      }
      .navbar-item {
        img {
          max-height: 40px !important;
          width: auto;
        }
        background-color: #0F4D89 !important;
        text-align: center;
        margin: 5px 0;
        min-width: 150px;
      }
      .mobile-menu {
        display: block;
        background: none;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: $primary;
        height: 100vh;
        width: 100vw;
        padding: 0;
      }
    }
  }
</style>

<style lang="scss">
  @include until($tablet) {
    .navbar-brand {
      .is-block-mobile {
        padding: 0;
      }
    }
    .mobile-menu {
      .navbar-item {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        padding: 0;
        height: 100%;

        .button {
          align-self: center;
          margin: 10px 0;
        }
      }
    }
  }

  .slide-in-out-leave-active,
  .slide-in-out-enter-active {
    transition: all 0.25s; // trick
  }

  .slide-in-out-leave,
  .slide-in-out-enter-to {
    opacity: 1; // trick
    transform: translate(0%);
  }

  .slide-in-out-leave-to,
  .slide-in-out-enter {
    opacity: 0; // trick
    transform: translate(calc(100% + 10px));
  }
</style>
