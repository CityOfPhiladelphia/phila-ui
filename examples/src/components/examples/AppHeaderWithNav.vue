<template>
  <div>
    <app-header
      app-title="My Application"
      app-subtitle="My application sub-title"
      app-link="/"
    >
      <tabs-nav
        slot="tabs-nav"
        :links="links"
      />
      <dropdown-nav
        slot="dropdown-nav"
        :nav="dropdownLinks"
      />
      <!-- <lang-selector slot="lang-selector-nav"
        :languages="myLanguages" /> -->
    </app-header>
    <main />
  </div>
</template>
<script>
import { AppHeader, TabsNav, DropdownNav } from '@phila/phila-ui';
export default {
  components: {
    AppHeader,
    TabsNav,
    DropdownNav,
  },
  data () {
    return {
      brandingImage: {
        src: "https://www.phila.gov/assets/images/city-of-philadelphia-yellow-white.png",
        alt: "City of Philadelphia logo",
        width: "200px",
      },
      brandingLink: {
        href: "https://www.phila.gov",
        target: "_blank",
      },
      links: [
        {
          text: 'Link 1',
          href: 'examples',
        },
        {
          text: 'Link 2',
          href: '/examples/app-header-with-nav',
        },
      ],
      dropdownLinks: {
        button: "Options",
        links: [
          {
            href: "profile",
            text: "Profile",
          },
          {
            href: "logout",
            text: "Logout",
          },
        ],
      },
    };
  },
};
</script>