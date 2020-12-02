## Code Samples

### Message ``<slot>``
Use the message slot in case it contains html code that needs to be rendered, otherwise use the ``message`` prop.

### Message Types
There are two ways of changing the callout color.

1. Use the prop ``type``
2. Passing a class attribute to the callout (uses bulma colors)

The default callout has a gray color
```html
<callout message="This is the default message" />
```

### Using the prop ``type``
#### Info
```html
<callout
  message="This is a info message"
  type="info"
/>
```

#### Success
```html
<callout
 message="This is a success message"
 type="success"
/>
```

#### Warning
```html
<callout
 message="This is a warning message"
 type="warning"
/>
```

#### Danger
```html
<callout
 message="This is a danger message"
 type="danger"
/>
```

### Using the class attribute
```html
<callout
 message="This is a info message"
 class="is-info"
/>

<callout
 message="This is a success message"
 class="is-success"
/>

<callout
 message="This is a warning message"
 class="is-warning"
/>

<callout
 message="This is a danger message"
 class="is-danger"
/>

```