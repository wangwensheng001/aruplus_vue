<template>
  <div class="bgc_body">
    <div class="bg_box">
      <!-- 头部 -->
      <div class="top_title_box">
        <v-icon color="#fff" @click="back">mdi-arrow-left</v-icon>
        <span>云挖矿</span>
        <img src="@/assets/subscribe/1.png" alt="" />
      </div>
      <!-- 总资产折合 -->
      <div class="total_assets_box">
        <div class="total_assets_top">
          <span>钱包总资产折合(USDT)</span>
          <img src="@/assets/business/business2.png" alt="" />
        </div>
        <span>--</span>
      </div>
    </div>
    <!-- 下方tab栏 -->
    <div class="bottom_tab">
      <v-tabs grow @change="changeTab">
        <v-tab href="#1"> 矿机商城 </v-tab>
        <v-tab href="#2"> 我的矿池 </v-tab>
      </v-tabs>
    </div>
    <!-- 卡片 -->
    <!-- 卡片 -->
    <div class="card_box">
      <v-card>
        <div style="padding: 8px 0">
          <!-- 货币名称 -->
          <div class="card_top">
            <div>
              <img src="@/assets/mining/1.jpg" alt="" />
              <span>BTC</span>
            </div>
            <div>
              <v-icon color="rgb(25,118,210)"> mdi-alert-circle </v-icon>
            </div>
          </div>
          <!-- 招募价格 期限 -->
          <div class="price_period">
            <div class="price_period_left">
              <div>
                <span>{{ "+" + 5.1 + "%" }}</span>
              </div>
              <span>全网收益率(全网算力当天波动)</span>
            </div>
            <div class="price_period_right">
              <div>
                <span>1</span>
                <span>天</span>
              </div>
              <span>挖矿期限</span>
            </div>
          </div>
          <!-- 描述 -->
          <div class="describe_box">
            <div class="describe_left">
              <img src="@/assets/mining/2.png" alt="" />
            </div>
            <div class="describe_right">
              <div>
                <span>矿机算力：</span>
                <span>820</span>
                <span>MH/s,</span>
                <span>每台</span>
              </div>
              <div>
                <span>本次租金：</span>
                <span>300</span>
                <span>USDT</span>
              </div>
              <div>
                <span>服务费：</span>
                <span>{{3+'%'}}</span>
              </div>
              <div>
                <span>预计日产：</span>
                <span>0.0148</span>
                <span>BTC</span>
              </div>
              <div>
                <span>产出收益率：</span>
                <span>1%-5%</span>
              </div>
            </div>
          </div>
          <!-- 按钮 -->
          <div style="padding: 0 8px">
            <v-btn block large color="primary"> 立即挖矿 </v-btn>
          </div>
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
  background-image: url("@/assets/mining/bg.png");
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
    // margin-bottom: 8px;
    border-bottom: 1px solid #ccc;
    padding: 0 8px 8px 8px;
    div:nth-child(1) {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 8px;
      }
      span {
        font-size: 20px;
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
}
.price_period {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  .price_period_left {
    div {
      span:nth-child(1) {
        margin: 0 4px 0 0;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        color: rgb(2, 173, 144);
        font-size: 18px;
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
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}
::v-deep .v-btn__content {
  font-size: 15px;
}
.describe_box {
  display: flex;
  padding: 8px;
  .describe_left {
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 5px;
    img {
      width: 100px;
      height: 80px;
    }
  }
  .describe_right {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      position: relative;
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: rgb(189, 189, 189);
        left: -10px;
        top: 50%;
        transform: translateY(-50%);
      }
      span {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}
</style>