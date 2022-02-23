module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: { // 配置跨域
      '/api': {
        target: 'http://192.168.60.45:5678',
        ws: true,
        changOrigin: true
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/frontendproject_theo/' // 项目线上部署路径
    : '/'
  }
}