<template>
  <div>
    <!-- 登录前个人信息 -->
    <div
      v-if="!$store.state.user_info.id"
      class="login_box"
      @click="$router.push('/login')"
    >
      <div class="login_left">
        <div class="head_sculpture">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <span>{{ $t("Click to Login") }}</span>
      </div>
      <div>
        <v-icon large> mdi-chevron-right </v-icon>
      </div>
    </div>
    <!-- 登录后个人信息 -->
    <div v-else class="login_box" @click="$router.push('/personal/center')">
      <div class="login_left">
        <div class="head_sculpture">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div class="user_info_box">
          <span>Hi,{{ $store.state.user_info.account_number }}</span>
          <span>UID：{{ $store.state.user_info.id }}</span>
        </div>
      </div>
      <div>
        <v-icon large> mdi-chevron-right </v-icon>
      </div>
    </div>
    <!-- 信誉等级 -->
    <div class="linear_box" v-if="this.$store.state.token">
      <div>信用等级评分(满分100)</div>
      <div>
        <v-progress-linear
          height="10"
          :value="linearVal"
          background-color="rgb(238, 238, 238)"
          rounded
        ></v-progress-linear>
        <span>{{ linearVal }}</span>
      </div>
    </div>
    <!-- 实名认证 -->
    <div class="certification_box" v-if="this.$store.state.token">
      <div class="certification">
        <div>
          <v-icon color="rgb(255, 152, 0)" size="22">mdi-alert-outline</v-icon>
        </div>
        <div class="certification_text">
          <span>实名认证</span>
          <span>您还没有进行实名认证</span>
        </div>
        <div>
          <span>立即认证</span>
        </div>
      </div>
    </div>
    <!-- 宫格 -->
    <div class="grid_box">
      <div class="grid_item" @click="$router.push('/deposit')">
        <img src="../../assets/my/1.png" alt="" />
        <span>{{ $t("Deposit") }}</span>
      </div>
      <div class="grid_item">
        <img src="../../assets/my/2.png" alt="" />
        <span>{{ $t("Withdraw") }}</span>
      </div>
      <div class="grid_item">
        <img src="../../assets/my/3.png" alt="" />
        <span>{{ $t("Transfer") }}</span>
      </div>
      <div class="grid_item">
        <img src="../../assets/my/4.png" alt="" />
        <span>{{ $t("Order Manag") }}</span>
      </div>
    </div>
    <!-- 邀请好友 -->
    <v-card
      class="mx-auto card_friends_box"
      color="rgb(245, 245, 245)"
      max-width="344"
    >
      <div>
        <v-icon x-large> mdi-account-multiple-plus </v-icon>
      </div>
      <div class="card_friends_text">
        <span>{{ $t("Invite friends") }}</span>
        <span>{{ $t("play with friends") }}</span>
      </div>
    </v-card>
    <!-- 安全设置 -->
    <div class="bottom_list" v-if="this.$store.state.token">
      <v-icon color="rgb(46, 125, 50)"> mdi-security </v-icon>
      <span>安全设置</span>
    </div>
    <!-- 通用设置 -->
    <div class="bottom_list">
      <v-icon> mdi-cog </v-icon>
      <span>{{ $t("General settings") }}</span>
    </div>
    <!-- 关于我们 -->
    <div class="bottom_list">
      <v-icon color="rgb(237,108,2)"> mdi-chat-question </v-icon>
      <span>{{ $t("About Us") }}</span>
    </div>
    <!-- 退出登录 -->
    <div class="btn_box" v-if="this.$store.state.token" @click="logout">
      <v-btn
        block
        large
        color="rgb(211, 47, 47)"
        class="white--text"
      >
        <div class="btn_logout">
          <v-icon right dark> mdi-logout </v-icon>
          <span>退出登录</span>
        </div>
      </v-btn>
    </div>
    <!-- 确认退出 -->
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <div class="dialog_box">
            <div>退出登录</div>
            <div>您确定要退出登录吗</div>
            <div>
              <v-btn text color="rgb(25, 118, 210)" @click="cancel">取消</v-btn>
              <v-btn text color="rgb(25, 118, 210)" @click="confirm">确定</v-btn>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>

    <!-- tabbar -->
    <tabbar :tabValue="5"></tabbar>
  </div>
</template>

<script>
import { GetUserInfo } from "@/api/api";
import Tabbar from "../../components/tabbar.vue";
export default {
  data() {
    return {
      linearVal: "100",
      dialog: false,
    };
  },
  components: {
    tabbar: Tabbar,
  },
  created() {
    if (!this.$store.state.user_info.id && this.$store.state.token) {
      this.GetUserInfo();
    }
  },
  methods: {
    async GetUserInfo() {
      try {
        const res = await GetUserInfo();
        console.log(res);
        this.$store.commit("changeUserInfo", res);
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.dialog = true
    },
    cancel() {
      this.dialog = false
    },
    confirm() {
      this.$store.commit('removeToken',null)
      this.$store.commit('removeUserInfo',{})
      this.dialog = false
    },
  },
};
</script>

<style lang="scss" scoped>
.login_box {
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  .login_left {
    display: flex;
    align-items: center;
    .head_sculpture {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      font-size: 18px;
    }
  }
}
.grid_box {
  display: flex;
  justify-content: space-around;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 16px;
  .grid_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      margin-top: 5px;
    }
  }
}
.card_friends_box {
  display: flex;
  padding: 16px 16px;
  margin: 16px 16px 8px;
  div:nth-child(1) {
    margin-right: 20px;
  }
  .card_friends_text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span:nth-child(1) {
      font-size: 16px;
      line-height: 1.5;
    }
    span:nth-child(2) {
      font-size: 14px;
      line-height: 1.43;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
.bottom_list {
  display: flex;
  align-items: center;
  padding: 16px 16px;
  border-bottom: 1px solid #ccc;
  > span {
    font-size: 16px;
    display: block;
    margin-left: 30px;
  }
}
.bottom_list:nth-child(1) {
  margin-top: 8px;
}
.user_info_box {
  display: flex;
  flex-direction: column;
  span {
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    align-items: center;
  }
  span:nth-child(1) {
    font-size: 16px;
  }
  span:nth-child(2) {
    font-size: 13px;
  }
}
.linear_box {
  padding: 16px;
  div:nth-child(1) {
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
    ::v-deep .v-progress-linear__determinate {
      background-image: linear-gradient(
        to right,
        rgb(255, 0, 0),
        rgb(0, 255, 0)
      );
    }
    span {
      margin-left: 8px;
      font-size: 14px;
      min-width: 40px;
    }
  }
}
.certification_box {
  margin: 0 16px 16px 16px;
  .certification {
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    background-color: transparent;
    display: flex;
    padding: 6px 16px;
    color: rgb(102, 60, 0);
    border: 1px solid rgb(255, 152, 0);
    padding: 6px 16px;
    div:nth-child(1) {
      margin-right: 12px;
      padding: 7px 0px;
      display: flex;
      opacity: 0.9;
    }
    .certification_text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 8px 0px;
      min-width: 0px;
      overflow: auto;
      span:nth-child(1) {
        margin: -2px 0px 0.35em;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        font-weight: 500;
      }
    }
    div:last-child {
      display: flex;
      align-items: flex-start;
      padding: 4px 0px 0px 16px;
      margin-left: auto;
      margin-right: -8px;
    }
  }
}
.btn_box {
  padding: 0 16px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.btn_logout {
  span {
    font-size: 15px;
    margin-left: 5px;
  }
}
.dialog_box {
  div:nth-child(1) {
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    padding: 16px 24px;
    flex: 0 0 auto;
  }
  div:nth-child(2) {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 20px 24px;
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: rgba(0, 0, 0, 0.6);
  }
  div:nth-child(3) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px;
    -webkit-box-pack: end;
    justify-content: flex-end;
    flex: 0 0 auto;
  }
}
</style>