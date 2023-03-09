<template>
  <div>
    <!-- 头部 -->
    <div class="top_back">
      <v-icon color="#000" @click="back">mdi-arrow-left</v-icon>
      <router-link to="/"> <v-icon>mdi-earth</v-icon> </router-link>
    </div>
    <!-- 注册方式提示 -->
    <div class="login_way">
      <h2>注册</h2>
      <span>欢迎加入<span>AURQ Global</span></span>
    </div>
    <!-- tab栏切换 -->
    <div style="padding: 16px">
      <v-tabs @change="changeTab">
        <v-tab href="#1"> 邮箱 </v-tab>
        <v-tab href="#2"> 手机号 </v-tab>
      </v-tabs>
    </div>
    <!-- 登录输入框 -->
    <div class="login_inp">
      <v-form ref="form" lazy-validation>
        <div v-if="tabNum === '1'">
          <v-text-field
            v-if="flag"
            :rules="emailRules"
            outlined
            label="请输入邮箱"
            v-model="email"
          ></v-text-field>
        </div>
        <div v-if="tabNum === '2'">
          <div class="mobile_box" v-if="flag">
            <div @click="dialog = true">
              <v-text-field
                outlined
                label="区号"
                append-icon="mdi-triangle-small-down"
                v-model="area"
              ></v-text-field>
            </div>
            <v-text-field
              :rules="mobileRules"
              outlined
              label="请输入手机号"
              v-model="mobile"
            ></v-text-field>
          </div>
        </div>
        <div v-if="!flag">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            label="请输入登录密码"
            outlined
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-model="password1"
            :rules="passwordRules1"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            label="请确认登录密码"
            outlined
            @click:append="show2 = !show2"
          ></v-text-field>
          <v-text-field
            :rules="rules"
            outlined
            label="邀请码(必填)"
            v-model="invite"
          ></v-text-field>
        </div>
      </v-form>
    </div>
    <!-- 区号弹出层 -->
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <div class="top_back">
          <v-icon>mdi-magnify</v-icon>
          <v-text-field
          ></v-text-field>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </div>
      </v-card>
    </v-dialog>
    <!-- 协议 -->
    <div class="agree_on">
      <span
        >继续登录即代表同意<router-link to="/">《用户协议》</router-link
        >和<router-link to="/">《隐私政策》</router-link></span
      >
    </div>
    <!-- 按钮 -->
    <div class="btn_box">
      <v-btn block large color="primary" @click="next"> 下一步 </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        (value) => !!value || "必填",
        (value) => (value || "").length >= 8 || "最少8个字符",
      ],
      emailRules: [
        (value) => !!value || "必填",
        (value) => (value || "").length <= 20 || "最多20个字符",
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "无效的邮箱地址";
        },
      ],
      mobileRules: [
        (value) => !!value || "必填",
        (value) => (value || "").length === 11 || "手机号码应为11位数字",
        (value) => {
          const pattern =
            /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
          return pattern.test(value) || "手机号码格式不正确";
        },
      ],
      passwordRules: [
        (value) => !!value || "必填",
        (value) => (value || "").length >= 8 || "最少8个字符",
        (value) => (value || "").length <= 20 || "最多20个字符",
      ],
      passwordRules1: [
        (value) => this.password === this.password1 || "两次密码输入不一致",
      ],
      email: null,
      mobile: null,
      flag: true,
      show1: false,
      show2: false,
      password: null,
      password1: null,
      invite: null,
      tabNum: 1,
      area: null,
      dialog: false,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    next() {
      if (this.$refs.form.validate()) {
        this.flag = false;
      }
    },
    changeTab(e) {
      this.tabNum = e;
      this.flag = true;
      this.password = null;
      this.password1 = null;
      this.email = null;
      this.mobile = null;
      this.invite = null;
      this.area = null;
    },
    changeSelect(a) {
      console.log(a);
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
  // height: 100%;
  position: relative;
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
.agree_on {
  text-align: center;
  position: fixed;
  bottom: 60px;
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
// 去除tab栏默认样式
::v-deep .v-tab--active.v-tab:not(:focus)::before {
  opacity: 0;
}
.btn_box {
  padding: 0 16px;
  text-align: center;
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
}
.mobile_box {
  display: flex;
  div:nth-child(1) {
    ::v-deep .v-input:nth-child(1) {
      width: 90px;
      margin-right: 5px;
    }
  }
}
</style>