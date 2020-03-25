<template>
  <article class="message">
    <div :class="'message-body'">
      <div
        v-html="message"
      />
    </div>
  </article>
</template>
<script>
/**
 * Use this component for messages and warnings. 
 */
export default {
  name: 'Callout',
  props: {
    /**
     * The message to be displayed
    */
    message: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
