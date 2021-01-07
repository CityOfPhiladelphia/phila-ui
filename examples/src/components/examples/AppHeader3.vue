<template>
  <div>
    <app-header
      app-title="My Application"
      app-subtitle="My application subtitle"
    >
      <tabs-nav slot="tabs-nav">
        <a
          href="#"
          class="is-active"
        >Tab 1</a>
        <a href="#">Tab 2</a>
        <a href="#">Tab 3</a>
      </tabs-nav>
    </app-header>
    <main />
  </div>
</template>
<script>
import { AppHeader, TabsNav } from '@phila/phila-ui';
export default {
  components: {
    AppHeader,
    TabsNav,
  },
};
</script>