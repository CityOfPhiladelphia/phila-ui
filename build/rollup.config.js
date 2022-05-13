
//Convert CommonJS modules to ES6
import commonjs from '@rollup/plugin-commonjs';

//Locate and bundle third-party dependencies in node_modules
import { nodeResolve } from '@rollup/plugin-node-resolve';

//Compile your files with Babel
import babel from '@rollup/plugin-babel';

//Import JPG, PNG, GIF, SVG, and WebP files
import image from '@rollup/plugin-image';

//Define and resolve aliases for bundle dependencies
import alias from '@rollup/plugin-alias';

//Handle .vue SFC files
import vue from 'rollup-plugin-vue';

import path from 'path';

const projectRootDir = path.join(__dirname, '..');

export default [ 'phila-ui' ].map((name) => ({
  input: `src/${name}.js`,
  output: [
    {
      format: 'umd',
      name,
      file: `dist/${name}.umd.js`,
      globals: {
        vue: 'Vue',
      },
    },
    {
      format: 'es',
      name,
      exports: 'named',
      file: `dist/${name}.esm.js`,
      globals: {
        vue: 'Vue',
      },
    },
    {
      format: 'iife',
      name,
      extend: true,
      exports: 'named',
      file: `dist/${name}.min.js`,
      globals: {
        vue: 'Vue',
      },
    },
  ],
  external: [
    // /@babel\/runtime/,
    'vue',
  ],
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src'),
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
    image(),
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function,
      style: {
        preprocessOptions: {
          scss: {
            data: `
              @import "src/assets/styles/scss/variables.scss";
              @import "src/assets/styles/scss/mixins.scss";
              @import "src/assets/styles/scss/functions.scss";
              @import "src/assets/styles/scss/colors.scss";
              @import "node_modules/bulma/sass/utilities/_all.sass";
            `,
          },
        },
      },
      transformAssetUrls: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
  ],
}));