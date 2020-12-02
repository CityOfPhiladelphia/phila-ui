<template>
  <a
    v-if="link.type === 'native'"
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
      :class="{ 'is-active': isExactActive }"
      @click="navigate"
    >
      {{ link.text }}
    </a>
  </router-link>
</template>

<script>
/**
 * A link helper component. By default it accepts a router-link (most common), but it also accepts native links.
 * @niceName Navigation Link
 * @group Other
 * @position 305
 * @wip
 * @noExport
 */
export default {
  name: "NavLink",
  props: {
    /**
     * A link Object. ```{ type: [null/native], href: '', active: [bool], click: [func], attrs: 'all other anchor attributes'  }```. If using native links, set tyoe to ```native```.
     */
    link: {
      type: Object,
      default () {
        return {};
      },
    },
  },
};
</script>