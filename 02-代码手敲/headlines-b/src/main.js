/*
 * @Author: liming
 * @Date: 2021-10-05 13:11:37
 * @LastEditTime: 2021-10-05 13:36:28
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

// 关闭了生产环境提示
Vue.config.productionTip = false

// 创建Vue根实例
// 把router配置到根实例中
// 通过render方法把App根组件渲染到#app入口节点
new Vue({
  router,
  render: h => h(App)
 //el:'#app'   //等价于$mount('#app')   
}).$mount('#app')
