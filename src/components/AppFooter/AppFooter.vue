<template>
  <footer
    v-if="!isMobile"
    id="app-footer"
    class="is-hidden-mobile"
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
        <slot />
      </template>
    </div>
  </footer>
</template>
<script>

import NavLink from '@/utils/NavLink.vue';
import Vue from 'vue';

/**
 * This is the application's main footer.
 */
export default {
  name: 'AppFooter',
  components: {
    NavLink,
  },
  props: {
    /**
     * An array of links to be displayed. Each link should have at least a `href` and a `text` property. The href property of the link may contain a function, a string, or a router-link object.
    */
    isSticky: {
      type: Boolean,
      default: false,
    },
    links: {
      type: Array,
      default: () => {
        return []; // Each link requires at least a href and text properties.
      },
    },
  },
  computed: {
    localLinks() {
      // Prepare links
      let localLinks = [];
      this.links.forEach(link => {
        let defaults =  { href: "#", text: "link here", "attrs": {}};
        Object.keys(link).forEach(key =>  {
          if (defaults[key]) {
            defaults[key] = link[key];
          } else {
            defaults.attrs[key] = link[key];
          }
        });
        localLinks.push(Object.assign({}, defaults));
      });
      return localLinks;
    },
  },
  mounted () {
    const main = document.querySelector('#app-content');
    const footer = document.querySelector('#app-footer');

    if (this.isSticky) {
      Vue.nextTick(function () {
        main.style['padding-bottom'] = `${footer.offsetHeight}px`;
      });
    } else {
      if (!this.isMobile) {
        Vue.nextTick(function () {

          const header = document.querySelector('#app-header');
          const mainHeight = header.offsetHeight + footer.offsetHeight;

          main.style['min-height'] = `calc(100vh - ${mainHeight}px)`;
        });
      }
    }
  },
  methods: {
    isURL(link) {
      return (/https?:\/\//.test(link));
    },
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
      z-index: 999;
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
