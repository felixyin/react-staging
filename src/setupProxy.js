const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    /*
     Axios模块代理配置
     */
    // 匹配api1，即应用此代理配置（必须配置）
    // cd test-server && node server1.js
    proxy("/api1/", {
      target: "http://localhost:5000", //（必须配置）
      changeOrigin: true, // 改变服务器收到的响应头host字段的值localhost：5000，而不是请求源头方localhost：3000（必可选置）
      pathRewrite: { "^/api1": "" }, // 重写为服务器端声明的请求路径（必须配置）
    }),
    // cd test-server && node server2.js
    proxy("/api2/", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    }),
    /*
     Github模块代理配置
     */
    // cd test-server && node server.js
    proxy("/api3/", {
      target: "http://localhost:5000",
      changeOrigin: true,
      pathRewrite: { "^/api3": "" },
    })
  );
};
