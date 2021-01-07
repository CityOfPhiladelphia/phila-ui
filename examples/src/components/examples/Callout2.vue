<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <callout>
          This is the default message with a <a href="#">link</a>
        </callout>
        <callout class="is-info">
          This is the info message with a <a href="#">link</a>
        </callout>
        <callout class="is-success">
          This is the info message with a <a href="#">link</a>
        </callout>
        <callout class="is-warning">
          This is the info message with a <a href="#">link</a>
        </callout>
        <callout class="is-danger">
          This is the info message with a <a href="#">link</a>
        </callout>
      </div>
    </div>
  </div>
</template>

<script>
import { Callout } from '@phila/phila-ui';
export default {
  components: {
    Callout,
  },
};
</script>