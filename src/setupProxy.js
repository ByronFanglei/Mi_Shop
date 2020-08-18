const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use('/byron', createProxyMiddleware ({
    target: 'https://c.y.qq.com',
    changeOrigin: true,
    pathRewrite: {
      '/byron': ''
    }
  }))
}