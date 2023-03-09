<template>
  <div>
    <!-- 头部 -->
    <div class="top_back">
      <v-icon color="#000" @click="back">mdi-arrow-left</v-icon>
      <router-link to="/logon"> 注册 </router-link>
    </div>
    <!-- 登录方式提示 -->
    <div class="login_way">
      <h2>登录</h2>
      <span>使用账户密码方式登录</span>
    </div>
    <!-- 登录输入框 -->
    <div class="login_inp">
      <v-form ref="form" lazy-validation>
        <span>登录邮箱或手机号</span>
        <v-text-field
          :rules="rules"
          outlined
          label="请输入"
          v-model="mobile"
        ></v-text-field>
        <span>登录密码</span>
        <v-text-field
          v-model="password"
          :rules="rules"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          label="请输入"
          outlined
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn block large color="primary" @click="login"> 登录 </v-btn>
      </v-form>
    </div>
    <!-- 忘记密码 -->
    <div class="forgot_password">
      <router-link to="/">忘记密码?</router-link>
    </div>
    <!-- 协议 -->
    <div class="agree_on">
      <span
        >继续登录即代表同意<router-link to="/">《用户协议》</router-link
        >和<router-link to="/">《隐私政策》</router-link></span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        (value) => !!value || "必填",
        (value) => (value || "").length <= 20 || "最多20个字符",
      ],
      show1: false,
      mobile: null,
      password: null,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    login() {
      console.log(this.$refs.form.validate());
      console.log(this.password);
      console.log(this.mobile);
    },
  },
};
</script>

<style lang="scss" scoped>
.top_back {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 56px;
  justify-content: space-between;
  background-color: rgb(245, 245, 245);
  a {
    color: rgb(25, 118, 210);
    font-size: 18px;
    text-decoration: none;
  }
}
.login_way {
  padding: 16px;
  h2 {
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-size: 24px;
    font-weight: 400;
  }
  span {
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-size: medium;
    color: rgba(0, 0, 0, 0.6);
  }
}
.login_inp {
  margin: 16px;
  span {
    margin: 0px 0px 8px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    display: block;
  }
}
::v-deep .v-btn__content {
  font-size: 15px;
}
.forgot_password {
  padding: 0 16px;
  text-align: right;
  a {
    color: rgb(25, 118, 210);
    text-decoration: none;
    font-size: 16px;
  }
}
.agree_on {
  text-align: center;
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
  }
  a {
    color: rgb(25, 118, 210);
    text-decoration: none;
    font-size: 13px;
  }
}
</style>