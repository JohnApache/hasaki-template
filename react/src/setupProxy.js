const proxy = require('http-proxy-middleware');
// 代理设置
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:5000',
      pathRewrite: {
        "^/api": "/"
      },
      changeOrigin: true,
    })
  );

  app.use(
    '/auth',
    proxy({
      target: 'http://localhost:5001',
      pathRewrite: {
        "^/auth": "/"
      },
      changeOrigin: true,
    })
  );
  
};