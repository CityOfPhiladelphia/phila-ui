<template>
  <div class="dropdown-nav">
    <template v-if="nav.links.length > 0">
      <button>
        <span
          v-if="nav.icon"
          class="icon"
        >
          <i class="fas fa-user-circle" />
        </span>
        <span>{{ nav.trigger }}</span>
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
      <slot />
    </template>
  </div>
</template>

<script>
import NavLink from '@/utils/NavLink.vue';

export default {
  name: 'DropdownNav',
  components: {
    NavLink,
  },
  props: {
    nav: {
      type: Object,
      default () {
        return {
          trigger: 'My Link',
          icon: null,
          links: [],
        };
      },
    },
  },
  mounted () {
    this.addDropdownArrow();
  },
  methods: {
    addDropdownArrow () {
      const dropdowns = document.querySelectorAll('.dropdown-nav');
      if (dropdowns) {
        dropdowns.forEach(dropdown => {
          dropdown.querySelector('button').classList.add('navbar-link');
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
    &.is-active, &:hover {
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
      padding: 0.5rem 2.3rem 0.5rem 1rem;
      border: 0;
      transition: background-color, 0.25s ease-in-out;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background-color: $ben-franklin-blue;
      }
      &.navbar-link {
        vertical-align: middle;
        text-align: left;
        &:after {
          border-color: $white;
          right: 1rem;
          margin-top: -0.5rem;
        }
        .icon {
          vertical-align: middle;
          font-size: 1.4rem;
          padding-right: 0.5rem;
        }
      }
      @include until ($tablet) {
        span {
          display: none;
        }
        span.icon {
          display: inline-block;
        }
        &.navbar-link {
          padding: 0;
          &:after {
            display: none;
          }
        }
      }
    }
    ul {
      display: none;
      position: absolute;
      width: auto;
      background-color: $ben-franklin-blue;
      z-index: 999;
      li {
        float: right;
        width: 100%;
        a {
          padding: 1rem 2rem;
          color: $white;
          line-height: 1.1;
          width: 100%;
          display: block;
          &:hover, &.is-active, &.is-exact-active {
            background-color: $ben-franklin-blue-light;
            color: $grey-dark;
          }
          @include until ($tablet) {
            padding: 0.5rem 1rem;
          }
        }
      }
    }
  }
</style>
