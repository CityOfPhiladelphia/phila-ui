<template>
  <footer class="footer">
    <div class="has-text-centered">
      <ul class="inline-list">
        <li
          v-for="(link, index) in localLinks"
          :key="index"
        >
          <template v-if="typeof link.href === 'function'">
            <a
              v-bind="link.attrs || {}"
              @click.prevent="link.href"
            >
              {{ link.text }}
            </a>
          </template>
          <template v-else-if="!isURL(link.href)">
            <router-link
              :to="link.href"
              v-bind="link.attrs || {}"
            >
              {{ link.text }}
            </router-link>
          </template>
          <template v-else-if="isURL(link.href)">
            <a
              :href="link.href"
              v-bind="link.attrs || {}"
            >{{ link.text }}</a>
          </template>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  props: {
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
  methods: {
    isURL(link) {
      return (/https?:\/\//.test(link));
    },
  },
};
</script>
<style lang="scss" scoped>
  #app {
    padding-bottom: 46px;
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          display: inline-block;
          vertical-align: middle;
          margin: 0 1rem;
          a {
            color: inherit;
            &:hover {
              color: $electric-blue;
            }
          }
        }
      }
    }
  }
</style>
