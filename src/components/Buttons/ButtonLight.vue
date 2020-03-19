<template>
  <button
    :class="'button-light'"
    :style="style"
    @click.prevent="clickAction"
  >
    <slot />
  </button>
</template>

<script>

export default {
  name: 'ButtonLight',
};
</script>

<style scoped>

  .button-icon {
    float: left;
    margin-right: 5px;
  }

  .button-light {
    background-color: white;
    color:  #0f4d90;
    border: 1.49px solid #0f4d90;
    text-transform: uppercase;
  }

</style>
