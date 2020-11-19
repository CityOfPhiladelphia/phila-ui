<template>
  <div
    id="trusted-site"
  >
    <div
      id="trusted-site-bar"
    >
      <div
        class="container"
        :class="{ 'is-fluid' : isFluid }"
      >
        <div class="level is-marginless is-mobile">
          <div class="level-left">
            <div class="level-item">
              <a
                href="https://www.phila.gov"
                target="_blank"
              >
                <img
                  src="~/assets/images/phila-small-logo.svg"
                  width="139"
                  height="18"
                >
              </a>
            </div>
          </div>
          <div class="level-right">
            <div
              v-if="isMobile"
              class="level-item"
            >
              <a
                href="#"
                @click.prevent="updateStatus"
              >
                <span>An official website</span>
              </a>
              <span class="icon">
                <i class="fa fa-info-circle" />
              </span>
            </div>
            <div
              v-else
              class="level-item"
            >
              An official website of the City of Philadelphia government &nbsp; <a
                href="#"
                @click.prevent="updateStatus"
              >Here's how you know</a>
            </div>
          </div>
        </div>
      </div>
      <div
        v-show="tsdStatus"
        id="trusted-site-details"
        :class="{ 'is-fluid' : isFluid }"
      >
        <div class="container">
          <div id="close-tsd">
            <span class="icon">
              <a
                href="#"
                @click="tsdStatus=!tsdStatus"
              ><i class="fas fa-times" /></a>
            </span>
          </div>
          <div id="trusted-panel">
            <div class="columns is-centered is-marginless is-multiline is-tablet">
              <div class="column">
                <div class="trust-icon">
                  <span class="icon circle-icon">
                    <i class="fas fa-lock" />
                  </span>
                  <span class="icon-text">
                    https://
                  </span>
                </div>
                <div class="trust-details">
                  The <strong>https://</strong> in the address bar means your information is encrypted and can not be accessed by anyone else
                </div>
              </div>
              <div class="column">
                <div class="trust-icon-right">
                  <span class="icon circle-icon">
                    <i class="fas fa-university" />
                  </span>
                  <span class="icon-text">
                    .gov
                  </span>
                </div>
                <div class="trust-details-right">
                  Only government entities in the U.S. can end in .gov
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    isFluid: {
      type: Boolean,
      default () {
        return false;
      },
    },
  },
  data () {
    return {
      tsdStatus: false,
    };
  },
  methods: {
    updateStatus () {
      this.tsdStatus = !this.tsdStatus;
      this.$emit('update-status');
    },
  },
};
</script>

<style lang="scss" scoped>


  #trusted-site {
    color: $white;
    .container {
      @include until ($tablet) {
        padding-left: 1rem !important;
      }
    }
    a, strong {
      color: $white;
    }
  }

  #trusted-site-bar {
    background-color: $ben-franklin-blue;

    .level-left {
      img {
        margin-right: 0.188rem;
      }
      font-size: $size-small;
      font-weight: $weight-semibold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.45;
    }
    .level-right {
      font-size: 0.75rem;
      a {
        font-weight: $weight-semibold;
        text-decoration: underline;
      }
    }
  }

  #trusted-site-details {
    position: relative;
    background-color: #0c59a6;

    .trust-icon {
      width: 115px;
      display: inline-block;
      vertical-align: middle;
    }
    .trust-details {
      width: calc(100% - 120px);
      display: inline-block;
      vertical-align: middle;
      line-height: 1.1;
      font-size: 0.75rem;
    }
    .trust-icon-right {
      @extend .trust-icon;
      width: 75px;
      @include until ($tablet) {
        width: 115px;
      }
    }
    .trust-details-right {
      @extend .trust-details;
      width: calc(100% - 80px);
      @include until ($tablet) {
        width: calc(100% - 120px);
      }
    }
    .circle-icon {
      border-radius: 50%;
      background-color: $white;
      width: 1.5rem;
      height: 1.5rem;
      text-align: center;
      font-size: $size-medium;
      color: $ben-franklin-blue;
      margin-right: .1rem;
    }
    .icon-text {
      font-family: $family-secondary;
      font-size: $size-3;
      font-weight: $weight-semibold;
      line-height: 1.5rem;
    }
  }

  #trusted-panel {
    @media screen and (max-width: 767px) {
      padding: 0 3rem;
    }
    @media screen and (max-width: 600px) {
      padding: 0 2rem;
    }
    @media screen and (max-width: 500px) {
      padding: 0 1rem 0 0;
    }

    .columns > .column {
      padding-left: 0;
    }
    .columns > .column + .column {
      padding-right: 0;
    }
  }

  #close-tsd {
    position: absolute;
    top: 0;
    right: 0;
    font-size: $size-2;
    font-weight: $weight-normal;
    width: 3rem;
    height: 3rem;
    padding: 0.875rem;
    text-align: center;
  }

</style>