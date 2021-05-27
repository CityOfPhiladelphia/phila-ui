---

title: Navigation Link
menuTitle: Navigation Link
description: A helper component that creates router-links and links. It assumes all links are a `router-link` (most common), but a non-router link can also be used.
category: Components | Other
position: 305
badge:

---

A helper component that creates router-links and links. It assumes all links are a `router-link` (most common), but a non-router link can also be used.

<alert type="warning">This component is NOT exported.</alert>

## Props

| Prop name | Description                                              | Type   | Values | Default |
| --------- | -------------------------------------------------------- | ------ | ------ | ------- |
| link      | A link Object. See more in [Code Samples](#code-samples) | object | -      | {}      |

## Code Samples

### router-link

The NavLink Object when using it as a **router-link**.

```js
{
  href: "vue-router route name"; //the route name is used, and not the path
  attrs: Object; //any other html anchor attributes
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
