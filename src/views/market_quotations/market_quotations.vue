<template>
  <div>
    <!-- 头部导航栏 -->
    <top-nav
      :topNavLeftName="topNavLeftName"
      :activeNum="1"
      @activeTab="activeTabFn"
    >
      <template v-slot:topNavRight>
        <div class="top_nav_right">
          <div>
            <img src="../../assets/top_nav_icon/1.png" />
          </div>
          <div>
            <img src="../../assets/top_nav_icon/2.png" />
          </div>
        </div>
      </template>
    </top-nav>
    <!-- 自选 -->
    <div v-if="actrveTab === 0">
      <!-- 未登录提示 -->
      <div class="unLogin_tip_box">
        <animation></animation>
        <h6>{{ $t("unLogin") }}</h6>
        <p>{{ $t("afterLoggin") }}</p>
      </div>
      <div class="unLogin_btn_box">
        <v-btn block large color="primary">{{
          $t("Log in immediately")
        }}</v-btn>
      </div>
    </div>
    <!-- 现货 -->
    <div v-if="actrveTab === 1">
      <!-- USDT -->
      <v-tabs>
        <v-tab>USDT</v-tab>
      </v-tabs>
      <!-- 交易列表 -->
      <money-list>
        <template v-slot:topName>
          {{ $t("Name/24H amount") }}
        </template>
        <template v-slot:keyName>
          <div class="market_keyName">
            <div><span>BTC</span><span>/</span><span>USDT</span></div>
            <div>
              <span>{{ $t("24H") }} </span><span> 3308.30{{ $t("M") }}</span>
            </div>
          </div>
        </template>
        <template v-slot:keyPrice>
          <div class="market_keyPirce">
            <div>
              <span :class="[1.12 < 0 ? 'all_red' : 'all_green']"
                >23846.34</span
              >
            </div>
            <div>
              <span>≈23838.70 USD</span>
            </div>
          </div>
        </template>
      </money-list>
    </div>
    <!-- tabbar -->
    <tabbar :tabValue="1"></tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar.vue";
import TopNav from "../../components/top_nav.vue";
import MoneyList from "../../components/money_list.vue";
import Animation from "@/components/animation.vue";
export default {
  name: "MarketQuotations",
  data() {
    return {
      topNavLeftName: [this.$t("Favorites"), this.$t("Spot Market")],
      actrveTab: 1,
    };
  },
  components: {
    tabbar: Tabbar,
    "top-nav": TopNav,
    "money-list": MoneyList,
    animation: Animation,
  },
  methods: {
    activeTabFn(ind) {
      this.actrveTab = ind;
    },
  },
};
</script>

<style lang="scss" scoped>
.market_keyName {
  font-size: 1rem;
  display: flex;
  flex-direction: column;

  div {
    height: 1.5385rem;
    line-height: 1.5385rem;
  }

  div:nth-child(1) span:nth-child(1) {
    font-size: 1.2308rem;
    color: #000;
    font-weight: 600;
  }
}

.market_keyPirce {
  font-size: 1rem;

  div {
    height: 1.5385rem;
    line-height: 1.5385rem;
  }

  div:nth-child(1) {
    font-size: 1.2308rem;
  }
}
.top_nav_right {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  div {
    padding: 0.6154rem;
    img {
      width: 2.3077rem;
      height: 2.3077rem;
    }
  }
}
.top_title {
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 20px;
  background-color: rgb(25, 118, 210);
  color: #fff;
  padding: 0 16px;
}
.unLogin_tip_box {
  margin: 16px;
  padding: 16px;
  // margin-top: 150px;
  h6 {
    margin: 0px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
  p {
    margin: 8px 0px 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
}
.unLogin_btn_box {
  margin: 0 16px;
  button {
    font-size: 15px;
  }
}
</style>