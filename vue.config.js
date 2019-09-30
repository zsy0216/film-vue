module.exports = {
    devServer: {
        // open: false, //auto open browser
        // host: "localhost",
        // port : 8080,

        proxy: {
            '/j/search_subjects': {
                target: 'https://movie.douban.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/j/search_subjects': '/j/search_subjects'
                }
            }
        }

    }
}