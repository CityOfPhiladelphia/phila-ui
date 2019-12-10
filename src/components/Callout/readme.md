# Callout

Use this component for messages and warnings. 

## Options

Use color classes from Phila-ui and Bulma to change the border and background. 

```
  <article class="message is-flyers-orange">
    <div :class="'message-body'">
      <div>
        Sample Message
      </div>
    </div>
  </article>
  ```

### Disclaimer: 

Uses v-html. Be careful with what content that you pass to the component. Do not use for rendering content to the url.
