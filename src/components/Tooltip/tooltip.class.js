export class Tooltip {

  constructor(el, msg, mode, id) {

    this.htmlBody = document.getElementsByTagName('body')[0];
    this.tooltip = el;
    this.tooltipIcon = null;
    this.tooltipIconClasses = 'fas fa-info-circle';
    this.tooltipArrow = null;
    this.tooltipBox = null;
    this.tooltipText = msg;
    this.tooltipBoxClasses = 'tooltip-box';
    this.tooltipMessageClasses = 'tooltip-message';
    this.tooltipArrowClasses = 'tooltip-arrow';
    this.tooltipMode = mode || 'dark';
    this.currentTooltipPosition = null;
    this.initPositionSet = false;
    this.tooltipID = id;
    this.tooltipBtnID = `btn-${id}`;
    this.padding = 8;
    this.arrowAttrs = {
      height: 8,
      width: 16,
    };
    this.clickedToOpen = false;

    this.newTooltip();

  }

  newTooltip () {
    this.makeTooltipContainer();
    this.setTooltipEvents();
    this.setTooltipMsg();
    this.setTooltipMode();
    this.addTooltip();

    const self = this;

    //make sure tooltip is fully added before setting its init position
    var checkInt = setInterval(function () {
      const tp = document.getElementById(self.tooltipID);
      if (tp && tp.offsetHeight > 0) {
        self.addTooltipIcon();
        self.setInitTooltipPosition();
        self.updateArrowPosition();
        clearInterval(checkInt);
      }
    }, 500);

  }

  makeTooltipContainer () {

    //Tooltip arrow
    this.tooltipArrow = document.createElement('div');
    this.tooltipArrow.className = this.tooltipArrowClasses;

    //Tooltip box wrap
    this.tooltipBox = document.createElement('div');
    this.tooltipBox.className = this.tooltipBoxClasses;
    this.tooltipBox.setAttribute('id', this.tooltipID);

    //Tooltip message
    this.tooltipMessage = document.createElement('div');
    this.tooltipMessage.className = this.tooltipMessageClasses;

    //Tooltip info icon
    this.tooltipIcon = document.createElement('button');
    this.tooltipIcon.setAttribute('aria-label', 'tooltip');
    this.tooltipIcon.className = this.tooltipIconClasses;
    this.tooltipIcon.setAttribute('id', this.tooltipBtnID);

  }

  addTooltipIcon () {
    this.tooltip.appendChild(this.tooltipIcon);
  }

  addTooltip() {
    this.tooltipBox.appendChild(this.tooltipMessage);
    this.tooltipBox.appendChild(this.tooltipArrow);
    this.htmlBody.appendChild(this.tooltipBox);
  }

  setTooltipMode () {
    this.tooltipBox.className = this.tooltipBoxClasses;
    this.tooltipBox.classList.add(this.tooltipMode);
  }

  setTooltipMsg () {
    this.tooltipMessage.innerText = this.tooltipText;
  }

  setTooltipEvents () {

    const self = this;

    //when window resizes, recalculate
    window.addEventListener('resize', function () {
      self.updateTooltipPosition();
    }, true);

    //when tooltip icon mouse over
    this.tooltipIcon.addEventListener('mouseenter', function () {
      self.updateTooltipPosition();
      self.showTooltip();
    });

    //hides tooltip on scroll, prevents tooltip from showing out of place while scrolling
    window.addEventListener('scroll', function () {
      if (self.tooltipBox.classList.contains('show')) {
        self.hideTooltip();
      }
    });

    //when focused (tabbed)
    this.tooltipIcon.addEventListener('focus', function () {
      self.updateTooltipPosition();
      self.showTooltip();
    });

    //when on mouse out
    this.tooltipIcon.addEventListener('mouseleave', function () {
      //on close if user did not click to open
      if (!self.clickedToOpen) {
        self.hideTooltip();
      }
    });

    //when unfocused (tabbed away)
    this.tooltipIcon.addEventListener('blur', function () {
      self.hideTooltip();
    });

    //if clicked to open tooltip only allow clicking elsewhere to close it
    this.tooltipIcon.addEventListener('click', function () {
      self.clickedToOpen = true;
      self.updateTooltipPosition();
      self.toggleTooltip();
    }, false);


    //hide when clicking anywhere but on its own icon
    window.addEventListener('click', function (event) {
      if (event.target !== self.tooltipIcon && self.clickedToOpen) {
        self.hideTooltip();
        self.clickedToOpen = false;
      }
    });

  }

  toggleTooltip() {
    if (this.clickedToOpen) {
      this.showTooltip();
    } else {
      this.hideTooltip();
    }
  }

  showTooltip () {
    this.tooltipBox.classList.add('show');
    this.tooltipBox.setAttribute('aria-hidden', false);
  }

  hideTooltip () {
    this.tooltipBox.classList.remove('show');
    this.tooltipBox.setAttribute('aria-hidden', true);
  }

  updateArrowPosition () {

    const iconPosition = this.tooltipIcon.getBoundingClientRect();
    const currentPosition = this.tooltipBox.getBoundingClientRect();

    this.tooltipArrow.style.left = `${iconPosition.left + (this.tooltipIcon.offsetWidth / 2) - (this.arrowAttrs.width / 2)}px`;

    if (currentPosition.top > iconPosition.top) {
      this.tooltipArrow.style.top = `${currentPosition.top - this.arrowAttrs.height * 2}px`;
      this.tooltipArrow.classList.add('arrow-up');
    } else {
      this.tooltipArrow.style.top = `${currentPosition.top + this.tooltipBox.offsetHeight}px`;
      this.tooltipArrow.classList.remove('arrow-up');
    }

  }

  setInitTooltipPosition () {

    const iconPosition = this.tooltipIcon.getBoundingClientRect();

    this.tooltipBox.style.left = `${(iconPosition.left + this.tooltipIcon.offsetWidth / 2) - (this.tooltipBox.offsetWidth / 2)}px`;

    this.tooltipBox.style.top = `${iconPosition.top - this.tooltipBox.offsetHeight - this.arrowAttrs.height}px`;

  }

  updateTooltipPosition(init = true) {

    if (init) {
      this.setInitTooltipPosition();
    }

    const windowWidth = window.innerWidth;

    let maxWidth = windowWidth - (this.padding * 2);

    if (maxWidth <= 500) {
      this.tooltipBox.style.maxWidth = `${maxWidth}px`;
    }

    const iconPosition = this.tooltipIcon.getBoundingClientRect();
    const currentPosition = this.tooltipBox.getBoundingClientRect();

    //if position x is offscreen
    if (currentPosition.left < this.padding) {

      this.tooltipBox.style.left = `${this.padding}px`;
      this.tooltipBox.style.top = `${iconPosition.top - this.tooltipBox.offsetHeight - this.arrowAttrs.height}px`;

      this.updateTooltipPosition(false);
      return;

    } else if (currentPosition.left + this.tooltipBox.offsetWidth > windowWidth - this.padding) {


      this.tooltipBox.style.left = `${window.innerWidth - this.padding - this.tooltipBox.offsetWidth}px`;
      this.tooltipBox.style.top = `${iconPosition.top - this.tooltipBox.offsetHeight - this.arrowAttrs.height}px`;

      this.updateTooltipPosition(false);
      return;

    } else if (currentPosition.top < this.padding) {

      this.tooltipBox.style.left = `${currentPosition.left}px`;
      this.tooltipBox.style.top = `${iconPosition.bottom + this.arrowAttrs.height}px`;

      this.updateTooltipPosition(false);
      return;

    }

    this.updateArrowPosition();

  }

}