import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

export default [ 'phila-ui' ].map((name) => ({
  input: `src/${name}.js`,
  output: [
    {
      format: 'umd',
      name,
      file: `dist/${name}.umd.js`,
    },
    {
      format: 'es',
      name,
      exports: 'named',
      file: `dist/${name}.esm.js`,
    },{
      format: 'iife',
      name,
      extend: true,
      exports: 'named',
      file: `dist/${name}.min.js`,
    },
  ],
  plugins: [
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
        },
      },
    }),
    postcss({
      // extract: 'dist/styles.css',
      extract: false,
      inject: false,
      plugins: [ cssnano() ],
      sourceMap: true,
      extensions: [ '.scss', '.sass','.css' ],
    }),
    buble(), // Transpile to ES5
  ],
}));
