<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <radio
          v-model="value"
          label="Label for all radio buttons in this group"
          desc="Description for all radio buttons in this group"
          :options="options"
        />
        <pre>Selected option: {{ value }}</pre>
      </div>
    </div>
  </div>
</template>
<script>

import { Radio } from '@phila/phila-ui';
export default {
  components: {
    Radio,
  },
  data () {
    return {
      value: "",
      options: {
        "option-1": "Option 1",
        "option-2": "Option 2",
        "option-3": "Option 3",
      },
    };
  },
};
</script>