// setupProxy.js文件中配置
const { createProxyMiddleware: proxy } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/csc", //相同的前缀
        proxy({
            // 此处的端口号要与后期数据请求的数据端一致
            target: "https://www.ip.cn",
            changeOrigin: true,
        })
    );
};