<template>
  <iframe
    v-show="src"
    :src="src"
    class="example-iframe"
    :height="height"
  />
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    name: {
      type: String,
      default: null,
      required: true,
    },
    height: {
      type: [ Number, String ],
      default: 400,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default () {
        return {
          hasFs: true,
        };
      },
    },
  },
  data () {
    return {
      src: '',
    };
  },
  mounted () {
    if (this.name) {
      this.src = `http://localhost:8080/loader/${this.name}`;

      let defaults = {
        hasBar: true,
        hasCopy: true,
        hasCode: true,
        hasSplit: true,
        hasPreview: true,
        hasFs: true,
      };

      let paramOptions = { ...defaults, ...this.options };
      //Possible Options
      // hasBar
      // hasCopy
      // hasCode
      // hasSplit
      // hasFs: off by default

      let params = [];

      Object.keys(paramOptions).forEach(key => {
        params.push(`${key}=${paramOptions[key]}`);
      });

      this.src= `${this.src}?${params.join('&')}`;

    }
  },
};
</script>
<style>
  .example-iframe {
    width: 100%;
  }
</style>