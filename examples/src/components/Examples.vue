<template>
  <div>
    <router-view />
    <div class="back-to">
      <router-link :to="{ name: 'home' }">
        <button class="button is-secondary">
          More examples
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
  .back-to {
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>