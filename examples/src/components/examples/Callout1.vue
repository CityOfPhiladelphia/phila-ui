<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <callout message="This is the default message" />
        <callout
          message="This is the info message"
          type="info"
        />
        <callout
          message="This is the success message"
          type="success"
        />
        <callout
          message="This is the warning message"
          type="warning"
        />
        <callout
          message="This is the danger message"
          type="danger"
        />
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