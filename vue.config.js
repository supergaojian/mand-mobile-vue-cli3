const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('mand-css')
      .test(/mand-mobile.*\.css$/)
      .use('css-loader')
        .loader('postcss-loader')
        .options({
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 100,
              propWhiteList: []
            })
          ]
        })
  }
}