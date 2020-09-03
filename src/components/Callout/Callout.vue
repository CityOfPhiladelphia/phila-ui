<template>
  <article class="message">
    <div :class="'message-body'">
      <template
        v-if="message"
      >
        {{ message }}
      </template>
      <template v-else>
        <template
          v-if="$slots['default']"
        >
          <slot name="default" />
        </template>
      </template>
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

