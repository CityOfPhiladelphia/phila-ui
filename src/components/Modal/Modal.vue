<template>
  <div ref="modal-window" class="modal-window" :class="`modal-${type}`">
    <div v-if="type !== 'alert' && !hideXButton" class="modal-window-x">
      <button aria-label="close button" @click.prevent="close">
        <i class="fa fa-times" />
      </button>
    </div>
    <div class="modal-window-title">
      <span v-if="type === 'alert'" class="modal-alert-icon">
        <i class="fa fa-exclamation" />
      </span>
      <template v-if="$slots['title']">
        <!-- @slot Modal title -->
        <slot name="title" />
      </template>
      <template v-else>
        {{ title }}
      </template>
    </div>
    <div
      v-if="$slots['default'] || body"
      ref="modal-window-content"
      class="modal-window-content"
    >
      <template v-if="$slots['default']">
        <!-- @slot Modal body/content -->
        <slot name="default" />
      </template>
      <template v-else>
        {{ body }}
      </template>
    </div>

    <div class="modal-window-actions">
      <div class="buttons">
        <template v-if="$slots['actions-before']">
          <!-- @slot Actions buttons to append before default buttons -->
          <slot name="actions-before" />
        </template>
        <template v-if="!hideCloseButton && type !== 'alert'">
          <button class="button is-cta is-large" @click.prevent="close">
            Close
          </button>
        </template>
        <template v-if="!hideAlertButtons && type === 'alert'">
          <button class="button is-secondary is-large" @click.prevent="close">
            Cancel
          </button>
          <button
            class="button is-danger is-large"
            @click="$emit('deleteAction')"
          >
            {{ deleteButtonText }}
          </button>
        </template>
        <template v-if="$slots['actions-after']">
          <!-- @slot Actions buttons to append after default buttons -->
          <slot name="actions-after" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * A modal window component with basic styles for title, body, and action buttons.
 * @niceName Modal
 * @group Other
 * @position 302
 */
export default {
  name: "Modal",
  inheritAttrs: false,
  props: {
    /**
     * When type = default, hide the default CLOSE button
     */
    hideCloseButton: {
      type: Boolean,
      default: false,
    },
    /**
     * When type is = alert, hide the default CANCEL and DELETE buttons.
     */
    hideAlertButtons: {
      type: Boolean,
      default: false,
    },
    /**
     * Hide the X button.
     */
    hideXButton: {
      type: Boolean,
      default: false,
    },
    /**
     * Function called to close the window
     */
    close: {
      type: Function,
      required: true,
    },
    /**
     * Type of windows available:
     * 'default' type includes a CLOSE button
     * 'alert' type includes CANCEL and DELETE buttons
     * 'none' does not include anything
     */
    type: {
      type: String,
      default: "default",
      validator(value) {
        const types = ["default", "alert", "none"];
        if (types.includes(value)) {
          return true;
        }
        return false;
      },
    },
    /**
     * Title of the modal window
     * Shows only if the 'title' slot is not used
     */
    title: {
      type: String,
      default: "Modal window default title",
    },
    /**
     * Body/content of the modal window
     * Shows only if the 'default' slot is not used
     */
    body: {
      type: String,
      default: "Modal window default body.",
    },
    /**
     * Body/content of the modal window
     * Shows only if the 'default' slot is not used
     */
    deleteButtonText: {
      type: String,
      default: "Delete",
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-window {
  position: absolute;
  background-color: $white;
  border-top: 1rem solid $ben-franklin-blue-dark;
  width: 100%;
  max-width: 600px;
  height: auto;
  max-height: 572px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform-origin: center;
  transform: translate(-50%, -50%);
  padding: 47px 15px 1rem 15px;
  display: flex;
  flex-direction: column;
  @include until($tablet) {
    max-height: 100%;
  }
}
.modal-window-x {
  position: absolute;
  top: 20px;
  right: 1rem;
  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: $ben-franklin-blue-dark;
    font-weight: 900;
    font-size: 1.5rem;
  }
}

.modal-window-title {
  padding-right: 2rem;
  font-size: $size-1;
  margin-bottom: 1rem;
  line-height: $size-1;
}

.modal-window-content {
  width: 100%;
  max-height: 366px;
  overflow-y: scroll;
  flex-grow: 1;
  @include until($tablet) {
    max-height: 100%;
  }
}

.modal-window-actions {
  margin-top: 1.5rem;
  .buttons {
    justify-content: flex-end;
    &:last-child {
      margin-bottom: 0;
    }
    .button {
      margin-left: 0;
      &:not(:first-child) {
        margin-left: 2rem !important;
      }
      &:not(:last-child) {
        margin-right: 0;
      }
      margin-bottom: 0.5rem;
    }
  }

  .button {
    margin-left: rem-calc(32px);
    margin-bottom: 0;
  }
}

.modal-alert-icon {
  color: $love-park-red;
  font-size: 1.7rem;
}
</style>