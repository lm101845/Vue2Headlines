/*
 * @Author: liming
 * @Date: 2021-10-05 13:11:37
 * @LastEditTime: 2021-10-05 15:15:24
 * @FilePath: \02-代码手敲\headlines-b\src\main.js
 */
/*
 * @Author: liming
 * @Date: 2021-10-05 13:11:37
 * @LastEditTime: 2021-10-05 13:18:31
 * @FilePath: \02-代码手敲\headlines-b\src\main.js
 */

// 项目的启动入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './styles/index.less'

// 加载element组件库
import ElementUI from 'element-ui'
// 加载element组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

// 注册ElementUI组件库——注意：这个不能写到import之前
Vue.use(ElementUI)

// 关闭了生产环境提示
Vue.config.productionTip = false

// 创建Vue根实例
// 把router配置到根实例中
// 通过render方法把App根组件渲染到#app入口节点
new Vue({
  router,
  render: h => h(App)
  // el:'#app'   //等价于$mount('#app')
}).$mount('#app')
