<template>
  <div>
    <!-- 头部导航 -->
    <top-nav :activeNum="0" :topNavLeftName="topNavLeftName"></top-nav>
    <div class="menuFixBox">
      <!-- 菜单栏 -->
    <div class="busin_menu">
      <!-- 菜单左侧部分 -->
      <div class="busin_menu_left">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer v-model="drawer" absolute left temporary height="100vh">
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>Foo</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <span>BTC {{ $t("Swap") }}/USDT</span>
        <div class="item_chg">
          <button>+1.12%</button>
        </div>
      </div>
      <!-- 菜单右侧部分 -->
      <div class="busin_menu_right">
        <img src="../../assets/business/business1.png" alt="" />
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cut_apart_line"></div>
    <!-- tab栏切换 -->
    <v-tabs grow @change="changeTab">
      <v-tab href="#tab-1"> {{ $t("Open") }} </v-tab>
      <v-tab href="#tab-2"> {{ $t("Position") }} </v-tab>
    </v-tabs>
    </div>
    <!-- 下方主内容 -->
    <div class="muiBox_root">
      <!-- 左侧部分 -->
      <div class="muiBox_root_left">
        <!-- 买入卖出按钮 -->
        <div class="muiBox_root_btn">
          <div
            @click="clickBtn(0)"
            :class="{ muiBox_root_btn_active1: activeBtn === 0 }"
          >
            {{ $t("Open Long") }}
          </div>
          <div
            @click="clickBtn(1)"
            :class="{ muiBox_root_btn_active2: activeBtn === 1 }"
          >
            {{ $t("Open Short") }}
          </div>
        </div>
        <!-- select选择框 -->
        <div class="select-box">
          <div class="first_inp">
            <v-select
              outlined
              dense
              @change="changeSelect"
              v-model="select"
              :items="selectItem"
              item-text="state"
              hide-details
            ></v-select>
          </div>
          <div style="margin: 0 3px"></div>
          <v-select
            outlined
            dense
            @change="changeMultiple"
            v-model="multipleSelect"
            :items="multipleItem"
            item-text="state"
            hide-details
          ></v-select>
        </div>
        <!-- 价格input -->
        <div class="price_inp_box">
          <v-text-field
            :label="labelPrice"
            outlined
            dense
            hide-details
            v-model="InputPrice"
          >
            <div class="plus_minus_box" slot="append">
              <v-icon color="#aaa"> mdi-minus </v-icon>
              <div class="plus_minus_line"></div>
              <v-icon color="#aaa"> mdi-plus </v-icon>
            </div>
          </v-text-field>
        </div>
        <!-- 提示文字 -->
        <div class="prompt_text">
          <div
            style="
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.6);
              margin: 0.2308rem 0;
            "
          >
            ≈{{ InputPrice ? InputPrice : "0.00" }} USD
          </div>
          <div
            style="
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.6);
              margin: 0.2308rem 0;
            "
          >
            1000USDT = 1张
          </div>
        </div>
        <!-- 交易额input -->
        <div class="trade-box">
          <div class="first_inp">
            <v-text-field
              :label="labelAmt"
              outlined
              dense
              hide-details
              v-model="quantityVal"
            >
            </v-text-field>
          </div>
          <div style="margin: 0 3px"></div>
          <v-select
            outlined
            dense
            @change="changeFix"
            v-model="fixSelect"
            :items="fixItem"
            item-text="state"
            hide-details
          ></v-select>
        </div>
        <!-- 可用部分 -->
        <div class="muiGrid2-root">
          <span>{{ $t("Available") }}{{ fixNum }}{{ $t("Cont") }}</span>
          <div>
            <span>0.0000000 BTC</span>
          </div>
        </div>
        <!-- 刻度线 -->
        <v-slider
          v-model="sliderVal"
          step="1"
          thumb-label
          ticks
          color="rgb(25, 118, 210)"
          track-color="rgb(191, 191, 191)"
          hide-details
        ></v-slider>
        <div class="ticks_labels">
          <span>0</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
        <!-- 止盈止损 -->
        <div class="stop_surplus-box">
          <div class="first_inp">
            <v-text-field
              :label="labelSurplus"
              outlined
              dense
              hide-details
              v-model="stopSurplusVal"
            >
            </v-text-field>
          </div>
          <div style="margin: 0 3px"></div>
          <v-select
            outlined
            dense
            @change="changeStopSurplus"
            v-model="stopSurplusSelect"
            :items="stopSurplusItem"
            item-text="state"
            hide-details
          ></v-select>
        </div>
        <div class="stop_loss-box">
          <div class="first_inp">
            <v-text-field
              :label="labelSurplus"
              outlined
              dense
              hide-details
              v-model="stopLossVal"
            >
            </v-text-field>
          </div>
          <div style="margin: 0 3px"></div>
          <v-select
            outlined
            dense
            @change="changeStopLoss"
            v-model="stopLossSelect"
            :items="stopLossItem"
            item-text="state"
            hide-details
          ></v-select>
        </div>
        <!-- 交易量 -->
        <div class="a_turnover_bottom">
          <span>{{ $t("Trading volume") }}</span>
          <span>0.000000000&nbsp;BTC</span>
        </div>
        <!-- 下方买入卖出按钮 -->
        <div
          class="buy_btn_plus"
          :style="{
            backgroundColor:
              activeBtn === 0 ? 'rgb(2, 173, 144)' : 'rgb(235, 38, 80)',
          }"
        >
          {{ $t("Login again") }}
          <span class="buy_btn_plus_span">{{ btnText }}</span>
        </div>
      </div>
      <!-- 右侧部分 -->
      <div class="muiBox_root_right">
        <!-- 头部标签 -->
        <div class="top_lable">
          <span>{{ $t("Price") }}</span>
          <span>{{ $t("Amt") }}</span>
        </div>
        <!-- 动态数据 -->
        <div class="trends_data_box">
          <div class="trends_data_item" v-for="(item, index) in 5" :key="index">
            <div style="color: rgb(235, 38, 80)">22340.5</div>
            <!-- <div :style="'backgroundSize:' + '120.6%' + ' 100%;'">0.43</div> -->
            <div
              :style="[
                {
                  backgroundImage:
                    -0.24 > 0
                      ? 'linear-gradient(rgba(18, 184, 134, 0.15),rgba(18, 184, 134, 0.15))'
                      : 'linear-gradient(rgba(250, 82, 82, 0.15), rgba(250, 82, 82, 0.15))',
                },
                { backgroundSize: `120.6% 100%` },
              ]"
            >
              0.43
            </div>
          </div>
        </div>
        <!-- 价格 -->
        <div class="right_price">
          <span
            :style="{
              color: -0.24 > 0 ? 'rgb(2, 173, 144)' : 'rgb(235, 38, 80)',
            }"
            >254564</span
          >
          <span>≈254564 USD</span>
          <span>{{ $t("Index price") }} 254564</span>
        </div>
        <!-- 动态数据 -->
        <div class="trends_data_box">
          <div class="trends_data_item" v-for="(item, index) in 5" :key="index">
            <div>22340.5</div>
            <div
              :style="[
                {
                  backgroundImage:
                    0.24 > 0
                      ? 'linear-gradient(rgba(18, 184, 134, 0.15),rgba(18, 184, 134, 0.15))'
                      : 'linear-gradient(rgba(250, 82, 82, 0.15), rgba(250, 82, 82, 0.15))',
                },
                { backgroundSize: `120.6% 100%` },
              ]"
            >
              0.43
            </div>
          </div>
        </div>
        <!-- 深度 -->
        <div class="deep_box">
          <v-select
            :items="deepItem"
            outlined
            dense
            hide-details
            placeholder="深度1"
            @change="changeDeep"
            v-model="deepSelect"
            item-text="state"
          ></v-select>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Click Me
              </v-btn> -->
              <img
                class="dialogImg"
                src="../../assets/business/handicap1.png"
                alt=""
                v-bind="attrs"
                v-on="on"
              />
            </template>

            <v-card> 22 </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cut_apart_line"></div>
    <!-- 当前委托 -->
    <div class="entrust_box">
      <v-tabs @change="changeEntrust">
        <v-tab href="#entrust1">{{ $t("Limit order1") }}</v-tab>
        <v-tab href="#entrust2">{{ $t("Trgger order") }}</v-tab>
      </v-tabs>
      <div class="entrust_box_right">
        <v-icon color="rgb(25, 118, 210)"> mdi-menu </v-icon>
        <span>{{ $t("All") }}</span>
      </div>
    </div>
    <!-- 详情部分 -->
    <div class="detail_box">
      <img src="../../assets/business/none.png" alt="" />
      <div>{{ $t("Query data is empty") }}</div>
      <div class="occupy_box"></div>
    </div>
    <!-- tabbar -->
    <tabbar :tabValue="3"></tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar.vue";
import TopNav from "../../components/top_nav.vue";
export default {
  name: "Treaty",
  data() {
    return {
      topNavLeftName: [this.$t("USDT Futures"), this.$t("Sec Futures")],
      drawer: false,
      group: null,
      offset: true,
      select: { state: this.$t("Limit order") },
      multipleSelect: { state: "20X" },
      fixSelect: { state: this.$t("Cont") },
      stopSurplusSelect: { state: this.$t("Pro") },
      stopLossSelect: { state: this.$t("Pro") },
      selectItem: [
        { state: this.$t("Limit order") },
        { state: this.$t("Market order") },
      ],
      multipleItem: [{ state: "20X" }],
      fixItem: [{ state: this.$t("Cont") }],
      stopSurplusItem: [{ state: this.$t("Pro") }],
      stopLossItem: [{ state: this.$t("Pro") }],
      activeBtn: 0,
      sliderVal: 0,
      InputPrice: null,
      quantityVal: null,
      fixNum: 0,
      stopSurplusVal: null,
      stopLossVal: null,
      dialog: false,
      deepSelect: { state: this.$t("Depth") + "1" },
      deepItem: [
        this.$t("Depth") + "1",
        this.$t("Depth") + "2",
        this.$t("Depth") + "3",
        this.$t("Depth") + "4",
        this.$t("Depth") + "5",
        this.$t("Depth") + "6",
      ],
      labelPrice: this.$t("Price"),
      labelAmt: this.$t("Amt"),
      labelSurplus: this.$t("Take Profit Price(Optional)"),
      labelLoss: this.$t("Stop loss price(Optional)"),
    };
  },
  components: {
    tabbar: Tabbar,
    "top-nav": TopNav,
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    changeTab(a) {
      console.log(a);
    },
    clickBtn(num) {
      this.activeBtn = num;
    },
    changeSelect(a) {
      console.log(a);
    },
    changeMultiple(e) {
      console.log(e);
    },
    changeFix(e) {
      console.log(e);
    },
    changeStopSurplus(e) {
      console.log(e);
    },
    changeStopLoss(e) {
      console.log(e);
    },
    changeDeep(e) {
      console.log(e);
    },
    changeEntrust(e) {
      console.log(e);
    },
    scrolling() {
      // 滚动条距文档顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 滚动条滚动的距离
      let scrollStep = scrollTop - this.oldScrollTop;
      // console.log("header 滚动距离 ", scrollTop);
      // 更新——滚动前，滚动条距文档顶部的距离
      this.oldScrollTop = scrollTop;

      //变量windowHeight是可视区的高度
      // let windowHeight =
      //   document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      // let scrollHeight =
      //   document.documentElement.scrollHeight || document.body.scrollHeight;

      //滚动条到底部的条件
      // if (scrollTop + windowHeight == scrollHeight) {
      //   //你想做的事情
      //   console.log("header  你已经到底部了");
      // }
      // if (scrollStep < 0) {
      //   console.log("header 滚动条向上滚动了！");
      // } else {
      //   console.log("header  滚动条向下滚动了！");
      // }
      // 判断是否到了最顶部
      // if (scrollTop <= 0) {
      //   console.log("header 到了最顶部")
      // }

      if (scrollTop >= 56) {
        document.querySelector(".menuFixBox").style.position = "fixed";
        document.querySelector(".menuFixBox").style.backgroundColor = "#fff";
        document.querySelector(".menuFixBox").style.top = "0";
        document.querySelector(".menuFixBox").style.left = "0";
        document.querySelector(".menuFixBox").style.right = "0";
        document.querySelector(".menuFixBox").style.zIndex = "9999";
        document.querySelector(".cut_apart_line").style.display = "none";
      }

      if (scrollTop < 56) {
        document.querySelector(".menuFixBox").style.position = "unset";
        document.querySelector(".menuFixBox").style.backgroundColor = "unset";
        document.querySelector(".menuFixBox").style.top = "unset";
        document.querySelector(".menuFixBox").style.left = "unset";
        document.querySelector(".menuFixBox").style.right = "unset";
        document.querySelector(".menuFixBox").style.zIndex = "unset";
        document.querySelector(".cut_apart_line").style.display = "block";
      }
    },
  },
  computed: {
    sliderColor: function () {
      return this.activeBtn === 0 ? "rgb(2, 173, 144)" : "rgb(235, 38, 80)";
    },
    btnText: function () {
      return this.activeBtn === 0 ? this.$t("Bullish") : this.$t("Bearish");
    },
  },
  mounted() {
    // 监听页面滚动事件
    window.addEventListener("scroll", this.scrolling);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrolling);
  },
};
</script>

<style lang="scss" scoped>
.item_chg {
  // flex: 1;
  display: flex;
  justify-content: flex-end;

  button {
    padding-left: 0;
    padding-right: 0;
    background-color: rgb(2, 173, 144);
    color: #fff;
    width: 4.9231rem;
    height: 2.7692rem;
    line-height: 2.7692rem;
    font-size: 0.9231rem;
    margin: unset;
    border-radius: 0.3846rem;
  }
}
.busin_menu {
  display: flex;
  height: 3.4615rem;
  padding: 0 0.6154rem 0 0.6154rem;

  .busin_menu_left {
    display: flex;
    flex: 1;
    align-items: center;

    span {
      margin: 0 0.6154rem;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 600;
    }
  }

  .busin_menu_right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 2.6923rem;
      height: 2.6923rem;
      // padding: 0 0.3846rem;
    }
  }
}
// 去除tab栏默认样式
::v-deep .v-tab--active.v-tab:not(:focus)::before {
  opacity: 0;
}
.cut_apart_line {
  height: 0.6154rem;
  background-color: rgba(0, 0, 0, 0.12);
}
.detail_container {
  border-top: 1px solid #ccc;
}
.muiBox_root {
  padding: 0.6154rem 0 1.2308rem;
  display: flex;

  .muiBox_root_left {
    // width: 17.3077rem;
    width: 60%;
    padding-left: 0.6154rem;

    .muiBox_root_btn {
      display: flex;
      margin-bottom: 0.6154rem;

      div {
        width: 7.6923rem;
        height: 2.6923rem;
        background-color: rgba(0, 0, 0, 0.12);
        color: #000;
        font-size: 1.2308rem;
        border-radius: 0.3846rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      div:nth-child(2) {
        margin-left: auto;
      }

      .muiBox_root_btn_active1 {
        background-color: rgb(2, 173, 144);
        color: #fff;
      }

      .muiBox_root_btn_active2 {
        background-color: rgb(235, 38, 80);
        color: #fff;
      }
    }
    .select-box {
      margin-bottom: 0.6154rem;
      display: flex;
      .first_inp {
        ::v-deep .v-input__slot {
          width: 123px;
        }
      }
      .v-input {
        font-size: 0.9231rem;
      }
    }
    .price_inp_box {
      ::v-deep .v-input {
        font-size: 1rem;
      }
      ::v-deep .v-label {
        font-size: 1rem;
      }
    }
    .plus_minus_box {
      display: flex;
      align-content: center;
      .plus_minus_line {
        height: 0.0385rem;
        width: 0.0385rem;
        margin: 0 0.3846rem;
      }
    }
    .prompt_text {
      display: flex;
      justify-content: space-between;
    }
    .trade-box {
      // height: 100%;
      // display: flex;
      // align-items: center;
      display: flex;
      .first_inp {
        ::v-deep .v-input__slot {
          width: 123px;
        }
      }
      ::v-deep .v-input {
        font-size: 1rem;
      }
      ::v-deep .v-label {
        font-size: 0.9231rem;
      }
    }
    .BTCstyle {
      display: block;
      height: 1.8462rem;
      line-height: 1.8462rem;
      color: rgba(0, 0, 0, 0.54);
      font-size: 0.9231rem;
    }
    .muiGrid2-root {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(0, 0, 0, 0.6);
      font-size: 1rem;
      margin: 0.2308rem 0 0.7692rem;
      div {
        display: flex;
        align-items: center;
      }
    }
    .stop_surplus-box,
    .stop_loss-box {
      display: flex;
      margin: 0.7692rem 0;
      .first_inp {
        ::v-deep .v-input__slot {
          width: 142px;
        }
      }
      ::v-deep .v-label {
        font-size: 1rem;
      }
      ::v-deep .v-input {
        font-size: 1rem;
      }
      ::v-deep .v-input__slot {
        padding: 0 0.3077rem;
      }
    }
    .a_turnover_top {
      display: flex;
      justify-content: space-between;
      font-size: 1.2308rem;
      color: rgba(0, 0, 0, 0.6);
      padding: 0.3077rem;
      margin-top: 0.3077rem;
    }
    .a_turnover_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.2308rem;
      color: rgba(0, 0, 0, 0.6);
      padding: 0.3077rem;
      span:nth-child(1) {
        font-size: 1rem;
        margin-right: 0.7692rem;
      }
      span {
        font-size: 1rem;
      }
    }
    // 刻度线
    ::v-deep .v-slider__tick-label {
      transform: translateX(-50%) !important;
    }
    .ticks_labels {
      display: flex;
      justify-content: space-between;
      // span {
      //   transform: translateX(75%);
      // }
      // span:nth-child(5) {
      //   transform: translateX(0);
      // }
    }
    .buy_btn_plus {
      width: 100%;
      height: 3.0769rem;
      line-height: 3.0769rem;
      text-align: center;
      // background-color: rgb(2, 173, 144);
      border-radius: 0.3846rem;
      color: #fff;
      font-size: 1.2308rem;
      font-weight: 600;
      position: relative;
      .buy_btn_plus_span {
        position: absolute;
        right: 5px;
        bottom: 0;
        font-size: 0.9615rem;
        line-height: 2rem;
      }
    }
  }

  .muiBox_root_right {
    width: 11.5385rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top_lable {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
      padding: 0 0.6154rem;
    }
    .right_price {
      display: flex;
      flex-direction: column;
      padding: 0 0.6154rem;
      span:nth-child(1) {
        font-size: 1.3846rem;
      }
      span:nth-child(2) {
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    .trends_data_box {
      padding: 0.6154rem 0;
      .trends_data_item {
        display: flex;
        justify-content: space-between;
        div {
          padding: 0 0.6154rem;
          height: 2rem;
          line-height: 2rem;
          font-size: 1rem;
        }
        // div:nth-child(1) {
        //   color: rgb(2, 173, 144);
        // }
        div:nth-child(2) {
          color: rgba(0, 0, 0, 0.6);
          // background-size: 17.0249% 100%;
          // background-image: linear-gradient(
          //   rgba(18, 184, 134, 0.15),
          //   rgba(18, 184, 134, 0.15)
          // );
          background-position: 100% 100%;
        }
      }
    }
    .deep_box {
      display: flex;
      padding: 0 0.3077rem;
      ::v-deep .v-input {
        font-size: 1rem;
      }
      ::v-deep .v-input__slot {
        min-height: 30px;
        height: 32px;
      }
      ::v-deep .v-input__append-inner {
        margin-top: 4px;
      }
      .dialogImg {
        width: 2.6154rem;
        height: 2.6154rem;
        margin-left: 0.6154rem;
      }
    }
  }
}
.entrust_box {
  display: flex;
  justify-content: space-between;
  // padding: 0 0.6154rem;
  .entrust_box_right {
    display: flex;
    width: 6.1538rem;
    color: rgb(25, 118, 210);
    align-items: center;
    justify-content: space-between;
    padding: 0 0.3846rem;
  }
}
.detail_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.2308rem;
  padding: 1.2308rem;
  img {
    width: 9.2308rem;
    height: 9.2308rem;
  }
  div:nth-child(2) {
    margin-top: 1.2308rem;
  }
  .occupy_box {
    height: 2.4615rem;
  }
}
</style>