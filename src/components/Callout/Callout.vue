<template>
  <article class='message is-flyers-orange'>
    <!-- <div class="callout columns small-24"> -->
    <div :class="'message-body'">
      <p v-if="this.message"
         v-html="this.message"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Callout',
  computed: {
    message() {
      return this.$attrs.message ? this.$attrs.message.text : "";
    },
  }
};
</script>

<style lang="scss" scoped>

.message {
  &.is-flyers-orange {
    background-color: $ghost-gray;
    .message-body {
      border-color: $flyers-orange;
    }
  }
}

</style>
