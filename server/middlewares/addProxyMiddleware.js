const { createProxyMiddleware } = require('http-proxy-middleware');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
module.exports = function addProxyMiddleware(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.0.0.4:5234',
      changeOrigin: true,
    }),
  );
};
