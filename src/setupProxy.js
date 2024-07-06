const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api1',
        createProxyMiddleware({
            target: 'http://localhost:8081',
            changeOrigin: true,
            pathRewrite:{'^/api1':''} //重写请求路径(必须)
        })
    );
};
