## Code Samples
### Props vs Slots Links
The Dropdown Navigation links can be added via props:
```html
  <dropdown-nav
    :links="myDropdownNavLinks"
  />
```

```js
myDropdownNavLinks: {
  button: "Options", //trigger
  links: [
    {
      href: "profile",
      text: "Profile",
    },
    {
      href: "logout",
      text: "Logout",
    }
  ]
}
```

<alert>The key ```links``` uses the same format as the [Navigation Links](/components/NavLinks).</alert>

Or the links can be added using the default slot. The default slot accepts a ```<button>``` which acts as the trigger, followed by a ```<ul>``` of links.

```html
  <dropdown-nav>
    <button>Options</button>
    <ul>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li>
        <a href="/logout">Logout</a>
      </li>
    </ul>
  </dropdown-nav>
```
