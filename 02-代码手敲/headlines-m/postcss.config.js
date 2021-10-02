/*
 * @Author: liming
 * @Date: 2021-10-02 22:32:04
 * @LastEditTime: 2021-10-02 22:46:28
 * @FilePath: \Vue2Headlines\02-代码手敲\headlines-m\postcss.config.js
 */

// 这个文件名字是死的，不能随便起。

/**
 * PostCSS的配置文件
 * 如果有配置失败的，把rem版本降为5.1.1即可
 * 注意：行内样式postcss是不会转的
 */

module.exports = {
    plugins: {
        autoprefixer: {
            browsers: ['Android >= 4.0', 'IOS' >= 8]
        },
        // postcss-pxtorem 插件的版本需要 >= 5.0.0
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            propList: ['*'],
        },
    },
};