# TextArea

## Props

| Prop name     | Description                             | Type           | Values | Default                                                  |
| ------------- | --------------------------------------- | -------------- | ------ | -------------------------------------------------------- |
| id            | Random id is generated if none provided | string         | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}` |
| error         | Error message                           | string         | -      | null                                                     |
| errorMessages | VeeValidate custom errror messages      | object         | -      | {}                                                       |
| value         |                                         | string\|number | -      | ""                                                       |
| label         |                                         | string         | -      | ''                                                       |
| placeholder   |                                         | string         | -      | 'Insert label placeholder here'                          |

## Events

| Event name | Type | Description              |
| ---------- | ---- | ------------------------ |
| input      |      | trigered on input change |

---

### Examples

```jsx
<text-area />
```
