/*
 * @Author: liming
 * @Date: 2021-10-03 20:53:48
 * @LastEditTime: 2021-10-03 21:02:53
 * @FilePath: \headlines-m\src\utils\request.js
 */
 
/**
 * 请求模块
 */
import axios from 'axios'
const request = axios.create({
    // 把这个实例给它单独的接收一下，因为以后我们要配置请求拦截器，响应拦截器等
    baseURL:'http://toutiao-app.itheima.net/'  //基础路径——防止我们后面发请求时，每次url都写一大坨
})

// 请求拦截器
// 响应拦截器
//导出
export default request