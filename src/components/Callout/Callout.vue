<template>
  <article class="message">
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
          <!-- The default slot allows for custom html -->
          <slot name="default" />
        </template>
      </template>
    </div>
  </article>
</template>
<script>
/**
 * Displays messages and warnings. Pass a class attribute to the component to change the callout color.
 * @niceName Callout / Message
 * @group Other
 * @position 300
 * @wip
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

