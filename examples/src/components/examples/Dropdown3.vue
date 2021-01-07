<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <dropdown
          v-model="value"
          desc="Dropdown description"
          placeholder="Dropdown Placeholder"
          :options="options"
          :text-key="textKey"
          :value-key="valueKey"
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