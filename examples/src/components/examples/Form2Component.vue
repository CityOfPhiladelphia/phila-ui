<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-4">
      <input-form
        title="Form inputs with input-form"
        desc="input-form adds form styles"
      >
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
        <template v-slot:submit>
          <button>Submit</button>
        </template>
      </input-form>
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

import { Checkbox, Textbox, Dropdown, Radio, TextArea, InputForm } from '@phila/phila-ui';

export default {
  name: 'Form2Component',
  components: {
    Checkbox,
    Textbox,
    Dropdown,
    Radio,
    TextArea,
    InputForm,
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
          label: "Add errors",
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
