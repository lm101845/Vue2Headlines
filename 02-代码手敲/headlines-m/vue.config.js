/*
 * @Author: liming
 * @Date: 2021-09-19 21:03:29
 * @LastEditTime: 2021-10-03 20:21:00
 * @FilePath: \headlines-m\vue.config.js
 */
module.exports = {
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    },
   
}