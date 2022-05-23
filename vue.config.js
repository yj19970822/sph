const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') 
      }
    },
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: { 
        additionalData: `@import "./src/styles/index.scss";`
      }
    }
  },
  devServer: {
    port: 8060,
    host: '127.0.0.1',
    open: true,
    liveReload: true,
    watchFiles: ['src/**/*', 'public/**/*'],
    hot: false,
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      }
    }
  }
})
