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
    <!--  
        基于vant的表单验证
        1.使用van-form组件包裹所有的表单项van-field
        2.给van-form绑定submit事件，当表单提交的时候会触发submit事件
        表单会自动触发提示，只有表单验证通过，它才会触发并调用submit
        3.使用 Field 的 rules 属性定义校验规则
     -->
    <van-form
      :show-error="false"
      :show-error-message="false"
      :validate-first = "true"
      @submit="onLogin"
      @failed="onFailed"
    >
      <!-- 只有表单验证通过才能触发submit,非常方便 -->
      <!-- 注意：前面不要忘了写冒号 -->
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
        name="手机号"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        name="验证码"
        :rules="formRules.code"
      >
        <template #button>
          <van-button size="small" round class="send-btn"
            >获取验证码</van-button
          >
        </template>
      </van-field>
      <!-- 我们把登陆按钮放到表单里面，这样按钮才能触发submit事件 -->
      <div class="login-btn-wrap">
        <van-button type="info" block>登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from "@/api/user";
// import {Toast} from 'Vant'
//或者直接用this.$toast就直接用，不用加载了
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
      //表单规则——单独写到data里面，不建议写在模板里
      formRules: {
        mobile: [
          { required: true, message: "请输入手机号" },
          { pattern: /^1[3,5,7,8,9]\d{9}$/, message: "手机号格式错误" },
        ],
        code: [
          { required: true, message: "请输入验证码" },
          { pattern: /^\d{6}$/, message: "验证码格式错误" },
        ],
      },
    };
  },
  methods: {
    async onLogin() {
      // 写法1：需要import
      //   Toast.loading({
      //     message: "登陆中...",  //提示文本
      //     forbidClick: true,   //是否禁止背景点击
      //     duration: 0    //为0时toast不会消失，会持续展示
      //   });

      // 写法2：不需要import
      this.$toast.loading({
        message: "登陆中...", //提示文本
        forbidClick: true, //是否禁止背景点击
        duration: 0, //为0时toast不会消失，会持续展示
      });
      //1.找到数据接口
      //2.封装请求方法
      //3.请求调用登陆
      try {
        const res = await login(this.user);
        //4.处理响应结果
        console.log(res);
        // Toast.success("登陆成功");
        this.$toast.success("登陆成功");
      } catch (err) {
        console.log(err);
        // console.log("登陆失败");
        // Toast.fail("登陆失败，手机号或验证码错误");
        this.$toast.fail("登陆失败，手机号或验证码错误");
      }
    },
    onFailed(error){
        console.log('验证失败',error);
        if(error.errors[0]){
            // this.$toast(error.errors[0].message)  
            // 这个是简写
            this.$toast({
                message:error.errors[0].message,
                position: 'top'
                //防止手机键盘太高看不见提示消息
            })
        }
    }
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
