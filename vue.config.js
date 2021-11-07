module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "",
  outputDir: "../Kbc.VueTemplate.Web/wwwroot/",
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"), // This line must in sass option
        prependData: `@import "./src/styles/_variables.scss";`
      }
    }
  },
  runtimeCompiler: true,
  devServer: {
    proxy: {
      "/api/*": {
        target: "https://localhost:13202/",
        secure: false,
        https: true
      }
    },
    disableHostCheck: true
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.module
        .rule("images")
        .use("url-loader")
        .loader("url-loader")
        .tap(options =>
          Object.assign(options, {
            limit: 1
          })
        );
    }
  }
};
