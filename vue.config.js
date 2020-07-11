module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/all.scss";
        `,
      },
    },
  },
};