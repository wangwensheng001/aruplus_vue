<template>
  <div>
    <div class="clearfix">
      <div class="tabbar_box">
        <div
          class="tabbar_item"
          v-for="(item, index) in tabbarList"
          :key="index"
          @click="changeTabbar(index)"
        >
          <img v-if="index === tabValue" :src="item.icons_active" alt="" />
          <img v-else :src="item.icons" alt="" />
          <span :style="{color:index===tabValue ? 'rgb(196, 149, 2)' : 'rgba(0, 0, 0, 0.6)'}">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Tabbar',
  props:{
    tabValue: {
      default: 0
    }
  },
  data() {
    return {
      tabbarList: [
        {
          icons: require("./../assets/tabbar/1.png"),
          icons_active: require("./../assets/tabbar/1_active.png"),
          text: this.$t("Home"),
        },
        {
          icons: require("./../assets/tabbar/2.png"),
          icons_active: require("./../assets/tabbar/2_active.png"),
          text: this.$t("Markets"),
        },
        {
          icons: require("./../assets/tabbar/3.png"),
          icons_active: require("./../assets/tabbar/3_active.png"),
          text: this.$t("Trade"),
        },
        {
          icons: require("./../assets/tabbar/4.png"),
          icons_active: require("./../assets/tabbar/4_active.png"),
          text: this.$t("Futures"),
        },
        {
          icons: require("./../assets/tabbar/5.png"),
          icons_active: require("./../assets/tabbar/5_active.png"),
          text: this.$t("Balances"),
        },
        {
          icons: require("./../assets/tabbar/6.png"),
          icons_active: require("./../assets/tabbar/6_active.png"),
          text: this.$t("Setup"),
        },
      ],
    };
  },
  methods: {
    changeTabbar(index) {
      if (index === 0 && this.tabValue !== index) {
        this.$router.push("/");
      } else if (index === 1 && this.tabValue !== index) {
        this.$router.push("/market_quotations");
      } else if (index === 2 && this.tabValue !== index){
        this.$router.push("/business");
      } else if (index === 3 && this.tabValue !== index){
        this.$router.push("/treaty");
      } else if (index === 4 && this.tabValue !== index){
        this.$router.push("/property");
      } else if (index === 5 && this.tabValue !== index){
        this.$router.push("/my");
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.tabbar_box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: -1px;
  .tabbar_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 1.8462rem;
      height: 1.8462rem;
    }
    span {
      font-size: 0.9231rem;
    }
  }
}
.clearfix {
  height: 3.2308rem;
}
</style>