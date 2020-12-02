const { getColors } = require('theme-colors');

module.exports = ({ nuxt }) => ({
  theme: {
    extend: {
      colors: {
        primary: getColors(nuxt.options.docs.primaryColor),
      },
    },
  },
});
