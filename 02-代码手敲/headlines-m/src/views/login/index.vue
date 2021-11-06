<!--
 * @Author: liming
 * @Date: 2021-10-03 20:15:55
 * @LastEditTime: 2021-11-06 19:11:56
 * @FilePath: \headlines-m\src\views\login\index.vue
-->
<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="注册 / 登陆"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 登陆表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="small" round class="send-btn">获取验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="login-btn-wrap">
      <van-button type="info" block>登陆</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
        username: "", //手机号
        code: "", //验证码
      },
    };
  },
};
</script>

<style lang="less">
.send-btn {
  width: 80px;
  height: 23px;
  background-color: #ededed;
  .van-button__text {
    font-size: 11px;
    color: #666;
  }
}
.login-btn-wrap {
  padding: 26px 16px 0;
  .login-btn {
    background-color: #6db4fb;
    border: none;
    .van-button__text {
      font-size: 15px;
    }
  }
}
</style>
