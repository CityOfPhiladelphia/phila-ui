module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/../src/$1",
  },
}
