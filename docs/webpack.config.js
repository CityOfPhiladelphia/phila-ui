const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      vue$: "vue/dist/vue.esm.js",
      'utils': path.resolve(__dirname, '../src/utils'),
    },
  },
};