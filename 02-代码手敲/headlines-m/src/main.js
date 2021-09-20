/*
 * @Author: liming
 * @Date: 2021-09-19 13:54:11
 * @LastEditTime: 2021-09-20 11:02:26
 * @FilePath: \headlines-m\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './styles/index.stylus'
// 关闭生产环境提示
Vue.config.productionTip = false
// 创建Vue根实例，将router,store配置到根实例中
// 把App根组件渲染到#app节点
// 日了狗了，注释后面不加空格eslint会报错，不让你编译通过，日了狗了，管的有点多
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
