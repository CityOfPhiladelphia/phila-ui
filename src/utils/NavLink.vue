<template>
  <a
    v-if="link.type === 'link'"
    v-bind="link.attrs || {}"
    :href="link.href"
    :class="{ 'is-active': link.active }"
    @click.prevent="link.click || null"
  >
    {{ link.text }}
  </a>
  <router-link
    v-else
    v-slot="{ href, navigate, isExactActive }"
    :to="{ name: link.href }"
  >
    <a
      :href="href"
      v-bind="link.attrs || {}"
      :class="{ 'is-exact-active': isExactActive }"
      @click="navigate"
    >
      {{ link.text }}
    </a>
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    link: {
      type: Object,
      default () {
        return {};
      },
    },
  },
};
</script>