<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <checkbox
          v-model="value"
          label="Label for all checkboxes in this group"
          desc="Description for all checkboxes in this group"
          :options="options"
          errors="An example of an error message"
        />
        <pre>Selected option(s): {{ value }}</pre>
      </div>
    </div>
  </div>
</template>
<script>

import { Checkbox } from '@phila/phila-ui';
export default {
  components: {
    Checkbox,
  },
  data () {
    return {
      value: [],
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
    };
  },
};
</script>