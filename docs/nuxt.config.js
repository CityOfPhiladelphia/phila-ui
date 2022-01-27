import theme from '@nuxt/content-theme-docs';
import path from 'path';

export default theme({
  ssr: false,
  env: {
    docsBaseUrl: "https://ui-examples.phila.gov",
  },
  docs: {
    primaryColor: '#0f4d90',
  },
  content: {
    liveEdit: false,
  },
  plugins: [
    path.join(__dirname, '/plugins/example.js'),
  ],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'examples',
        path: '/examples',
        component: resolve(__dirname, 'pages/examples.vue'),
      });
    },
  },
  build: {
    extend(config) {    // ..
      config.resolve.alias['vue$'] = "vue/dist/vue.esm.js";
      config.module.rules.push(
        {
          test: /\.s[ac]ss$/i,
          use: [
            "sass-loader",
          ],
        },
      );
    },
  },
});