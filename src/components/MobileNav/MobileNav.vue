<template>
  <div
    id="mobile-nav"
    :class="{ 'opened': mNavOpened }"
  >
    <a
      href="#"
      class="icon is-size-2"
      @click.prevent="mobileNavToggle"
    >
      <i
        v-show="!mNavOpened"
        class="fa fa-bars"
      />
      <i
        v-show="mNavOpened"
        class="fa fa-times"
      />
    </a>
    <transition name="slide-in">
      <div
        v-show="mNavOpened"
        id="mobile-menu-wrap"
      >
        <div id="mobile-menu">
          <!-- Allows for additional content before the main list of items -->
          <slot name="before" />
          <template v-if="links.length > 0">
            <ul>
              <li
                v-for="(link1, index1) in links"
                :key="`${link1.text}-${index1}`"
              >
                <nav-link
                  :link="formatLink(link1)"
                />
                <ul v-if="link1.submenu">
                  <li
                    v-for="(link2, index2) in link1.submenu"
                    :key="`${link2.text}-${index2}`"
                  >
                    <nav-link :link="formatLink(link2)" />
                    <ul v-if="link2.submenu">
                      <li
                        v-for="(link3, index3) in link2.submenu"
                        :key="`${link3.text}-${index3}`"
                      >
                        <nav-link :link="link3" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </template>
          <template v-else>
            <!-- The default slot accepts an unordered list of links which can be nested 2 times -->
            <slot />
          </template>
          <!-- Allows for additional content after the main list of items -->
          <slot name="after" />
        </div>
        <div id="mobile-menu-close-bar">
          <button
            class="button"
            @click.prevent="mobileNavToggle"
          >
            <span>Close</span>
            <span class="icon">
              <i class="fa fa-times" />
            </span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import NavLink from '@/utils/NavLink.vue';
import Vue from 'vue';
/**
 * @group Navigation
 * The mobile navigation.  Primarily a slot of AppHeader.
 */
export default {
  name: 'MobileNav',
  components: {
    NavLink,
  },
  props: {
    /**
     * An array of links (See NavLink component)
     */
    links: {
      type: Array,
      default () {
        return [];
      },
    },
  },
  data () {
    return {
      mNavOpened: false,
    };
  },
  mounted () {
    this.prepMobileNav();
  },
  methods: {
    formatLink (link) {

      //if link has submenu, automatically make it a native type link to avoid vue-router issues
      if (link.submenu) {
        link.type = 'native';
      }
      return link;
    },
    prepMobileNav () {

      const self = this;

      if (this.isMobile) {

        Vue.nextTick(function () {
          const header = document.querySelector('#app-header');
          const mobileMenuWrap = document.querySelector('#mobile-menu-wrap');
          const mobileMenu = document.querySelector('#mobile-menu');

          if (mobileMenuWrap) {
            console.log(header.offsetHeight);
            mobileMenuWrap.style['top'] = header.offsetHeight + 'px';
            mobileMenuWrap.style['height'] = `calc(100% - ${header.offsetHeight + 45}px)`;
          }

          const mobileNavList = mobileMenu.querySelectorAll('ul li');

          mobileNavList.forEach(listItem => {

            const nestedUl = listItem.querySelector('ul');

            if (nestedUl) {

              const nestingAnchor = listItem.querySelector('a');

              nestingAnchor.classList.add("has-submenu");

              nestingAnchor.addEventListener('click', function (event) {

                event.preventDefault();
                const a = event.target;
                const li = a.parentNode;

                //remove existing classes from siblings
                const siblings = li.parentNode.querySelectorAll('li');
                siblings.forEach(sibling => sibling !== li ? sibling.classList.remove('opened') : null);

                li.classList.toggle('opened');
              });
            } else {
            //Closes mobile menu on click when link/route changes
              listItem.querySelector(':scope > a').addEventListener('click', function (event) {

                const a = event.target;
                const li = a.parentNode;

                //remove existing classes from siblings
                const siblings = li.parentNode.querySelectorAll('li');
                siblings.forEach(sibling => sibling !== li ? sibling.classList.remove('opened') : null);

                self.mobileNavToggle();

              });
            }
          });

          //Find current/active page and open nesting to top
          const activeListItems = mobileMenu.querySelectorAll('ul li a.is-active, ul li a.router-link-exact-active');

          activeListItems.forEach(activeListItem => {
            let parent = activeListItem.parentNode.parentNode.parentNode;
            while (parent.tagName === "LI") {
              const hasSubmenu = parent.querySelector('a.has-submenu');
              if (hasSubmenu) {
                parent.classList.add('opened');
                parent = parent.parentNode.parentNode;
              }
            }
          });
        });

      }
    },
    mobileNavToggle () {

      let body = document.querySelector('body');
      body.classList.toggle('m-nav-opened');

      this.mNavOpened = !this.mNavOpened;

    },
  },
};
</script>

<style lang="scss" scoped>
  #mobile-nav {
    padding: 0.5rem;
    &.opened {
      background-color: $ben-franklin-blue;
    }
    .icon {
      color: $white;
      width: 29px;
      height: 29px;
    }
  }

  #mobile-menu-wrap {
    z-index: 999;
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $ben-franklin-blue-dark;
    color: $white;
  }

  #mobile-menu-close-bar {
    button {
      background-color: $ben-franklin-blue;
      color: $white;
      font-weight: $weight-normal;
      font-size: $size-large;
    }
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
</style>

<style lang="scss">

  #mobile-menu {
    width: 100%;
    height: 100%;
    overflow: scroll;
    text-align: left;
    > ul {
      width: 100%;
      > li {
        list-style-type: none;
        border-bottom: solid 1px rgba(150, 201, 255, 0.22);
        transition: all 0.25s ease-in;
        &.is-active, &.router-link-exact-active {
          background-color: $ben-franklin-blue;
        }
        > a {
          color: $white;
          font-size: $size-large;
          padding: 1rem 3rem;
          display: block;
          position: relative;
          &.is-active, &.router-link-exact-active {
            background-color: $ben-franklin-blue;
            font-weight: $weight-semibold;
          }
          &.has-submenu {
            &:after {
              position: absolute;
              right: 1rem;
              top: 50%;
              transform: translateY(-50%);
              width: 20px;
              height: 2px;
              background-color: $white;
              display: block;
              transition: all 0.25s ease-in;
              content: "";
            }
            &:before {
              position: absolute;
              right: 1rem;
              top: 50%;
              transform: translateY(-50%) rotate(-90deg);
              width: 20px;
              height: 2px;
              background-color: $white;
              display: block;
              content: "";
              transition: all 0.25s ease-in;
              opacity: 1;
            }
          }
        }
        &.opened {
          border-top: 2px solid $ben-franklin-blue-light;
          border-bottom: 2px solid $ben-franklin-blue-light;
          > a {
            font-weight: $weight-semibold;
            &:before {
              transform: translateY(-50%) rotate(45deg);
            }
            &:after {
              transform: translateY(-50%) rotate(-45deg);
            }
          }
          > ul {
            opacity: 1;
            height: auto;
            padding: 0.75rem 0;
          }
        }
        > ul {
          transition: all 0.25s ease-in-out;
          opacity: 0;
          height: 0;
          overflow:hidden;
          width: 100%;
          padding: 0;
          background-color: #0c3664;
          > li {
            list-style-type: none;
            border: 0;
            &.is-active, &.router-link-exact-active {
              background-color: $ben-franklin-blue;
            }
            > a {
              color: $white;
              font-size: $size-large;
              padding: 1rem 1rem;
              display: block;
              margin: 0 2rem;
              &.is-active, &.router-link-exact-active {
                background-color: $ben-franklin-blue;
                font-weight: $weight-semibold;
              }
            }
            &.opened {
              > a {
                background-color: $ben-franklin-blue;
                font-weight: $weight-semibold;
              }
              > ul {
                opacity: 1;
                height: auto;
              }
            }
            > ul {
              transition: all 0.25s ease-in-out;
              opacity: 0;
              height: 0;
              overflow:hidden;
              width: 100%;
              padding: 0;
              > li {
                > a {
                  color: $white;
                  font-size: $size-large;
                  display: block;
                  padding: 1rem;
                  margin: 0 2rem;
                  &.is-active, &.router-link-exact-active {
                    background-color: $ben-franklin-blue;
                    font-weight: $weight-semibold;
                    &:before {
                      background-color: $ben-franklin-blue-light;
                    }
                  }
                  &:before {
                    border-radius: 50%;
                    border: 1px solid $ben-franklin-blue-light;
                    width: 10px;
                    height: 10px;
                    content: "";
                    display: inline-block;
                    margin-left: .75rem;
                    margin-right: .75rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .slide-in-enter-active {
    transition: all .2s ease-in;
  }
  .slide-in-leave-active {
    transition: all .2s ease-out;
  }
  .slide-in-enter, .slide-in-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
  }
</style>