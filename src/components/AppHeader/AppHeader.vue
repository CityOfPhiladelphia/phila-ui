]<template>
  <header class="header">
    <nav
      class="navbar is-dark-ben-franklin"
      role="navigation"
      aria-label="main navigation"
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
            <h1 class="is-size-4 is-size-5-mobile">
              {{ appTitle }}
            </h1>
            <h2
              v-if="appSubtitle"
              class="is-size-5 is-size-6-mobile"
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
      <div
        class="navbar-menu is-hidden-mobile"
      >
        <slot />
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
        width: 190,
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
    .navbar-burger {
      span {
        height: 2px;
      }
    }
    .page-title {
      h1,
      h2 {
        line-height: 110%;
      }
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
        background: none;
        position: fixed;
        padding-right: 10px;
        right: 0%;
        bottom: 70px;
        box-shadow: none;
        display: block;
      }
    }
  }
</style>

<style lang="scss">
    @include until($tablet) {
      .navbar {
        .navbar-end, .navbar-start {
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          .navbar-item {
            background-color: $primary !important;
            margin: 5px 0;
            box-shadow: 0px 0px 20px #ffffff;
          }
        }
      }
    }
  .slide-in-out-leave-active,
  .slide-in-out-enter-active {
    transition: opacity 0.6s; // trick
    .navbar-item {
      transition: transform 0.25s;
    }
  }

  .slide-in-out-enter {
    opacity: 0; // trick
    .navbar-item {
      transform: translate(calc(100% + 10px));
    }
  }

  .slide-in-out-enter-to {
    opacity: 1;
    .navbar-item {
      transform: translate(0%);
    }
  }

  .slide-in-out-leave {
    opacity: 1; // trick
    .navbar-item {
      transform: translate(0%);
    }
  }

  .slide-in-out-leave-to {
    opacity: 0; // trick
    .navbar-item {
      transform: translate(calc(100% + 10px));
    }
  }

  .slide-in-out-enter-to,
  .slide-in-out-leave-to {
    .navbar-item {
      &:nth-child(11) {
        transition-delay: 0.3s;
      }
      &:nth-child(10) {
        transition-delay: 0.28s;
      }
      &:nth-child(9) {
        transition-delay: 0.26s;
      }
      &:nth-child(8) {
        transition-delay: 0.24s;
      }
      &:nth-child(7) {
        transition-delay: 0.22s;
      }
      &:nth-child(6) {
        transition-delay: 0.2s;
      }
      &:nth-child(5) {
        transition-delay: 0.18s;
      }
      &:nth-child(4) {
        transition-delay: 0.16s;
      }
      &:nth-child(3) {
        transition-delay: 0.14s;
      }
      &:nth-child(2) {
        transition-delay: 0.12s;
      }
      &:nth-child(1) {
        transition-delay: 0.1s;
      }
    }
  }
</style>
