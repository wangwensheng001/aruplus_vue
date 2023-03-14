<template>
  <div style="background-color: rgb(245, 245, 245); height: 100%">
    <!-- 头部 -->
    <div class="top_back">
      <div>
        <v-icon color="#000" @click="back">mdi-close</v-icon>
      </div>
      <span>选择币种</span>
    </div>
    <!-- 币种 -->
    <ul class="currency_box">
      <li class="currency_item" v-for="item in 5" :key="item">
        <div>
          <img
            src="https://static.aurplus.com//upload/currency/logo/20210728/6b4c7518efe89dd112cb4f21e5e67a9a.jpg"
            alt=""
          />
        </div>
        <div>
          <span>TRX</span>
          <span>Tronix</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getFixAddress,getRechargeList } from '@/api/api'
export default {
  created() {
    
  },
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
    right: 12px;
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
.currency_box {
  list-style: none;
  margin: 0px;
  padding: 8px 0px;
  position: relative;
  .currency_item {
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px;
    border-radius: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    color: inherit;
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    text-decoration: none;
    min-width: 0px;
    box-sizing: border-box;
    text-align: left;
    padding: 8px 16px;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    div:nth-child(1) {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 16px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    div:nth-child(2) {
      flex: 1 1 auto;
      min-width: 0px;
      margin-top: 6px;
      margin-bottom: 6px;
      span:nth-child(1) {
        margin: 0px;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        display: block;
      }
      span:nth-child(2) {
        margin: 0px;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        color: rgba(0, 0, 0, 0.6);
        display: block;
      }
    }
  }
}
</style>