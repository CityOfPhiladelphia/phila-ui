<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <text-area
          v-model="value"
          placeholder="Field placeholder"
          label="Field label"
          desc="Field description"
          errors="This field is invalid"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { TextArea } from '@phila/phila-ui';
export default {
  components: {
    TextArea,
  },
  data () {
    return {
      value: "",
    };
  },
};
</script>