/*
 * @Author: liming
 * @Date: 2021-09-19 13:54:11
 * @LastEditTime: 2021-11-06 17:58:20
 * @FilePath: \headlines-m\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由表
const routes = [
  // 我们直接路由懒加载
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
    // 我们最好在最后加上一个【/】，这样一看就知道它是个目录。——login后面的【/】
  },
  {
    path: '/',
    // name: 'login',
    // 如果有子路由的话，默认父路由就不需要有名字了，没有意义
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '', // 你没有给它写路径，它就是默认子路由！！！——默认子路由只能有一个
        name: 'home',
        component: () => import('@/views/home/')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa/')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
