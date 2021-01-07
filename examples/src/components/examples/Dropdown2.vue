<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <dropdown
          v-model="value"
          desc="Dropdown description"
          placeholder="Dropdown Placeholder"
          :options="options"
        />
        <pre>Selected option: {{ value }}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import { Dropdown } from '@phila/phila-ui';
export default {
  components: {
    Dropdown,
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