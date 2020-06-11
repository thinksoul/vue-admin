module.exports={
    devServer:{
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        proxy:{
            '/api':{
                target: ' http://localhost:3000',//真实的后台接口
                ws: true,
                changeOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }
        }
    }
}