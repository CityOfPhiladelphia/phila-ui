<template>
  <div
    class="simple-card"
    :style="`height:${height}`"
  >
    <nav-link :link="link">
      <h3 class="is-4 simple-card-title">
        {{ title }}
      </h3>
      <div class="simple-card-body">
        {{ body }}
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
    height: {
      type: String,
      default: "200px",
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
};
</script>

<style lang="scss">
.simple-card {
  position: relative;
  a {
    text-decoration: none;
    font-weight: $weight-normal;
    padding: 0.938rem;
    display: block;
    border: 0;
    height: 100%;
  }
  background-color: $ghost-grey;
  .simple-card-title {
    color: $ben-franklin-blue-dark !important;
  }
  .simple-card-body {
    color: $grey-dark !important;
  }
  .simple-card-cta {
    position: absolute;
    bottom: 0;
    padding: 0 0 1rem 0;
    font-weight: $weight-semibold;
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
