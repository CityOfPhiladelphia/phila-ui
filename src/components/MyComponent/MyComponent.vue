<template>
  <div class="render-components">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'MyComponent',
};
</script>
<style lang="scss" scoped>
  .render-components {
    @import '../../styles/all.scss';
  }
</style>
