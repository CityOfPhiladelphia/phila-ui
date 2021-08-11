<template>
  <div
    ref="tooltip"
    class="tooltip"
  >
    <i
      ref="tooltip-icon"
      class="fas fa-info-circle"
    />
  </div>
</template>

<script>
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
    position: {
      type: String,
      default: 'auto',
      validator (position) {
        const positions = [ 'auto', 'top-center', 'bottom-center', 'top-right', 'bottom-right', 'right' ];
        if (!positions.includes(position)) {
          console.error(`${position} is not a valid position.`);
          return false;
        }
        return true;
      },
    },
  },
  data () {
    return {
      tooltipId: null,
      clickedToOpen: false,
    };
  },
  mounted () {

    let self = this;

    const tooltipIcon = this.$refs['tooltip-icon'];
    this.addTooltip(tooltipIcon);
    const tooltipMessage = document.getElementById(this.tooltipId);

    tooltipIcon.addEventListener('mouseover', function () {
      this.clickedToOpen = false;
      self.setTooltipPosition(tooltipMessage, tooltipIcon);
      tooltipMessage.classList.add('show');
    });

    tooltipIcon.addEventListener('mouseout', function () {
      if (!self.clickedToOpen) {
        tooltipMessage.classList.remove('show');
      }
    });

    tooltipIcon.addEventListener('click', function () {
      self.clickedToOpen = true;
      if (!tooltipMessage.classList.contains('show')) {
        tooltipMessage.classList.remove('show');
      }
    });

    document.addEventListener('click', function (event) {
      if (event.target !== tooltipMessage && event.target !== tooltipIcon) {
        tooltipMessage.classList.remove('show');
        self.clickedToOpen = false;
      }
    });

  },
  methods: {
    isOffScreen (x, y) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const padding = 0;
      if (
        x < padding ||
        x > windowWidth ||
        y < padding ||
        y > windowHeight
      ) {
        return true;
      }
      return false;
    },
    setTooltipPosition (tooltipBox, tooltipIcon) {

      //arrow heigh offset
      const arrowHeight = 13; //8 (arrow) + 5 (prevent collision)

      //get icon positions top, right, bottom, left
      const iconPosition = tooltipIcon.getBoundingClientRect();

      const iconPositionXCenter = tooltipIcon.clientWidth / 2 + iconPosition.left;
      const iconPositionYCenter = tooltipIcon.clientHeight / 2 + iconPosition.top;

      const tooltipXCenter = tooltipBox.clientWidth / 2;
      const tooltipYCenter = tooltipBox.clientHeight / 2;

      let positionsCoordinates = [
        {
          name: 'top-center',
          x: iconPositionXCenter - tooltipXCenter,
          y: iconPosition.top - tooltipBox.clientHeight - arrowHeight,
          arrowX: 'bottom',
          arrowY: 'center',
        },
        {
          name: 'bottom-center',
          x: iconPositionXCenter - tooltipXCenter,
          y: iconPosition.bottom + arrowHeight,
          arrowX: 'top',
          arrowY: 'center',
        },
        {
          name: 'right',
          x: iconPosition.right + arrowHeight,
          y: iconPositionYCenter - tooltipYCenter,
          arrowX: 'left-side',
          arrowY: '',
        },
        {
          name: 'top-right',
          x: iconPosition.right - tooltipBox.clientWidth + (arrowHeight / 2),
          y: iconPosition.top - tooltipBox.clientHeight - arrowHeight,
          arrowX: 'right',
          arrowY: 'bottom',
        },
        {
          name: 'bottom-right',
          x: iconPosition.right - tooltipBox.clientWidth + (arrowHeight / 2),
          y: iconPosition.bottom + arrowHeight,
          arrowX: 'right',
          arrowY: 'top',
        },
      ];

      //set the default to top-center
      let finalPosition = positionsCoordinates[0];

      //if position is not auto
      if (this.position !== 'auto') {
        finalPosition = positionsCoordinates.filter(position => position.name === this.position)[0];
      } else {
        for (let i=1; i < positionsCoordinates.length; i++) {
          if (!this.isOffScreen(positionsCoordinates[i].x, positionsCoordinates[i].y)) {
            finalPosition = positionsCoordinates[i];
            break;
          }
        }
      }

      console.log(finalPosition);

      tooltipBox.classList.add(`arrow-${finalPosition.arrowX}`);
      tooltipBox.classList.add(`arrow-${finalPosition.arrowY}`);

      tooltipBox.style.transform = `translate(${finalPosition.x}px, ${finalPosition.y}px)`;

    },
    genId () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    },
    addTooltip () {
      let tooltipMessage = document.createElement('div');
      this.tooltipId = `ttip-${this.genId()}-${this.genId()}`;
      tooltipMessage.setAttribute('id', this.tooltipId);
      tooltipMessage.classList.add('tooltip-message');
      tooltipMessage.classList.add('tooltip-arrow');
      tooltipMessage.innerText = this.message;
      const body = document.getElementsByTagName('body')[0];
      body.append(tooltipMessage);
    },
  },
};
</script>

<style lang="scss">
  .tooltip {
    display: inline-block;
    margin-left: rem-calc(10px);
    cursor: pointer;
    i {
      color: $ben-franklin-blue-dark;
    }
  }
  .tooltip-message {
    display: block;
    visibility: hidden;
    z-index: -100;
    color: $white;
    background-color: $grey-dark;
    font-size: 12px;
    padding: 16px 8px 8px 8px;
    width: auto;
    max-width: 500px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;

    &.tooltip-arrow {

      &:after {
        position: absolute;

        content: "";
        border: solid 8px transparent;
      }

      &.arrow-top {
        &:after {
          top: -16px;
          border-bottom-color: $grey-dark;
        }
      }

      &.arrow-bottom {
        &:after {
          bottom: -16px;
          border-top-color: $grey-dark;
        }
      }

      &.arrow-left {
        &:after {
          left: 0px;
        }
      }

      &.arrow-right {
        &:after {
          right: 8px;
        }
      }

      &.arrow-center {
        &:after {
          left: 50%;
          transform: translateX(-50%);
        }
      }

      &.arrow-left-side {
        &:after {
          left: -16px;
          top: 50%;
          transform: translateY(-50%);
          border-right-color: $grey-dark;
        }
      }

    }

    &.light {
      color: $grey-dark;
      background-color: #f0f0f0;
    }
    &.show {
      visibility: visible;
      opacity: 1;
      z-index: 9999;
    }
  }
</style>