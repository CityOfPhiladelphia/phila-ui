<template>
  <div>
    <!-- Mobile Menu Slot -->
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
  </div>
</template>
<script>
export default {
  name: 'MobileMenu',
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
}
</script>
<style lang="scss">
  @include until($tablet) {
    // Fix Margin
    .navbar-brand {
      padding: 1px 0;
    }
    .navbar-burger {
      z-index: 12;
      position: absolute;
      top: 0;
      right: 0;
      span {
        height: 3px;
        width: 24px;
        left: calc(50% - 12px);
        &:nth-child(1) {
          top: calc(50% - 9px);
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
        }
        &:nth-child(3) {
          top: calc(50% + 7px);
        }
      }
      &.is-active {
        span {
          &:nth-child(1) {
            top: calc(50% - 7px);
          }
          &:nth-child(3) {
            top: calc(50% + 3px);
          }
        }
      }
    }
    .mobile-menu {
      display: block;
      background: none;
      position: fixed;
      z-index: 11;
      top: 0;
      left: 0;
      background-color: $primary;
      height: 100vh;
      width: 100vw;
      padding: 0;
    }
  }
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
