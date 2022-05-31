const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://127.0.0.1:3000', //process.env.VUE_APP_PATH 
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '',
        },
      }
    },
  },
});
