module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "src/assets/css/_mixin.scss";
        `
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  }
};
