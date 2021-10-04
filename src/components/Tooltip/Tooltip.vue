<template>
  <div
    ref="tooltip"
    class="tooltip"
    role="tooltip"
    :aria-describedby="tooltipId"
  />
</template>

<script>

import { Tooltip } from './tooltip.class';

/**
 * A tooltip which display a custum message on hover or click.
 * @niceName Tooltip
 * @group Other
 * @position 310
 */
export default {
  name: 'Tooltip',
  props: {
    mode: {
      type: String,
      default: 'dark',
      validator (mode) {
        return [ 'light', 'dark' ].includes(mode);
      },
    },
    message: {
      type: String,
      default: 'Default tooltip message',
      validator (message) {
        if (message.length <= 250) {
          return true;
        }
        console.error('The tooltip message should be no longer than 250 characters');
        return false;
      },
    },
  },
  data () {
    return {
      tooltipId: this.randomID(),
      clickedToOpen: false,
    };
  },
  mounted () {
    const el = this.$refs['tooltip'];
    new Tooltip(el, this.message, this.mode, this.tooltipId, this);
  },
  methods: {
    randomID () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    },
  },
};
</script>

<style lang="scss">
  .tooltip {
    display: inline-block;
    margin-left: 5px;
    vertical-align: middle;
    button {
      color: $ben-franklin-blue-dark;
      font-size: 25px;
      vertical-align: middle;
      border: 0;
      background-color: transparent;
      box-shadow: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      vertical-align: middle;
      position: relative;
      top: -2px;
    }
  }
  .tooltip-box {
    display: block;
    visibility: hidden;
    z-index: -100;
    width: auto;
    max-width: 500px;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    pointer-events: none;

    .tooltip-message {
      line-height: 20px;
      color: $white;
      background-color: $grey-dark;
      font-size: 12px;
      padding: 10px 8px 8px 8px;
      @media screen and (max-width: $tablet) {
        padding-top: 36px;
        &:before {
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          content: "\f00d";
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: 'Font Awesome 5 Pro', sans-serif;
          font-weight: 900;
          font-size: 20px;
        }
      }
    }

    @media screen and (max-width: 500px) {
      width: auto;
      max-width: 100%;
    }

    .tooltip-arrow {
      position: fixed;
      left: 0;
      top: 0;
      border: solid 8px transparent;
      border-top-color: $grey-dark;
      &.arrow-up {
        border-top-color: transparent;
        border-bottom-color: $grey-dark;
      }
    }

    &.light {
      $light-color: #f0f0f0;
      .tooltip-message {
        color: $grey-dark;
        background-color: $light-color;
      }

      .tooltip-arrow {
        border-top-color: $light-color;
        &.arrow-up {
          border-bottom-color: $light-color;
        }
      }
    }

    &.show {
      visibility: visible;
      opacity: 1;
      z-index: 9999;
    }
  }
</style>