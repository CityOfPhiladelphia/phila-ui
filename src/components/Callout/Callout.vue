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
export default {
  name: 'Callout',
  props: {
    message: {
      type: String,
      default: 'Your message here.',
      required: true,
    },
  },
};
</script>
