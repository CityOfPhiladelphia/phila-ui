# AppHeader

> This is the application's main header

## Props

| Prop name    | Description                                                                                                        | Type    | Values | Default                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | ------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| appLogoImage | The application logo. By default the City logo is used, however this could be used to display a department's logo. | object  | -      | {<br> src: "https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png",<br> alt: "City of Philadelphia logo",<br> width: 170,<br>} |
| appLogoLink  | The logo link                                                                                                      | object  | -      | {<br> href: "https://www.phila.gov",<br> target: "\_blank",<br>}                                                                                    |
| appTitle     | The application's title/name                                                                                       | string  | -      | ""                                                                                                                                                  |
| appSubtitle  | The application's subtitle                                                                                         | string  | -      | ""                                                                                                                                                  |
| appLink      | The application's link. By default it links to the root.                                                           | string  | -      | "/"                                                                                                                                                 |
| fluid        | Allows the header elements (logo, title, navigation...) to expand with the window width, or stay in the center     | boolean | -      | true                                                                                                                                                |
| isSticky     | Sticks the header to the top of the page                                                                           | boolean | -      | false                                                                                                                                               |

## Slots

| Name        | Description                                                               | Bindings |
| ----------- | ------------------------------------------------------------------------- | -------- |
| mobile-menu | The mobile-menu slot allows you to pass extra navigation for mobile usage |          |
| default     | The default slot is used to add navigation items                          |          |

---

### Examples

**A simple header with application title and subtitle**

```js
<app-header appTitle="My Application" appSubtitle="something about my app" />
```
