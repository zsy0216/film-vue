const webpack = require("webpack");

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                Popper: ["popper.js", "default"]
            })
        ]
    },
    devServer: {
        // open: false, //auto open browser
        // host: "localhost",
        // port : 8080,

        proxy: {
            '/j/search_subjects': { //豆瓣首页的api
                target: 'https://movie.douban.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/j/search_subjects': '/j/search_subjects'
                }
            },
            '/v2/movie/subject': { //单个电影
                target: 'https://api.douban.com',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/v2/movie/subject': '/v2/movie/subject'
                // }
            },
            '/j/new_search_subjects': { //最新热门 2019
                target: 'https://movie.douban.com',
                changeOrigin: true
            },
            '/j': { //通用
                target: 'https://movie.douban.com',
                changeOrigin: true
            },
            '/j/chart/top_list': { //分类获取
                target: 'https://movie.douban.com',
                changeOrigin: true
            }

        },


    }
}