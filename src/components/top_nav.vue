<template>
  <div>
    <div class="top_nav">
      <div class="top_nav_left">
        <slot name="topNavLeft">
          <div
            :class="{ active_top_nav: isActive === index }"
            v-for="(item, index) in topNavLeftName"
            @click="activeInd(index)"
            :key="index"
          >
            {{ item }}
          </div>
        </slot>
      </div>
      <slot name="topNavRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"TopNav",
  props: {
    topNavLeftName: {

    },
    activeNum: {
      default: 1,
    },
  },
  data() {
    return {
      isActive: this.activeNum,
    };
  },
  methods: {
    activeInd(ind) {
      this.isActive = ind;
      this.$emit('activeTab',ind)
    },
  },
};
</script>

<style lang="scss" scoped>
.top_nav {
  display: flex;
  height: 4.3077rem;
  border-bottom: 1px solid #ccc;

  .top_nav_left {
    display: flex;
    padding: .6154rem 0px .9231rem 1.2308rem;
    // flex: 1;

    div {
      margin-right: 1.2308rem;
      font-size: 1rem;
      display: flex;
      align-items: flex-end;
    }

    .active_top_nav {
      font-size: 1.3846rem;
      font-weight: 600;
    }
  }
}
</style>