<template>
  <footer
    v-if="!isHiddenMobile"
    id="app-footer"
    :class="{ 'is-sticky': isSticky }"
  >
    <div class="container" />
    <div class="container has-text-centered">
      <template v-if="links.length > 0">
        <ul class="inline-list">
          <li
            v-for="(link, index) in links"
            :key="`fl-${index}`"
          >
            <nav-link :link="link" />
          </li>
        </ul>
      </template>
      <template v-else>
        <!-- The default slot takes an unordered list (```<ul>```) of links. -->
        <slot />
      </template>
    </div>
  </footer>
</template>
<script>
import NavLink from '@/utils/NavLink.vue';
import Vue from 'vue';

/**
 * @group Navigation
 * This is the application's main footer. It accepts a list of links via slot or props
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
     * An array of objects (See NavLink under utils).
    */
    links: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  mounted () {

    const main = document.querySelector('#app-content');
    const footer = document.querySelector('#app-footer');

    if (this.isSticky) {
      main.style['padding-bottom'] = `${footer.offsetHeight}px`;
    } else {
      if (!this.isHiddenMobile) {
        const header = document.querySelector('#app-header');
        const mainHeight = header.offsetHeight + footer.offsetHeight;

        main.style['min-height'] = `calc(100vh - ${mainHeight}px)`;
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
