/*
 * @Author: liming
 * @Date: 2021-09-19 13:54:11
 * @LastEditTime: 2021-10-03 16:27:17
 * @FilePath: \headlines-m\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './styles/index.less'

// 建议为了前期开发的便利性我们选择方式三：导入所有组件，在最后做打包优化的时候根据需求配置按需加载以降低打包体积大小。
// 加载Vant组件库
import Vant from 'vant';
// 加载Vant组件库样式
import 'vant/lib/index.css';

// 引入amfe-flexible移动端适配——自动设置rem基准值(html标签字体大小)
import 'amfe-flexible';
// 全局注册Vant中的组件
Vue.use(Vant);


// 关闭生产环境提示
Vue.config.productionTip = false
// 创建Vue根实例，将router,store配置到根实例中
// 把App根组件渲染到#app节点
// 日了狗了，注释后面不加空格eslint会报错，不让你编译通过
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
