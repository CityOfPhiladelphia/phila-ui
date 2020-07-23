# VeeTextArea

## Props

| Prop name     | Description                             | Type                          | Values | Default                                                  |
| ------------- | --------------------------------------- | ----------------------------- | ------ | -------------------------------------------------------- |
| id            | Random id is generated if none provided | string                        | -      | () => `ta_${Math.random().toString(12).substring(2, 8)}` |
| error         | Error message                           | string                        | -      | null                                                     |
| errorMessages | VeeValidate custom errror messages      | object                        | -      | {}                                                       |
| value         |                                         | string\|number\|object\|array | -      | ''                                                       |
| rules         |                                         | string\|object                | -      | function() {<br> return 'required';<br>}                 |
| mode          |                                         | string                        | -      | 'passive'                                                |

---

```vue live
<VeeTextArea />
```