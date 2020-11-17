# Radio

## Props

| Prop name     | Description                             | Type           | Values | Default                                                                                                              |
| ------------- | --------------------------------------- | -------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| id            | Random id is generated if none provided | string         | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}`                                                             |
| error         | Error message                           | string         | -      | null                                                                                                                 |
| errorMessages | VeeValidate custom errror messages      | object         | -      | {}                                                                                                                   |
| options       |                                         | object\|array  | -      | () => {<br> return {<br> 'option-1': 'Option 1',<br> 'option-2': 'Option 2',<br> 'option-3': 'Option 3',<br> };<br>} |
| textKey       |                                         | string         | -      | ""                                                                                                                   |
| value         |                                         | string         | -      | ''                                                                                                                   |
| valueKey      |                                         | string         | -      | ""                                                                                                                   |
| label         |                                         | string         | -      | ''                                                                                                                   |
| desc          |                                         | string         | -      | ''                                                                                                                   |
| numOfColumns  |                                         | string\|number | -      | 1                                                                                                                    |

## Events

| Event name | Type | Description |
| ---------- | ---- | ----------- |
| input      |      |

## Slots

| Name  | Description | Bindings |
| ----- | ----------- | -------- |
| label |             |          |
| desc  |             |          |

---

```vue live
<Radio>Default Example Usage</Radio>
```
