## Notes

This component does not include the modal functionality. It's meant to be used with the [VueFinalModal](https://vue-final-modal.org/) third-party plugin or other plugins which are not included with PhilaUI.

## Code Samples

### Basic usage with vue-final-modal

```html
<!-- trigger button -->
<button class="button is-danger" @click.prevent="showModal = !showModal">
  Alert modal
</button>

<!-- vue-final-modal with the modal window -->
<vue-final-modal v-slot="{ close }" v-model="showModal" :click-to-close="false">
  <modal :close="close" />
</vue-final-modal>
```

<alert>It's recommended to set the vue-final-modal's "click-to-close" property to false.</alert>

## Live Examples

### Basic modal window using vue-final-modal (third-party plugin)

<example name="Modal1" height="400"></example>

### Alert modal window using vue-final-modal (third-party plugin)

<example name="Modal2" height="400"></example>

### Custom buttons modal window using vue-final-modal (third-party plugin)

<example name="Modal3" height="400"></example>
