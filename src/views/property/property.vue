<template>
  <div>
    <!-- 未登录 -->
    <div>
      <!-- 头部标题 -->
      <div class="top_title">{{ $t("Total assets") }}</div>
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
    <!-- tabbar -->
    <tabbar :tabValue="4"></tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar.vue";
import Animation from "@/components/animation.vue";
export default {
  data() {
    return {};
  },
  components: {
    tabbar: Tabbar,
    animation: Animation,
  },
};
</script>

<style lang="scss" scoped>
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