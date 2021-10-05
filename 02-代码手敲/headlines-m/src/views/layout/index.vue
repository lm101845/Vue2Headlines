<!--
 * @Author: liming
 * @Date: 2021-10-03 20:28:24
 * @LastEditTime: 2021-10-03 20:28:24
 * @FilePath: \headlines-m\src\views\layout\index.vue
-->
<template lang="pug">
    .layout-container
        //- 子路由出口
        router-view
        //- 底部导航栏
        //- 这个组件默认就是固定定位在底部的，所以一下子就出来了
        van-tabbar(v-model='active' route)
            van-tabbar-item(icon='home-o' to="/") 首页
            van-tabbar-item(icon='comment-o' to="/qa") 问答
            van-tabbar-item(icon='video-o' to="/video") 视频
            van-tabbar-item(icon='manager-o' to="/my") 我的
            //- 使用to给它们分别配好路由
</template>

<script>
export default {
  name: "LayoutIndex",
  components: {},
  props: {},
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less"></style>
