# Dropdown

## Props

| Prop name     | Description                             | Type                            | Values | Default                                                      |
| ------------- | --------------------------------------- | ------------------------------- | ------ | ------------------------------------------------------------ |
| id            | Random id is generated if none provided | string                          | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}`     |
| error         | Error message                           | string                          | -      | null                                                         |
| errorMessages | VeeValidate custom errror messages      | object                          | -      | {}                                                           |
| label         |                                         | string                          | -      | ''                                                           |
| options       |                                         | object\|array                   | -      | () => {<br> return {<br> 'option-1': 'Option 1',<br> };<br>} |
| placeholder   |                                         | string                          | -      | ''                                                           |
| textKey       |                                         | string                          | -      | ""                                                           |
| value         |                                         | object\|string\|boolean\|number | -      | ''                                                           |
| valueKey      |                                         | string                          | -      | ""                                                           |

## Events

| Event name | Type      | Description |
| ---------- | --------- | ----------- |
| change     | undefined |

---

```vue live
<Dropdown />
```
