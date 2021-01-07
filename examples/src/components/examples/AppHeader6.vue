<template>
  <div>
    <app-header
      app-title="My Application"
      app-subtitle="My application subtitle"
    >
      <mobile-nav slot="mobile-nav">
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Nest Link 3</a>
            <ul>
              <li>
                <a href="#">Link 3.1 Level 2</a>
              </li>
              <li>
                <a href="#">Link 3.2 Level 2</a>
              </li>
              <li>
                <a href="#">Link 3.3 Level 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Nested Link 4</a>
            <ul>
              <li>
                <a href="#">Link 4.1 Level 2</a>
              </li>
              <li>
                <a href="#">Nested Link 4.2 Level 2</a>
                <ul>
                  <li>
                    <a href="#">Link 4.2.1 Level 3</a>
                  </li>
                  <li>
                    <a href="#">Link 4.2.2 Level 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </mobile-nav>
    </app-header>
    <main>
      <strong>The mobile navigation is only visible when the browser window is smaller than 768px.
      </strong>
    </main>
  </div>
</template>
<script>
import { AppHeader, MobileNav } from '@phila/phila-ui';
export default {
  components: {
    AppHeader,
    MobileNav,
  },
};
</script>