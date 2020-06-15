const path = require('path');

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/styleguide-all.scss";
        `,
      },
    },
  },
};