<template>
  <iframe v-show="src" :src="src" class="example-iframe" :height="height">
  </iframe>
</template>

<script>
import Vue from 'vue';
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.use(VueFriendlyIframe);

export default {
  data () {
    return {
      src: '',
    }
  },
  props: {
    name: {
      type: String,
      default: null,
      required: true,
    },
    height: {
      type: [Number, String],
      default: 400,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  mounted () {
    if (this.name) {
      this.src = `http://localhost:8080/loader?example=${this.name}`;
    }
    if (this.height !== 400) {
      this.src = `${this.src}&height=${this.height}`;
    }
  }
}
</script>
<style>
  .example-iframe {
    width: 100%;
  }
</style>