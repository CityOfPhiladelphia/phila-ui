<template>
  <div class="sample-component">
    <slot />
  </div>
</template>
<script>
/**
* A sample component template. Start here when creating a new component for PhilaUI.
* @niceName Sample Component
* @group Other
* @position 1000
* @noExport
*/
export default {
  name: 'SampleComponent',
};
</script>
<style lang="scss" scoped>
  .sample-component {
    // some css
  }
</style>
