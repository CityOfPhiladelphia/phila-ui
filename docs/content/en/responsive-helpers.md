---
title: Responsive Helpers
menuTitle: Responsive Helpers
category: "Other"
position: 900
badge: ""
---

PhilaUI includes a few responsive helpers that can be used as conditionals during the template rendering. Learn more at [installation-and-usage](/installation-and-usage#responsive-helpers).

## Helpers

The following are added to the `data` property in each component.
| Helper | Media Query |
| --- | --- |
| **isMobile** | `(max-width: 767px)` |
| **isTablet** | `(min-width: 768px) and (max-width: 1023px)` |
| **isDesktop** | `(min-width: 1024px)` |
| **isWideScreen** | `(min-width: 1152px)` |

## Usage

### Vue HTML template

```html
<div v-if="isMobile">
  Show this on mobile.
</div>
```

### Vue JS property

```js
methods: {
  someMethod () {
    if (this.isMobile) {
      return true;
    }
    return false;
  }
}
```

<alert type="warning">These Responsive Helpers rely on `window.matchMedia` to determine the current window size, thus they are not available on server side renderings.</alert>
