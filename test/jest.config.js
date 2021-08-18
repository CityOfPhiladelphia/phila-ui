const path = require('path');

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    "^@/(.*)$": `${path.resolve('../src')}/$1`,
  },
}
