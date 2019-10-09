import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
// import multiEntry from "rollup-plugin-multi-entry";
import sass from 'rollup-plugin-sass';
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support

export default {
  input: "src/wrapper.js",
  output: {
    name: 'phila-ui',
    exports: 'named',
  },
  plugins: [
    // multiEntry(),
    sass({
      insert: true,
    }),
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function,
      style: {
        preprocessOptions: {
          scss: {
            data: `
                @import "./src/styles/functions.scss";
                @import "./src/styles/colors.scss";
            `,
          },
        }
      },
    }),
    buble(), // Transpile to ES5
  ],
};