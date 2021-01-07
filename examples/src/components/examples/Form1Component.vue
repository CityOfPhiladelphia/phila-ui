<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-4">
      <form>
        <h3 class="title is-5 form-padding">
          Form Inputs (no nesting)
        </h3>
        <textbox
          v-model="textbox"
          placeholder="A Textbox input"
          :required="validationSettings.indexOf('required') !== -1 ? true : undefined"
          :error="validationSettings.indexOf('errors') !== -1 ? 'this field is invalid' : ''"
        />
        <dropdown
          v-model="dropdown"
          :options="dropdownOptions"
          :required="validationSettings.indexOf('required') !== -1 ? true : undefined"
          :error="validationSettings.indexOf('errors') !== -1 ? 'this field is invalid' : ''"
          placeholder="A dropdown field"
        />
        <div class="is-field-info-important">
          Some importnant information about this field.
        </div>
        <checkbox
          v-model="checkbox"
          :options="checkboxOptions"
          :required="validationSettings.indexOf('required') !== -1 ? true : undefined"
          :error="validationSettings.indexOf('errors') !== -1 ? 'this field is invalid' : ''"
          label="A checkbox group"
        />
        <radio
          v-model="radio"
          :options="radioOptions"
          :required="validationSettings.indexOf('required') !== -1 ? true : undefined"
          :error="validationSettings.indexOf('errors') !== -1 ? 'this field is invalid' : ''"
          label="A radio group"
        />
        <div class="is-field-info">
          Some information about this field.
        </div>
        <text-area
          v-model="textarea"
          :required="validationSettings.indexOf('required') !== -1 ? true : undefined"
          :error="validationSettings.indexOf('errors') !== -1 ? 'this field is invalid' : ''"
          placeholder="A Text-area field"
        />
        <div class="form-submit form-padding has-text-centered">
          <button class="button is-cta">
            Submit
          </button>
        </div>
      </form>
    </div>
    <div class="column is-4">
      <checkbox
        v-model="validationSettings"
        :options="settings"
        text-key="label"
        value-key="key"
      />
      <h4 class="is-4">
        Field values
      </h4>
      <b>textbox</b>: {{ textbox }}<br>
      <b>dropdown</b>: {{ dropdown }}<br>
      <b>checkbox</b>: {{ checkbox }}<br>
      <b>radio</b>: {{ radio }}<br>
      <b>textarea</b>: {{ textarea }}<br>
    </div>
  </div>
</template>
<script>

import { Checkbox, Textbox, Dropdown, Radio, TextArea } from '@phila/phila-ui';

export default {
  name: 'Form1Component',
  components: {
    Checkbox,
    Textbox,
    Dropdown,
    Radio,
    TextArea,
  },
  data () {
    return {
      validationSettings: [],
      settings: [
        {
          label: "Make all required",
          key: "required",
        },
        {
          label: "Show errors",
          key: "errors",
        },
      ],
      textbox: "",
      dropdown: "",
      dropdownOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      checkbox: [],
      checkboxOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      radio: "",
      radioOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      textarea: "",
    };
  },
  methods: {
  },
};
</script>
