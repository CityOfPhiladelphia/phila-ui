import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import image from '@rollup/plugin-image';
import alias from '@rollup/plugin-alias';
import path from 'path';

const projectRootDir = path.join(__dirname, '..');
console.log('ok', projectRootDir);

export default [ 'phila-ui' ].map((name) => ({
  input: `src/${name}.js`,
  output: [{
    format: 'umd',
    name,
    file: `dist/${name}.umd.js`,
  },
  {
    format: 'es',
    name,
    exports: 'named',
    file: `dist/${name}.esm.js`,
  }, {
    format: 'iife',
    name,
    extend: true,
    exports: 'named',
    file: `dist/${name}.min.js`,
  },
  ],
  plugins: [
    image(),
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function,
      style: {
        preprocessOptions: {
          scss: {
            data: `
              @import "./src/assets/styles/scss/variables.scss";
              @import "./src/assets/styles/scss/functions.scss";
              @import "./src/assets/styles/scss/colors.scss";
              @import "node_modules/bulma/sass/utilities/_all.sass";
            `,
          },
        },
      },
      transformAssetUrls: true,
    }),
    postcss({
      extract: false,
      inject: true,
      plugins: [ cssnano() ],
      sourceMap: true,
      extensions: [ '.scss', '.sass', '.css' ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src'),
        },
        {
          find: 'components',
          replacement: path.resolve(projectRootDir, 'src/components'),
        },
        {
          find: 'assets',
          replacement: path.resolve(projectRootDir, 'src/assets'),
        },
        {
          find: 'styles',
          replacement: path.resolve(projectRootDir, 'src/assets/styles/scss'),
        },
      ],
    }),
  ],
}));