<template>
  <div
    ref="tooltip"
    class="tooltip"
    role="tooltip"
    :aria-describedby="tooltipId"
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
      savedPosition: null,
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
      tooltipMessage.setAttribute('aria-hidden', false);
    });

    tooltipIcon.addEventListener('mouseout', function () {
      if (!self.clickedToOpen) {
        tooltipMessage.classList.remove('show');
        tooltipMessage.setAttribute('aria-hidden', true);
      }
    });

    tooltipIcon.addEventListener('click', function () {
      self.clickedToOpen = true;
      if (!tooltipMessage.classList.contains('show')) {
        tooltipMessage.classList.remove('show');
        tooltipMessage.setAttribute('aria-hidden', true);
      }
    });

    //close on click outside
    document.addEventListener('click', function (event) {
      if (event.target !== tooltipMessage && event.target !== tooltipIcon) {
        tooltipMessage.classList.remove('show');
        tooltipMessage.setAttribute('aria-hidden', true);
        self.clickedToOpen = false;
      }
    });

    //on resize, clear saved position and tooltip message box size
    window.addEventListener('resize', function() {
      self.savedPosition = null;
      tooltipMessage.style.width = 'auto';
    }, true);

  },
  methods: {
    isOffScreen (x, y, w, h) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const padding = 20;
      if (
        x < padding ||
        x + w > windowWidth - padding ||
        y < padding ||
        y + h > windowHeight - padding
      ) {
        return true;
      }
      return false;
    },
    setTooltipPosition (tooltipBox, tooltipIcon) {

      //default classes
      tooltipBox.className = 'tooltip-message tooltip-arrow';

      //arrow heigh offset
      const arrowHeight = 13; //8 (arrow) + 5 (prevent collision)

      let finalPosition;

      if (!this.savedPosition) {

        let positionsCoordinates = [
          {
            coordinates: function () {
              const iconPosition = tooltipIcon.getBoundingClientRect();
              return {
                name: 'top-center',
                x: (tooltipIcon.offsetWidth / 2 + iconPosition.left) - (tooltipBox.offsetWidth / 2),
                y: iconPosition.top - tooltipBox.offsetHeight - arrowHeight,
                arrowX: 'bottom',
                arrowY: 'center',
              };
            },
          },
          {
            coordinates: function () {
              const iconPosition = tooltipIcon.getBoundingClientRect();
              return {
                name: 'bottom-center',
                x: (tooltipIcon.offsetWidth / 2 + iconPosition.left) - (tooltipBox.offsetWidth / 2),
                y: iconPosition.bottom + arrowHeight,
                arrowX: 'top',
                arrowY: 'center',
              };
            },
          },
          {
            coordinates: function () {
              const iconPosition = tooltipIcon.getBoundingClientRect();
              return {
                name: 'right',
                x: iconPosition.right + arrowHeight,
                y: (tooltipIcon.offsetHeight / 2 + iconPosition.top) - (tooltipBox.offsetHeight / 2),
                arrowX: 'left-side',
                arrowY: '',
              };
            },

          },
          {
            coordinates: function () {
              const iconPosition = tooltipIcon.getBoundingClientRect();
              return {
                name: 'top-right',
                x: iconPosition.right - tooltipBox.offsetWidth + (arrowHeight / 2),
                y: iconPosition.top - tooltipBox.offsetHeight - arrowHeight,
                arrowX: 'right',
                arrowY: 'bottom',
              };
            },
          },
          {
            coordinates: function () {
              const iconPosition = tooltipIcon.getBoundingClientRect();
              return {
                name: 'bottom-right',
                x: iconPosition.right - tooltipBox.offsetWidth + (arrowHeight / 2),
                y: iconPosition.bottom + arrowHeight,
                arrowX: 'right',
                arrowY: 'top',
              };
            },
          },
        ];

        //interations counter
        let count = 0;

        //abort counter
        let runCount = 0;

        //loops through each position
        //if no position is suitable reduce tooltip width and try gain

        do {

          if (count === 5) {
            //if none of the positions work, reduce width to try again
            tooltipBox.style.width = tooltipBox.offsetWidth - 10 + 'px';
            count = 0;
          }

          finalPosition = positionsCoordinates[count].coordinates();

          //can't be running too long or browser will freeze
          if (runCount === 100) {
            console.log('aff... running too long');
            break;
          }

          runCount++;
          count++;

        }
        while (this.isOffScreen(finalPosition.x, finalPosition.y, tooltipBox.offsetWidth, tooltipBox.offsetHeight));

        this.savedPosition = finalPosition;

      } else {

        finalPosition = this.savedPosition;

      }

      tooltipBox.classList.add(`arrow-${finalPosition.arrowX}`);
      tooltipBox.classList.add(`arrow-${finalPosition.arrowY}`);

      tooltipBox.style.transform = `translate(${finalPosition.x}px, ${finalPosition.y}px)`;

    },
    randomID () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    },
    addTooltip () {
      let tooltipMessage = document.createElement('div');
      this.tooltipId = `ttip-${this.randomID()}-${this.randomID()}`;
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

    @media screen and (max-width: 500px) {
      max-width: 90%
    }

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