<template>
  <div>
    <!-- 头部 -->
    <div class="top_nav_title">
      <div class="ind_title">AURO Global</div>
      <router-link to="/"> <v-icon color="#000">mdi-earth</v-icon> </router-link>
    </div>
    <!-- 轮播图 -->
    <v-carousel
      height="150"
      cycle
      interval="3000"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- 滚动提示 -->
    <div class="scroll_Y_box">
      <v-carousel
        vertical
        cycle
        interval="2000"
        height="3.0769rem"
        :show-arrows="false"
        hide-delimiter-background
        hide-delimiters
      >
        <v-carousel-item>
          <span class="scroll_span">迪拜推出阿拉伯国家首个加密货币银行</span>
        </v-carousel-item>
        <v-carousel-item>
          <span class="scroll_span">迪拜推出阿拉伯国家首个加密货币银行</span>
        </v-carousel-item>
        <v-carousel-item>
          <span class="scroll_span">迪拜推出阿拉伯国家首个加密货币银行</span>
        </v-carousel-item>
      </v-carousel>
      <div class="scroll_Y_icon">
        <v-icon color="rgb(25, 118, 210)"> mdi-bullhorn </v-icon>
      </div>
    </div>
    <!-- 滚动折线图 -->
    <div class="scroll_box">
      <div class="scroll-div-item_H">
        <div>BTC/USDT <span :class="{ all_red: -0.53 < 0 }"> -0.53%</span></div>
        <div :class="{ all_red: -0.53 < 0 }">23412.66</div>
        <div>23412.66 USD</div>
      </div>
      <div class="scroll-div-item_H">
        <div>BTC/USDT <span :class="{ all_red: -0.53 < 0 }"> -0.53%</span></div>
        <div :class="{ all_red: -0.53 < 0 }">23412.66</div>
        <div>23412.66 USD</div>
        <div></div>
      </div>
      <div class="scroll-div-item_H">
        <div>BTC/USDT <span :class="{ all_red: -0.53 < 0 }"> -0.53%</span></div>
        <div :class="{ all_red: -0.53 < 0 }">23412.66</div>
        <div>23412.66 USD</div>
        <div></div>
      </div>
      <div class="scroll-div-item_H">
        <div>BTC/USDT <span :class="{ all_red: -0.53 < 0 }"> -0.53%</span></div>
        <div :class="{ all_red: -0.53 < 0 }">23412.66</div>
        <div>23412.66 USD</div>
        <div></div>
      </div>
      <div class="scroll-div-item_H">
        <div>BTC/USDT <span :class="{ all_red: -0.53 < 0 }"> -0.53%</span></div>
        <div :class="{ all_red: -0.53 < 0 }">23412.66</div>
        <div>23412.66 USD</div>
        <div></div>
      </div>
    </div>
    <!-- 宫格 -->
    <div class="grid_ind">
      <div class="grid_item" v-for="(item, index) in iconList" :key="index">
        <img :src="item.icons" style="width: 72rpx; height: 72rpx" />
        <span class="grid-text">{{ item.name }}</span>
      </div>
    </div>
    <!-- 展示区域 -->
    <div class="ind_pic">
      <div>
        <img
          src="https://static.aurplus.com/upload/appTemplate/homeAdv/20220825/1aa9f44c59f7e1deffbd7c576869998d.png"
        />
      </div>
      <div>
        <img
          src="https://static.aurplus.com/upload/appTemplate/homeAdv/20220825/0f9ebeed6e47575ace827d9dfd66858f.png"
        />
      </div>
      <div>
        <img
          src="https://static.aurplus.com/upload/appTemplate/homeAdv/20220825/11243bad3f8a4397abe69e44f54fff5a.png"
        />
      </div>
      <div>
        <img
          src="https://static.aurplus.com/upload/appTemplate/homeAdv/20220825/7d1aa7e2d9a31e088cfb3ae2ca151ff8.png"
        />
      </div>
    </div>
    <!-- tab栏切换 -->
    <v-tabs grow @change="changeTab">
      <v-tab href="#tab-1">
        {{ $t("Top Gainers") }}
      </v-tab>
      <v-tab href="#tab-2">
        {{ $t("VOL Leaders") }}
      </v-tab>
    </v-tabs>
    <!-- tab栏下内容区域 -->
    <money-list></money-list>
    <!-- tabbar -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import { getBanners } from '@/api/home'
import MoneyList from "../../components/money_list.vue";
import Tabbar from "../../components/tabbar.vue";
export default {
  name: "Index",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      iconList: [
        {
          icons: require("@/assets/ind_icons/icon1.png"),
          name: this.$t("Deposit"),
        },
        {
          icons: require("@/assets/ind_icons/icon2.png"),
          name: this.$t("Sec Future"),
        },
        {
          icons: require("@/assets/ind_icons/icon3.png"),
          name: this.$t("ICO"),
        },
        {
          icons: require("@/assets/ind_icons/icon4.png"),
          name: this.$t("DEFI"),
        },
        {
          icons: require("@/assets/ind_icons/icon5.png"),
          name: this.$t("Mining"),
        },
        {
          icons: require("@/assets/ind_icons/icon6.png"),
          name: this.$t("NFT"),
        },
        {
          icons: require("@/assets/ind_icons/icon7.png"),
          name: this.$t("Invite"),
        },
        {
          icons: require("@/assets/ind_icons/icon8.png"),
          name: this.$t("Commission"),
        },
        {
          icons: require("@/assets/ind_icons/icon9.png"),
          name: this.$t("About Us"),
        },
        {
          icons: require("@/assets/ind_icons/icon10.png"),
          name: this.$t("Service"),
        },
      ],
    };
  },
  created() {
    // this.getBanners()
  },
  methods: {
    changeTab(a) {
      // console.log(a);
    },
    async getBanners() {
      const {data} = await getBanners()
      console.log(data);
    }
  },
  components: {
    "money-list": MoneyList,
    'tabbar': Tabbar,
  },
};
</script>

<style lang="scss" scoped>
.top_nav_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  a {
    text-decoration: none;
  }
  .ind_title {
  height: 4.3077rem;
  line-height: 4.3077rem;
  font-size: 1.8462rem;
}
}
.scroll_box {
  // display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  // display: flex;
  .scroll-div-item_H {
    display: inline-block;
    padding: 0 0.3846rem 0.7692rem;
    font-size: 1rem;
    width: 9.5385rem;

    div {
      font-size: 1.1538rem;
    }

    div:nth-child(2) {
      font-size: 1.4615rem;
    }
  }
}
.scroll_Y_box {
  display: flex;
  align-items: center;
  .scroll_span {
    line-height: 3.0769rem;
    padding-left: 0.6154rem;
  }
  .scroll_Y_icon {
    transform: rotateY(180deg);
    margin-left: 8px;
    margin-right: 12px;
  }
}
.grid_ind {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .grid_item {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5.1538rem;
    height: 4.4615rem;
    // padding: 0.3077rem;
    margin: 0.3846rem auto;
    img {
      width: 2.7692rem;
      height: 2.7692rem;
    }

    .grid-text {
      font-size: 0.6154rem;
    }
  }
}

.ind_pic {
  display: flex;
  flex-wrap: wrap;
  margin: 1.5385rem 0;

  div {
    width: 50%;
    height: 5.3846rem;

    img {
      height: 100%;
      width: 100%;
    }
  }
}

.charts-box {
  width: 106px;
  height: 40px;
}
// 去除tab栏默认样式
::v-deep .v-tab--active.v-tab:not(:focus)::before {
  opacity: 0;
}
</style>