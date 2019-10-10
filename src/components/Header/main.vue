<template>
  <header class="navbar is-primary">
    <div
      class="level container"
      :class="{ 'is-fluid': fluid }"
    >
      <div class="level-left">
        <div class="level-item navbar-brand is-marginless">
          <div class="navbar-item is-fullwidth">
            <a
              v-bind="appLogoLink"
            >
              <img
                v-bind="appLogoImage"
              >
            </a>
            <span
              class="navbar-burger burger"
              data-target="navMenu"
              aria-label="menu"
              :aria-hidden="!showOnBurgerClicked"
              @click="showOnBurgerClicked = !showOnBurgerClicked"
            >
              <span />
              <span />
              <span />
            </span>
          </div>
        </div>
        <span class="level-item vertical-separator is-hidden-mobile" />
        <div class="level-item navbar-item">
          <div class="page-title">
            <a :href="appLink">
              <h1 class="is-size-4">
                {{ appTitle }}
              </h1>
              <h2
                v-if="appSubtitle"
                class="is-size-5"
              >{{ appSubtitle }}
              </h2>
            </a>
          </div>
        </div>
      </div>
      <div
        class="level-right"
        :class="{ 'is-hidden-mobile': showOnBurgerClicked }"
      >
        <div class="level-item">
          <slot />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
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
};
</script>
<style lang="scss" scoped>
  .hero {
    .navbar {
      background: $primary;
    }
  }

  .navbar {
    .navbar-burger {
      height: auto;

      span {
        height: 3px;
        width: 30px;
        left: calc(50% - 15px);

        &:nth-child(1) {
          top: calc(50% - 10px);
        }

        &:nth-child(3) {
          top: calc(50% + 8px);
        }
      }
    }

    .page-title {
      h1,
      h2 {
        line-height: 110%;
      }
    }

    .vertical-separator {
      width: 1px;
      height: 45px;
      background-color: #fff;
      margin-left: rem-calc(15px);
    }
    border-bottom: 5px solid $electric-blue;
  }
</style>