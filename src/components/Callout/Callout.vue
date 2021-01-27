<template>
  <div
    class="message"
    :class="messageType"
  >
    <div class="message-body">
      <template
        v-if="message"
      >
        {{ message }}
      </template>
      <template v-else>
        <template
          v-if="$slots['default']"
        >
          <!-- @slot Alternative message -->
          <slot name="default" />
        </template>
      </template>
    </div>
  </div>
</template>
<script>
/**
 * Displays messages and warnings
 * @niceName Callout / Message
 * @group Other
 * @position 300
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
    },

    /**
     * The type of message
     * @values info, success, warning, danger
    */
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    messageType () {
      let t = '';
      if (this.type !== '') {
        t = `is-${this.type}`;
      }
      return t;
    },
  },
};
</script>

