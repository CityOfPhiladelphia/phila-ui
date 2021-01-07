<template>
  <div>
    <app-header
      app-title="My Application"
      app-subtitle="My application subtitle"
    />
    <main />
  </div>
</template>
<script>
import { AppHeader } from '@phila/phila-ui';
export default {
  components: {
    AppHeader,
  },
};
</script>