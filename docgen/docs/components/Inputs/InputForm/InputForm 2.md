# InputForm

## Props

| Prop name   | Description | Type           | Values | Default                                                  |
| ----------- | ----------- | -------------- | ------ | -------------------------------------------------------- |
| id          |             | string         | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}` |
| isValid     |             | boolean        | -      | function() {<br> return null;<br>}                       |
| errorsCount |             | string\|number | -      | 0                                                        |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
| submit  |             |          |

---

```vue live
<InputForm>Default Example Usage</InputForm>
```
