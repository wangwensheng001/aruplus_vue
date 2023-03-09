<template>
  <div class="bgc_body">
    <div class="bg_box">
      <!-- 头部 -->
      <div class="top_title_box">
        <v-icon color="#fff" @click="back">mdi-arrow-left</v-icon>
        <span>ICO申购</span>
        <img src="@/assets/subscribe/1.png" alt="" />
      </div>
      <!-- 总资产折合 -->
      <div class="total_assets_box">
        <div class="total_assets_top">
          <span>总资产折合(USDT)</span>
          <img src="@/assets/business/business2.png" alt="" />
        </div>
        <span>--</span>
      </div>
    </div>
    <!-- 下方tab栏 -->
    <div class="bottom_tab">
      <v-tabs grow @change="changeTab">
        <v-tab href="#1"> 正在ICO </v-tab>
        <v-tab href="#2"> 持仓 </v-tab>
        <v-tab href="#3"> 已结束 </v-tab>
      </v-tabs>
    </div>
    <!-- 卡片 -->
    <div class="card_box">
      <v-card>
        <div style="padding: 16px">
          <!-- 货币名称 -->
          <div class="card_top">
            <div>
              <img src="@/assets/subscribe/2.png" alt="" />
              <span>YOIF</span>
            </div>
            <div>
              <div>
                <span>火热进行中</span>
                <span>预计2023-04-20 00:00:00截止</span>
              </div>
              <v-icon color="rgb(25,118,210)"> mdi-alert-circle </v-icon>
            </div>
          </div>
          <!-- 进度条 -->
          <div class="linear_box">
            <v-progress-linear
              height="10"
              value="70.65"
              color="rgb(241, 164, 61)"
              background-color="rgb(238, 238, 238)"
            ></v-progress-linear>
          </div>
          <!-- 进度文字 -->
          <div class="schedule_text">
            <div>
              <span class="color_text">706532354.0577251</span>
              /
              <span>1000000000</span>
              <span>YOIF</span>
            </div>
            <div>
              <span>进度 </span>
              <span class="color_text"> {{ 70.65 + "%" }}</span>
            </div>
          </div>
          <!-- 招募价格 期限 -->
          <div class="price_period">
            <div class="price_period_left">
              <div>
                <span>0.078581</span>
                <span>USDT</span>
              </div>
              <span>招募价格</span>
            </div>
            <div class="price_period_right">
              <div>
                <span>42</span>
                <span>天</span>
              </div>
              <span>预计还剩期限</span>
            </div>
          </div>
          <!-- 按钮 -->
          <v-btn block large color="primary">
            请登录参与
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    },
    changeTab(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.bgc_body {
  height: 100vh;
  background-color: #f5f5f5;
}
.bg_box {
  width: 100%;
  height: 180px;
  position: relative;
  background-image: url("@/assets/subscribe/bg.png");
  background-size: cover;
  .top_title_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 56px;
    padding: 0 16px;
    span {
      color: #fff;
      font-size: 1.4615rem;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
  .total_assets_box {
    padding: 0 30px;
    position: absolute;
    bottom: 40px;
    .total_assets_top {
      display: flex;
      img {
        width: 20px;
        height: 20px;
      }
      span {
        color: #fff;
      }
    }
    span {
      color: #fff;
    }
  }
}
// 去除tab栏默认样式
::v-deep .v-tab--active.v-tab:not(:focus)::before {
  opacity: 0;
}
.bottom_tab {
  margin-top: -24px;
  border-radius: 24px 24px 0 0;
  overflow: hidden;
}
.card_box {
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  margin-top: 16px;
  .card_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    div:nth-child(1) {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 8px;
      }
      span {
        font-size: 16px;
        font-weight: 500;
      }
    }
    div:nth-child(2) {
      display: flex;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 8px;
        span:nth-child(1) {
          margin: 0px;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0.00938em;
          font-size: 13px;
          color: rgb(241, 164, 61);
        }
        span:nth-child(2) {
          margin: 0px;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0.00938em;
          font-size: 13px;
        }
      }
    }
  }
  .linear_box {
    border-radius: 5px;
    overflow: hidden;
  }
}
.schedule_text {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  div:nth-child(1) {
    span:nth-child(3) {
      margin-left: 8px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .color_text {
    color: rgb(241, 164, 61);
  }
}
.price_period {
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .price_period_left {
    div {
      span:nth-child(1) {
        margin: 0 4px 0 0;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        color: rgb(2, 173, 144);
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
  .price_period_right {
    text-align: right;
    div {
      span:nth-child(1) {
        margin: 0 4px 0 0;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
}
::v-deep .v-btn__content {
  font-size: 15px;
}
</style>