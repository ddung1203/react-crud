const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/products', {
      target: 'http://admin-svc.default.svc.cluster.local:8000',
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware('/api/product', {
      target: 'http://main-svc.default.svc.cluster.local:5000',
      changeOrigin: true,
    })
  );
};