<template>
  <div
    class="simple-card"
    :style="fixedHeight !== '' ? `height: ${fixedHeight}`: ''"
    :class="fixedHeight !== '' ? `fixed-height`: ''"
  >
    <nav-link :link="link">
      <h3 class="is-3 simple-card-title">
        {{ title }}
      </h3>
      <div class="simple-card-body">
        <p>{{ body }}</p>
      </div>
      <div class="simple-card-cta">
        {{ link.text }}
      </div>
    </nav-link>
  </div>
</template>

<script>
/**
 * A helper simple card layout for text content.
 * @niceName Simple Card
 * @group Other
 * @position 305
 * @noExport
 */
import NavLink from '@/components/NavLink/NavLink.vue';

export default {
  components: {
    NavLink,
  },
  props: {
    fixedHeight: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'My Card',
    },
    body: {
      type: String,
      default: 'My Card description',
    },
    link: {
      type: Object,
      default () {
        return {
          text: 'My Link',
          href: '/',
        };
      },
    },
  },
  mounted () {
    if (this.fixedHeight === '') {
      const cards = document.getElementsByClassName('simple-card');
      let height = 0;
      for(let i = 0; i < cards.length; i++){
        if (cards[i].clientHeight > height) {
          height = cards[i].clientHeight;
          console.log(height);
        }
      }
      for(let x = 0; x < cards.length; x++){
        cards[x].style.visibility = 'visible';
        cards[x].style.height = height + 'px';
      }
    }
  },
};
</script>

<style lang="scss">
.simple-card {
  visibility: hidden;
  position: relative;
  &.fixed-height {
    visibility: visible;
  }
  a {
    text-decoration: none;
    font-weight: $weight-normal;
    padding: 1rem 1rem 0.875rem 1rem;
    display: block;
    border: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  background-color: $ghost-grey;
  .simple-card-title {
    color: $ben-franklin-blue-dark !important;
  }
  .simple-card-body {
    color: $grey-dark !important;
    position: relative;
    flex-grow: 1;
  }
  .simple-card-cta {
    position: relative;
    padding: 1rem 0 0 0;
    font-weight: $weight-normal;
    &:after {
      font-family: "Font Awesome 5 Pro";
      font-size: large;
      content: "\f105";
      position: inherit;
      padding-left: 0.5rem;
      top: 1px;
    }
  }
  &:hover {
    background-color:  $ben-franklin-blue-dark !important;
    .simple-card-title {
      color: $white !important;
    }
    .simple-card-body {
      color: $white !important;
    }
    .simple-card-cta {
      color: $white !important;
    }
  }
}
</style>
