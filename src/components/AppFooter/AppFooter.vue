<template>
  <footer
    v-if="(isMobile && !isHiddenMobile) || !isMobile"
    id="app-footer"
    :class="{ 'is-sticky': isSticky }"
  >
    <div class="container" />
    <div class="container has-text-centered">
      <template v-if="links.length > 0">
        <ul
          role="menu"
          class="inline-list"
        >
          <li
            v-for="(link, index) in links"
            :key="`fl-${index}`"
            role="none"
          >
            <nav-link
              :link="link"
              role="menuitem"
            />
          </li>
        </ul>
      </template>
      <template v-else>
        <!-- @slot The default slot takes an unordered list (```<ul>```) of links. -->
        <slot />
      </template>
    </div>
  </footer>
</template>
<script>
import NavLink from 'components/NavLink/NavLink.vue';
import Vue from 'vue';

/**
 * This is the application's main footer. It displays a list of links via slot or props
 * @niceName Application Footer
 * @group Navigation
 * @position 105
 */
export default {
  name: 'AppFooter',
  components: {
    NavLink,
  },
  props: {
    /**
     * Fixes footer to the bottom of the window
    */
    isSticky: {
      type: Boolean,
      default: false,
    },
    /**
     * Hides footer navigation on mobile (recommended)
    */
    isHiddenMobile: {
      type: Boolean,
      default: true,
    },
    /**
     * An array of objects. See [Navigation Link](/components/NavLink)
    */
    links: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  mounted () {

    const main = document.querySelector('main');
    const footer = document.querySelector('#app-footer');

    if (this.isSticky) {
      if (main) {
        main.style['padding-bottom'] = `${footer.offsetHeight}px`;
      } else {
        console.warn('missing <main> tag for footer positioning');
      }
    } else {
      if ((this.isMobile && !this.isHiddenMobile) || !this.isMobile) {
        const header = document.querySelector('#app-header');
        if (header) {
          const mainHeight = header.offsetHeight + footer.offsetHeight;
          main.style['min-height'] = `calc(100vh - ${mainHeight}px)`;
        } else {
          console.warn('missing <app-header> for footer positioning');
        }
      }
    }
  },
};
</script>
<style lang="scss">
  #app-footer {
    a {
      color: $white;
      line-height: 46px;
      &:hover {
        color: $electric-blue;
      }
    }
  }
</style>
<style lang="scss" scoped>
  #app-footer {
    background-color: $ben-franklin-blue-dark;
    height: 46px;
    max-height: 46px;
    overflow: hidden;
    width: 100%;
    &.is-sticky {
      position: fixed;
      bottom: 0;
      z-index: 99;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: inline-block;
        vertical-align: middle;
        margin: 0 1rem;
        padding: 0;
      }
    }
  }
</style>
