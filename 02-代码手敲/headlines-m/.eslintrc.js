/*
 * @Author: liming
 * @Date: 2021-09-19 13:54:11
 * @LastEditTime: 2021-09-20 10:55:55
 * @FilePath: \headlines-m\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential'
    // '@vue/standard'
    //  暂时先把这个给注释掉，不然老是报错很烦
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
