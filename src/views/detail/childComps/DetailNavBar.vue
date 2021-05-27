<template>
  <nav-bar>
    <div slot="left"
         class="arrow"
         @click="arrowClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in title"
           class="title-content"
           :class="{active: currentIndex == index}"
           @click="titleClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit("tabClick",index)
    },
    arrowClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

  .arrow {
    margin-top: 6px;
  }

  .title {
    display: flex;
  }

  .title-content {
    flex: 1;
    font-size: 14px;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
