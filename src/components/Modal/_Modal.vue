<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div class="modal-x">
      <button @click.prevent="close">
        <i class="fa fa-times" />
      </button>
    </div>
    <h2 class="modal-title">
      <template v-if="$slots['title']">
        <slot name="title" />
      </template>
      <template v-else>
        {{ title }}
      </template>
    </h2>
    <div
      v-if="$slots['body'] || body"
      ref="modal-content"
      class="modal-content"
    >
      <template v-if="$slots['body']">
        <slot name="body" />
      </template>
      <template v-else>
        {{ body }}
      </template>
    </div>

    <div
      class="modal-actions"
    >
      <template v-if="$slots['actions']">
        <slot name="actions" />
      </template>
      <template v-if="type === 'default'">
        <button
          class="button is-cta is-large"
          @click.prevent="close"
        >
          Close
        </button>
      </template>
    </div>
  </vue-final-modal>
</template>
<script>
import { VueFinalModal } from 'vue-final-modal';

export default {
  name: 'Modal',
  components: {
    VueFinalModal,
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'default',
      validator (value) {
        const types = [
          'default',
          'delete',
          'none',
        ];
        if (types.includes(value)) {
          return true;
        }
        return false;
      },
    },
    title: {
      type: String,
      default: 'Modal default title',
    },
    body: {
      type: String,
      default: 'Modal default body',
    },
  },
};

</script>

<style lang="scss">
  .vfm {
    .vfm__container {
      background-color: $white;
      border-top: 1rem solid $ben-franklin-blue-dark;
      width: 100%;
      max-width: 600px;
      height: auto;
      max-height: 572px;
      &.vfm--inset {
        top: 50%;
        left: 50%;
        right: auto;
        bottom: auto;
        transform-origin: center;
        transform: translate(-50%, -50%);
      }
      .vfm__content {
        position: relative;
        padding: 47px 15px 1rem 15px;
      }
    }
  }
  .modal-x {
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

  .modal-title {
    padding-right: 2rem;
    font-size: $size-1;
    margin-bottom: 1rem;
    line-height: $size-1;
  }

  .modal-content {
    width: 100%;
    max-height: 366px;
    overflow-y: scroll;
    &.with-scrollbar {
      margin: 0 -1rem;
      padding: 0.25rem 1rem;
      width: calc(100% + 2rem);
      border-top: 1px solid #797979;
      border-bottom: 1px solid #797979;
    }
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
    .button {
      margin-left: 32px;
      margin-bottom: 0;
    }
  }
</style>