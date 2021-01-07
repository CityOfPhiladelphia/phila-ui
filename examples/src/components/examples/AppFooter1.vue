<template>
  <div>
    <app-header />
    <main>
      AppHeader added for footer positioning purposes.
    </main>
    <app-footer>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </app-footer>
  </div>
</template>
<script>
import { AppFooter, AppHeader } from '@phila/phila-ui';
export default {
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>