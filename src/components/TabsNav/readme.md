## Code Samples
### Props vs Slots Links
The Tabbed Navigation links can be added via props using the [Navigation Links](/components/NavLinks) format.
```html
  <tabs-nav
    :links="myTabbedNavLinks"
  />
```

Or the links can be added using the default slot. The default slot accepts any number of anchors.
```html
  <tabs-nav>
    <a href="/home">Home</a>
    <a href="/about">About</a>
  </tabs-nav>
```
