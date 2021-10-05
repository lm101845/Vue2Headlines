/*
 * @Author: liming
 * @Date: 2021-10-05 15:52:31
 * @LastEditTime: 2021-10-05 16:08:51
 * @FilePath: \02-代码手敲\headlines-b\src\utils\request.js
 */

/**
 * 基于axios封装的请求模块
 */

import axios from 'axios'

// 创建一个axios实例，说白了就是复制了一个axios
//  我们通过这个实例去发请求，把需要的配置给这个实例来处理

const request = axios.create({
  // baseURL: 'http://127.0.0.1:3000'// 请求的基础路径
  baseURL: 'http://api-toutiao-web.itheima.net'
  // baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/user/photos'  // 这个接口地址不行
})

// axios({
//   method: '',
//   // url: 'http://127.0.0.1:3000/a'
//   url: '/a'
// })

// axios({
//   method: '',
//   // url: 'http://127.0.0.1:3000/b'
//   url: '/b'
// })

// 这样写url很麻烦，前面的东西都是一样的，可以提取一下
// 写了baseURL,它会自动给你进行拼接的

// 请求拦截器

// 响应拦截器

// 导出请求方法
export default request

// 谁要使用谁就加载request模块
// import request from 'request.js'
// request.xxx
// request({
//   method: ,
//   url: ''
// })
