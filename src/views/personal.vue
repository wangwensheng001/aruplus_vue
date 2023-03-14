<template>
  <div style="background-color: rgb(245, 245, 245); height: 100%">
    <!-- 头部 -->
    <div class="top_back">
      <div>
        <v-icon color="#000" @click="back">mdi-arrow-left</v-icon>
      </div>
      <span>个人中心</span>
    </div>
    <!-- 实名认证 -->
    <div class="certification_box">
      <div class="certification">
        <div>
          <v-icon color="rgb(255, 152, 0)" size="22">mdi-alert-outline</v-icon>
        </div>
        <div class="certification_text">
          <span>实名认证</span>
          <span>您还没有进行实名认证</span>
        </div>
        <div>
          <v-btn text>立即认证</v-btn>
        </div>
      </div>
    </div>
    <!-- 认证资料 -->
    <div class="attestation_box">
      <div class="attestation_text">认证资料</div>
      <ul class="attestation_detail">
        <li>
          <p>姓名</p>
          <p>{{$store.state.user_info.name}}</p>
        </li>
        <li>
          <p>账号</p>
          <p>{{$store.state.user_info.account_number}}</p>
        </li>
        <li>
          <p>UID</p>
          <p>{{$store.state.user_info.id}}</p>
        </li>
        <li>
          <p>证件号码</p>
          <p>****</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
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
  background-color: rgb(245, 245, 245);
  div {
    position: absolute;
  }
  span {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-size: 19px;
    margin: 0 auto;
  }
}
.certification_box {
  margin: 16px;
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
.attestation_box {
  margin-left: 16px;
  margin-right: 16px;
  .attestation_text {
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
  .attestation_detail {
    list-style: none;
    margin: 8px 0 0 0;
    padding: 8px 0px;
    position: relative;
    li {
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
      text-decoration: none;
      width: 100%;
      box-sizing: border-box;
      text-align: left;
      padding: 8px 16px;
      background-color: #fff;
      margin-bottom: 2px;
      p:nth-child(1) {
        margin: 0px;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        color: rgba(0, 0, 0, 0.6);
        flex: 1 1 0%;
      }
      p:nth-child(2) {
        margin: 0px;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.00938em;
      }
    }
  }
}
</style>