<template>
  <div>
    <div class="name_box">
      <div class="name_box_left">
        <slot name="topName">{{ $t("Ind Name") }}</slot>
      </div>
      <div class="name_box_right">
        <div>{{ $t("Ind Price") }}</div>
        <div>{{ $t("Ind 24H chg%") }}</div>
      </div>
    </div>
    <div class="money_list">
      <div class="money_item">
        <div class="money_left">
          <img
            class="item_logo"
            src="https://static.aurplus.com/upload/currency/logo/20210728/6cd1c2bb78051972117e56a3606a5b65.jpg"
          />
          <slot name="keyName">
            <span class="item_name">EOS/USDT</span>
          </slot>
        </div>
        <div class="money_right">
          <slot name="keyPrice">
            <span
              class="item_price"
              :class="[1.12 < 0 ? 'all_red' : 'all_green']"
              >1.149</span
            >
          </slot>
          <div class="item_chg">
            <button :class="[1.12 < 0 ? 'btn_col_red' : 'btn_col_green']">
              +1.12%
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"MoneyList"
};
</script>

<style lang="scss" scoped>
.money_list {
  padding: 0 1.2308rem;

  .money_item {
    display: flex;
    height: 4.6154rem;
    line-height: 4.6154rem;

    .money_left {
      flex: 1;
      display: flex;
      align-items: center;

      .item_logo {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 0.3077rem;
      }

      .item_name {
        font-size: 1.2308rem;
        font-weight: 600;
      }
    }

    .money_right {
      display: flex;
      flex: 1;
      text-align: right;
      align-items: center;

      .item_price {
        flex: 1;
        padding-right: 0.6154rem;
        font-size: 1.2308rem;
      }

      .item_chg {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        button {
          padding-left: 0;
          padding-right: 0;
          // background-color: rgb(2, 173, 144);
          color: #fff;
          width: 4.9231rem;
          height: 2.7692rem;
          line-height: 2.7692rem;
          font-size: 0.9231rem;
          margin: unset;
        }
      }
    }
  }
}

.name_box {
  display: flex;
  color: rgba(0, 0, 0, 0.6);
  height: 3.0769rem;
  line-height: 3.0769rem;

  .name_box_left {
    flex: 1;
    font-size: 1rem;
    padding-left: 1.2308rem;
  }

  .name_box_right {
    display: flex;
    font-size: 1rem;
    padding-right: 1.2308rem;
    flex: 1;
    justify-content: flex-end;
    text-align: right;

    div:nth-child(1) {
      padding-right: 0.6154rem;
      flex: 1;
    }

    div:nth-child(2) {
      padding-left: 0.3077rem;
      flex: 1;
    }
  }
}
.btn_col_green {
  background-color: rgb(2, 173, 144);
}
.btn_col_red {
  background-color: rgb(235, 38, 80);
}
</style>