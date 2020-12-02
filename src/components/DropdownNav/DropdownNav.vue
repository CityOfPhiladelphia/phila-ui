<template>
  <div
    class="dropdown-nav"
    :class="{ 'is-active' : isActive }"
    @click="isActive = !isActive"
  >
    <template v-if="nav.links.length > 0">
      <button>
        <span
          v-if="nav.icon"
          class="icon"
        >
          <i class="fas fa-user-circle" />
        </span>
        <span>{{ nav.button }}</span>
      </button>
      <ul>
        <template v-for="(link, index) in nav.links">
          <template v-if="link.type === 'link'">
            <li :key="`ddl-${index}`">
              <nav-link :link="link" />
            </li>
          </template>
          <template v-else>
            <li :key="`ddl-${index}`">
              <nav-link :link="link" />
            </li>
          </template>
        </template>
      </ul>
    </template>
    <template v-else>
      <!-- The default slot takes a ```button``` as the trigger, and an unordered list (```<ul>```) of links as the dropdown items. -->
      <slot />
    </template>
  </div>
</template>

<script>
import NavLink from 'components/NavLink/NavLink.vue';

/**
 * A dropdown navigation.  Primarily used as a slot of the [Application Header](/components/AppHeader).
 * @niceName Dropdown Navigation
 * @group Navigation
 * @position 125
 */
export default {
  name: 'DropdownNav',
  components: {
    NavLink,
  },
  props: {
    /**
     * An Object which includes the button (trigger), a FontAwesome icon (optional), and the list of links. See [Navigation Link](/components/NavLink)
     */
    nav: {
      type: Object,
      default () {
        return {
          button: 'My Items',
          icon: null,
          links: [],
        };
      },
    },
  },
  data () {
    return {
      isActive: false,
    };
  },
  mounted () {
    this.addDropdownArrow();
  },
  methods: {
    addDropdownArrow () {
      const dropdowns = document.querySelectorAll('.dropdown-nav');
      if (dropdowns) {
        dropdowns.forEach(dropdown => {
          const btn = dropdown.querySelector('button');
          btn.classList.add('navbar-link');
          if (this.isMobile) {
            btn.classList.add('is-arrowless');
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
  .dropdown-nav {
    text-align: left;
    position: relative;
    &.is-active {
      background-color: $ben-franklin-blue;
      ul {
        display: block;
      }
    }
    button {
      cursor: pointer;
      background-color: transparent;
      display: inline-block;
      color: $white;
      font-size: $size-small;
      font-weight: $weight-normal;
      padding: 0.5rem 2.3rem 0.5rem 0.75rem;
      border: 0;
      transition: background-color, 0.25s ease-in-out;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @include until ($tablet) {
        font-size: $size-2;
      }
      &:hover {
        background-color: $ben-franklin-blue;
        color: $white;
      }
      &.navbar-link {
        text-align: left;
        &:after {
          border-color: $white;
          right: 1rem;
          margin-top: -0.5rem;
        }
        .icon {
          vertical-align: middle;
          font-size: 1.4rem;
          @include until ($tablet) {
            font-size: $size-2;
          }
        }
      }
      @include until ($tablet) {
        padding: 0.5rem;
        &.navbar-link {
          line-height: 0;
          span {
            display: none;
          }
          span.icon {
            text-align: center;
            display: inline;
            padding: 0;
            width: 29px;
            height: 29px;
          }
        }
      }
    }
    ul {
      display: none;
      position: absolute;
      right: 0;
      background-color: $ben-franklin-blue;
      z-index: 999;
      width: auto;
      li {
        float: right;
        width: 100%;
        border-bottom: 1px solid $ben-franklin-blue-light;
        a {
          padding: 1rem 2rem;
          color: $white;
          line-height: 1.1;
          width: 100%;
          display: block;
          &:hover {
            background-color: $ben-franklin-blue-light;
            color: $grey-dark;
          }
        }
      }
    }
  }
</style>
