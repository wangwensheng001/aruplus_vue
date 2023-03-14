<template>
  <div>
    <!-- 消息提示框 -->
    <div style="position: fixed; top: 0; left: 0; right: 0; z-index: 1">
      <v-alert :type="type" :value="alert" transition="scroll-y-transition">
        {{ message }}
      </v-alert>
    </div>
    <!-- 头部 -->
    <div class="top_back">
      <v-icon color="#000" @click="back">mdi-arrow-left</v-icon>
      <router-link to="/logon"> {{ $t("Register") }} </router-link>
    </div>
    <!-- 登录方式提示 -->
    <div class="login_way">
      <h2>{{ $t("Log In") }}</h2>
      <span>{{ $t("Login with account password") }}</span>
    </div>
    <!-- 登录输入框 -->
    <div class="login_inp">
      <v-form ref="form" lazy-validation>
        <span>{{ $t("Login email or mobile number") }}</span>
        <v-text-field
          :rules="rules"
          outlined
          :label="$t('Please Enter')"
          v-model="mobile"
          validate-on-blur
        ></v-text-field>
        <span>{{ $t("login Password") }}</span>
        <v-text-field
          v-model="password"
          :rules="rules"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          :label="$t('Please Enter')"
          outlined
          @click:append="show1 = !show1"
          validate-on-blur
        ></v-text-field>
        <v-btn block large color="primary" @click="login">
          {{ $t("Log In") }}
        </v-btn>
      </v-form>
    </div>
    <!-- 忘记密码 -->
    <div class="forgot_password">
      <router-link to="/">忘记密码?</router-link>
    </div>
    <!-- 协议 -->
    <div class="agree_on">
      <span
        >{{ $t("Continue to log in to agree")
        }}<router-link to="/">{{ $t("User Agreement") }}</router-link
        >{{ $t("With")
        }}<router-link to="/">{{ $t("Privacy Policy") }}</router-link></span
      >
    </div>
  </div>
</template>

<script>
import { login } from "@/api/api";
export default {
  data() {
    return {
      rules: [
        (value) => !!value || this.$t("Required"),
        (value) => (value || "").length <= 20 || this.$t("Up to 20 characters"),
      ],
      show1: false,
      mobile: null,
      password: null,
      alert: false,
      message: "",
      type: "success",
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    async login() {
      if (this.$refs.form.validate()) {
        try {
          const res = await login({
            user_string: this.mobile,
            password: this.password,
            type: 1,
          });
          this.$store.commit("changeToken", res);
          this.$router.push("/my");
        } catch (error) {
          this.message = this.$t(error);
          this.type = "error";
          this.alert = true;
        }
      }
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