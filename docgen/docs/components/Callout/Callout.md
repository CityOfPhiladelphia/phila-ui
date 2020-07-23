# Callout

> Use this component for messages and warnings.

## Props

| Prop name | Description                 | Type   | Values | Default |
| --------- | --------------------------- | ------ | ------ | ------- |
| message   | The message to be displayed | string | -      | ''      |

---

### Examples

Use color classes from phila-ui or bulma.

<MyComponent>
  <Callout message="My super message" class="is-info"/>
</MyComponent>

**Example of a success message using a phila-ui class:**
<Callout message="A success message" class="is-danger"/>

```jsx
<callout message="A success message" class="is-kelly-drive-green" />
```

**Example of an error message using a bulma class:**

```jsx
<callout message="An error message" class="is-danger" />
```

**Example of an info message using a bulma class:**

```jsx
<callout message="An info message" class="is-info" />
```

### Disclaimer:

Uses v-html. Be careful with what content that you pass to the component. Do not use for rendering content to the url.