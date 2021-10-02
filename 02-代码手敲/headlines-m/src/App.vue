<!--
 * @Author: liming
 * @Date: 2021-09-19 13:54:11
 * @LastEditTime: 2021-10-02 22:44:49
 * @FilePath: \Vue2Headlines\02-代码手敲\headlines-m\src\App.vue
-->
<template lang="pug">
#app
    h1 黑马头条
    //- 路由的出口，路由出口不要删
    <router-view/>
    van-button(type="primary") 主要按钮
    van-button(type="info") 信息按钮
    van-button(type="default") 默认按钮
    van-button(type="warning") 警告按钮
    van-button(type="danger") 危险按钮
    <van-cell-group inset/>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
    .box
</template>

<script>
  export default {
    name: "App",
  };
</script>
<style lang="stylus">
    .box
        width 200px
        height 100px
        background-color pink
</style>
