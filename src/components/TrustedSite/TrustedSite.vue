<template>
  <div id="trusted-site">
    <div id="trusted-site-bar">
      <div class="container">
        <div class="level is-marginless">
          <div class="level-left">
            <div class="level-item">
              <img
                src="../../assets/images/phila-bell.svg"
                width="13px"
                height="auto"
              >City of Philadelphia
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              An official website of the City of Philadelphia government &nbsp; <a
                href="#"
                @click.prevent="tsdStatus = true"
              >Here's how you know</a>
            </div>
          </div>
        </div>
      </div>

      <div
        v-show="tsdStatus"
        id="trusted-site-details"
      >
        <div class="container">
          <div id="close-tsd">
            <span class="icon">
              <a
                href="#"
                @click="tsdStatus=false"
              ><i class="fas fa-times" /></a>
            </span>
          </div>
          <div class="columns is-vcentered is-marginless is-paddingless">
            <div class="column is-6">
              <div class="columns is-vcentered">
                <div
                  class="column is-narrow pl-0"
                >
                  <span class="icon circle-icon">
                    <i class="fas fa-lock" />
                  </span>
                  <span class="icon-text">
                    https://
                  </span>
                </div>
                <div class="column pl-1">
                  <div class="details">
                    The <strong>https://</strong> in the address bar means your information is encrypted and can not be accessed by anyone else
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6 pl-5">
              <div class="columns is-vcentered">
                <div class="column is-narrow">
                  <span class="icon circle-icon">
                    <i class="fas fa-university" />
                  </span>
                  <span class="icon-text">
                    .gov
                  </span>
                </div>
                <div class="column pl-0 pr-6">
                  <div class="details">
                    Only government entities in the U.S. can end in .gov
                  </div>
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
  data () {
    return {
      tsdStatus: false,
    };
  },
};
</script>

<style lang="scss" scoped>

  #trusted-site {
    color: $white;
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
      // letter-spacing: .9px
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
    .circle-icon {
      border-radius: 50%;
      background-color: $white;
      width: 1.5rem;
      height: 1.5rem;
      text-align: center;
      font-size: $size-medium;
      color: $ben-franklin-blue;
      margin-right: .5rem;
    }
    .icon-text {
      font-family: $family-secondary;
      font-size: $size-3;
      font-weight: $weight-semibold;
      line-height: 1.5rem;
    }
    .details {
      line-height: 1.1;
      font-size: 0.75rem;
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