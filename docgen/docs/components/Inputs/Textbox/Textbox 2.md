# Textbox

## Props

| Prop name     | Description                             | Type           | Values | Default                                                  |
| ------------- | --------------------------------------- | -------------- | ------ | -------------------------------------------------------- |
| id            | Random id is generated if none provided | string         | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}` |
| error         | Error message                           | string         | -      | null                                                     |
| errorMessages | VeeValidate custom errror messages      | object         | -      | {}                                                       |
| label         |                                         | string         | -      | ''                                                       |
| placeholder   |                                         | string         | -      | 'Insert placeholder here'                                |
| type          |                                         | string         | -      | 'text'                                                   |
| value         |                                         | string\|number | -      | ""                                                       |

## Events

| Event name | Type | Description |
| ---------- | ---- | ----------- |
| input      |      |
| change     |      |

---

### Examples

```jsx
<textbox />
```
