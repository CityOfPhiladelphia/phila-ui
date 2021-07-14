## Code Samples
### Props vs Slots Links
The footer links can be added via props using the [Navigation Links](/components/NavLink) format.
```html
  <app-footer
    :links="myFooterLinks"
  />
```

Or the links can be added using the default slot. The default slot accepts an unordered list of links.
```html
  <app-footer>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/terms-and-conditions">Terms & Conditions</a>
      </li>
    </ul>
  </app-footer>
```

### Sticky Footer
The footer can be fixed to the bottom of the page, so it's always visible.
```html
  <app-footer
    :is-sticky="true"
  />
```

### Mobile Display
By default the footer is hidden on mobile devices. If the links in the footer are important, they should be added to the [Mobile Navigation](/components/MobileNav).

If the footer must be displayed on mobile, set ``is-hidden-mobile`` to ``false``.
```html
  <app-footer
    :is-hidden-mobile="false"
  />
```

## Live Examples
<alert type="warning">Open the iframe below in a new window as the footer is by default hidden on smaller screens</alert>

### Non-sticky, using the slot
<example name="AppFooter1" height="300" :options="{ horizontal: true}"></example>

### Sticky, using the link prop
<example name="AppFooter2" height="300" :options="{ horizontal: true}"></example>