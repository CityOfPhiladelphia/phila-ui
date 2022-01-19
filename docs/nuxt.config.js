import theme from '@nuxt/content-theme-docs';
import path from 'path';

export default theme({
  ssr: false,
  env: {
    docsBaseUrl: process.env === "production" ? process.env.DOCS_BASE_URL : 'http://localhost:8080',
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