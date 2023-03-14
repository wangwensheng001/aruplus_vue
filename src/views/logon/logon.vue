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
      <router-link to="/"> <v-icon>mdi-earth</v-icon> </router-link>
    </div>
    <!-- 注册方式提示 -->
    <div class="login_way">
      <h2>{{ $t("Register") }}</h2>
      <span
        >欢迎加入<span>{{ $t("AURQ Global") }}</span></span
      >
    </div>
    <!-- tab栏切换 -->
    <div style="padding: 16px">
      <v-tabs @change="changeTab">
        <v-tab href="#1"> {{ $t("Mail") }} </v-tab>
        <v-tab href="#2"> {{ $t("Phone number") }} </v-tab>
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
            :label="$t('Please input your email')"
            v-model="email"
            validate-on-blur
          ></v-text-field>
        </div>
        <div v-if="tabNum === '2'">
          <div class="mobile_box" v-if="flag">
            <div @click="dialog = true">
              <v-text-field
                outlined
                :label="$t('Area code')"
                append-icon="mdi-triangle-small-down"
                v-model="area"
                validate-on-blur
              ></v-text-field>
            </div>
            <v-text-field
              :rules="mobileRules"
              outlined
              :label="$t('Please enter phone number')"
              v-model="mobile"
              validate-on-blur
            ></v-text-field>
          </div>
        </div>
        <div v-if="!flag">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            :label="$t('Please enterLogin password')"
            outlined
            @click:append="show1 = !show1"
            validate-on-blur
          ></v-text-field>
          <v-text-field
            v-model="password1"
            :rules="passwordRules1"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            :label="$t('Please enterConfirm login password')"
            outlined
            @click:append="show2 = !show2"
            validate-on-blur
          ></v-text-field>
          <v-text-field
            outlined
            :label="$t('Invitation code(Required)')"
            v-model="invite"
            validate-on-blur
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
        <div class="top_back search_box">
          <v-icon>mdi-magnify</v-icon>
          <v-text-field v-model="searchVal"></v-text-field>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </div>
        <ul class="area_list">
          <li
            v-for="item in list"
            :key="item.country_id"
            @click="activeArea(item)"
          >
            <div>
              <span>
                {{
                  $store.state.lang === "zh"
                    ? item.country_name_cn
                    : item.country_name_en
                }}
              </span>
              <span> +{{ item.country_code }} </span>
            </div>
          </li>
        </ul>
      </v-card>
    </v-dialog>
    <!-- 验证弹出层 -->
    <div>
      <v-navigation-drawer
        v-if="drawer"
        v-model="drawer"
        absolute
        bottom
        temporary
        height="310"
      >
        <div class="drawer_title">
          <span>{{ $t("Safety verification") }}</span>
          <v-icon @click="drawer = false" color="rgb(211, 47, 47)"
            >mdi-close</v-icon
          >
        </div>
        <div class="drawer_text">
          <p>
            {{ $t("If you do not receive the email, please check the trash") }}
          </p>
          <p>
            {{ $t("Verification options can be changed in Security Center") }}
          </p>
        </div>
        <div class="drawer_yzm">
          <div>
            <p>{{ $t("Verification code sent to") }}</p>
            <span>{{ email ? email : mobile }}</span>
          </div>
          <v-btn
            @click="sendYZM"
            :disabled="disabled"
            :loading="loading"
            depressed
            text
            >{{ time }}</v-btn
          >
        </div>
        <div style="padding: 8px 8px 0 8px">
          <v-text-field
            v-model="yzm"
            :label="$t('Please Enter')"
            hide-details
          ></v-text-field>
        </div>
        <div style="padding: 16px 8px">
          <v-btn
            block
            large
            color="primary"
            @click="drawerFn"
            :loading="loading1"
          >
            {{ $t("Sure") }}
          </v-btn>
        </div>
      </v-navigation-drawer>
    </div>
    <!-- 协议 -->
    <div class="agree_on">
      <span
        >{{ $t("By continuing to register, you agree")
        }}<router-link to="/">{{ $t("User Agreement") }}</router-link
        >{{ $t("With")
        }}<router-link to="/">{{ $t("Privacy Policy") }}</router-link></span
      >
    </div>
    <!-- 按钮 -->
    <div class="btn_box">
      <v-btn block large color="primary" @click="next">
        {{ $t("Next step") }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { logon, sendYZM } from "@/api/api";
export default {
  data() {
    return {
      rules: [
        (value) => !!value || this.$t("Required"),
        (value) => (value || "").length >= 8 || this.$t("Minimum 8 characters"),
      ],
      emailRules: [
        (value) => !!value || this.$t("Required"),
        // (value) => (value || "").length <= 20 || this.$t("Up to 20 characters"),
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || this.$t("Invalid email address");
        },
      ],
      mobileRules: [
        (value) => !!value || this.$t("Required"),
        (value) =>
          (value || "").length === 11 ||
          this.$t("Mobile phone number should be 11 digits"),
        (value) => {
          const pattern =
            /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
          return (
            pattern.test(value) || this.$t("Mobile number format is incorrect")
          );
        },
      ],
      passwordRules: [
        (value) => !!value || this.$t("Required"),
        (value) => (value || "").length >= 8 || this.$t("Minimum 8 characters"),
        (value) => (value || "").length <= 20 || this.$t("Up to 20 characters"),
      ],
      passwordRules1: [
        (value) =>
          this.password === this.password1 ||
          this.$t("The two password entries are inconsistent"),
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
      areaJson: this.$store.state.areaJson,
      searchVal: null,
      fifterArr: [],
      drawer: false,
      group: null,
      yzm: null,
      disabled: false,
      loading: false,
      loading1: false,
      count: 600,
      message: "",
      type: "success",
      alert: false,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    next() {
      if (!this.flag) {
        if (this.$refs.form.validate()) {
          this.drawer = true;
        }
      }
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
    activeArea(item) {
      this.area = item.country_code;
      this.dialog = false;
    },
    async sendYZM() {
      // console.log("已发送");
      this.loading = true;
      try {
        const res = await sendYZM({
          user_string: this.userString,
          type: "register",
          lang: this.$store.state.lang,
        });
        this.message = this.$t(res);
        this.type = "success";
        this.alert = true;
      } catch (error) {
        this.message = this.$t(res);
        this.type = "error";
        this.alert = true;
      }
      setTimeout(() => {
        this.alert = false;
      }, 1000);
      this.loading = false;
      this.disabled = true;
      const timer = setInterval(() => {
        this.count--;
        if (this.count <= 0) {
          this.disabled = false;
          clearInterval(timer);
          this.count = 600;
        }
      }, 1000);
    },
    async drawerFn() {
      this.loading1 = true;
      try {
        const res = await logon({
          type: this.loginMethod,
          user_string: this.userString,
          code: this.yzm,
          password: this.password,
          re_password: this.password1,
          extension_code: this.invite,
          country_code: "China",
          isAgree: true,
        });
        this.loading1 = false;
        this.message = this.$t(res);
        this.type = "success";
        this.alert = true;
        this.$router.push("/login");
      } catch (error) {
        this.type = "error";
        this.message = this.$t(res);
        this.alert = true;
      }
      setTimeout(() => {
        this.alert = false;
      }, 1000);
    },
  },
  watch: {
    searchVal: {
      handler(newVal, oldVal) {
        this.fifterArr = this.areaJson.filter((item) => {
          return item.country_name_cn === this.searchVal;
        });
      },
      deep: true,
      // immediate: true,
    },
    group() {
      this.drawer = false;
    },
  },
  computed: {
    list() {
      return this.fifterArr.length === 0 ? this.areaJson : this.fifterArr;
    },
    time() {
      return !this.disabled
        ? this.$t("Get verification code")
        : `${this.count}/${this.$t("Second")}`;
    },
    loginMethod() {
      return this.tabNum === "1" ? "email" : "mobile";
    },
    userString() {
      return this.tabNum === "1" ? this.email : this.mobile;
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
.area_list {
  padding-top: 56px;
  padding-left: 0;
  background-color: rgb(245, 245, 245);
  li {
    list-style: none;
    height: 56px;
    padding: 8px 16px;
    div {
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        margin: 0px;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.00938em;
      }
      span:nth-child(2) {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}
.search_box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.drawer_title {
  height: 56px;
  padding: 8px 16px 8px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  span {
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-size: 18px;
    font-weight: 700;
  }
}
.drawer_text {
  padding: 8px 16px 8px 8px;
  border-bottom: 1px solid #ccc;
  p {
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px;
  }
}
.drawer_yzm {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 8px;
  border-bottom: 1px solid #ccc;
  div {
    p {
      margin: 0px;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.00938em;
      color: rgba(0, 0, 0, 0.6);
    }
    span {
      margin: 0px;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.00938em;
      font-weight: 700;
    }
  }
  button {
    height: 36px;
    padding: 6px 8px;
    color: rgb(25, 118, 210);
    letter-spacing: 0.02857em;
    min-width: 64px;
    font-size: 14px;
  }
}
</style>