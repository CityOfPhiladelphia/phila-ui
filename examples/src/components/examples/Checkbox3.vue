<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <checkbox
          v-model="value"
          label="Label for all checkboxes in this group"
          desc="Description for all checkboxes in this group"
          :options="options"
          :text-key="textKey"
          :value-key="valueKey"
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
      textKey: 'text',
      valueKey: 'value',
      options: [
        {
          "value": "option-value-1",
          "text": "Option 1",
        },
        {
          "value": "option-value-2",
          "text": "Option 2",
        },
        {
          "value": "option-value-3",
          "text": "Option 3",
        },
      ],
    };
  },
};
</script>