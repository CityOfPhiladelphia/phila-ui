<template>
  <div>
    <app-header
      app-title="My Application"
      app-subtitle="My application subtitle"
    >
      <dropdown-nav slot="dropdown-nav">
        <button>
          <span class="icon">
            <i class="fa fa-user-circle" />
          </span>
          <span>Account</span>
        </button>
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </dropdown-nav>
    </app-header>
    <main />
  </div>
</template>
<script>
import { AppHeader, DropdownNav } from '@phila/phila-ui';
export default {
  components: {
    AppHeader,
    DropdownNav,
  },
};
</script>