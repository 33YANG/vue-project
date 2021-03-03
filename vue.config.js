module.exports = {
  // 基本路径
  // baseUrl: './',//vue-cli3.3以下版本使用
  // vue-cli3.3+新版本使用
  publicPath: process.env.NODE_ENV === 'development' ? './' : '/vue-project/',

  // 输出文件目录
  // outputDir: 'E:/WorkDoc/work_project/express-mysql/static',
  outputDir: './docs',

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: '',

  // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
  devServer: {
    // host: 'localhost',
    // host: "0.0.0.0",
    // port: 8002, // 端口号
    https: false, // https:{type:Boolean}
    // open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
  },

  configureWebpack: {},

  css: {
    loaderOptions: {
      // less: {
      //   loader: 'less-loader',
      //   options: {
      //     "modifyVars": {'@vue_color': '#fff'}
      //   }
      // }
    },
  },

  // 配置webpack保存文件时自动修复eslint错误
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'lang',
      enableInSFC: true,
    },
  },
}

