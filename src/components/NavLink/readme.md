## Code Samples

### router-link
The NavLink Object when using it as a **router-link**.
```js
{
  href: 'vue-router route name' //the route name is used, and not the path
  attrs: Object //any other html anchor attributes
}
```

### regular link
The NavLink Object when using it as a **regular/native** link.
```js
{
  type: 'native',
  href: String, //url
  active: Boolean,
  click: Function,
  attrs: Object //any other html anchor attributes
}
```
