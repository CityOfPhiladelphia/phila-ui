<template>
  <div id="app-logo">
    <a
      v-bind="appLogoLink"
      class="is-inline-block"
    >
      <img
        v-bind="appLogoImage"
      >
    </a>
  </div>
</template>
<script>
export default {
  props: {
    appLogoImage: {
      type: Object,
      default () {
        return null;
      },
    },

    /**
     * The logo link
    */
    appLogoLink: {
      type: Object,
      default () {
        return null;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  #app-logo {
    padding-right: 0.75rem;
    border-right: 1px solid $white;
    margin-right: 0.75rem;
  }
</style>