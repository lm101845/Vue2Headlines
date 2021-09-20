/*
 * @Author: liming
 * @Date: 2021-09-19 21:03:29
 * @LastEditTime: 2021-09-19 21:03:29
 * @FilePath: \02-代码手敲\headlines-m\vue.config.js
 */
module.exports = {
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    }
}