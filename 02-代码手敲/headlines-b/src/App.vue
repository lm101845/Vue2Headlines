<!--
 * @Author: liming
 * @Date: 2021-10-05 13:11:37
 * @LastEditTime: 2021-10-05 15:48:57
 * @FilePath: \02-代码手敲\headlines-b\src\App.vue
-->
<template>
  <div id="app">
    <h1>黑马头条内容发布系统</h1>
    <!-- 路由出口 -->
    <router-view></router-view>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
     <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
        return {
            num:6
        }
    },
  }
</script>
<style lang="less">
</style>
