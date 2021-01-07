<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <textbox
          v-model="value"
          placeholder="Field placeholder"
          label="Alternative label"
          desc="Field description"
          errors="An example of an error message"
        />
      </div>
    </div>
  </div>
</template>
<script>

import { Textbox } from '@phila/phila-ui';
export default {
  components: {
    Textbox,
  },
  data () {
    return {
      value: "",
    };
  },
};
</script>