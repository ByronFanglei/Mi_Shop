const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use('/byron', createProxyMiddleware ({
    target: 'https://api.douban.com',
    changeOrigin: true,
    pathRewrite: {
      '/byron': ''
    }
  }))
}