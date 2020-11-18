<template>
  <div id="tabs-nav">
    <template v-if="links.length > 0">
      <template v-for="(link, index) in links">
        <nav-link
          :key="`mtl-${index}`"
          :link="link"
        />
      </template>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>
<script>
import NavLink from '@/utils/NavLink.vue';

export default {
  name: 'TabsNav',
  components: {
    NavLink,
  },
  props: {
    links: {
      type: Array,
      default () {
        return [];
      },
    },
  },
};
</script>
<style lang="scss">
  #tabs-nav {
    a {
      display: inline-block;
      background-color: $electric-blue;
      color: $grey-dark;
      font-size: $size-small;
      padding: 0.5rem 1.125rem;
      margin-right: 0.5rem;
      &.is-active {
        background-color: $white;
      }
    }
  }
</style>