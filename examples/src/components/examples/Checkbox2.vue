<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <checkbox
          v-model="value"
          label="Label for all checkboxes in this group"
          desc="Description for all checkboxes in this group"
          :options="options"
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
      options: {
        "option-1": "Option 1",
        "option-2": "Option 2",
        "option-3": "Option 3",
      },
    };
  },
};
</script>