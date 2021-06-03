<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <div>
        <cart-list-item v-for="item in cartListData"
                        :itemInfo="item"
                        :key="item.iid"></cart-list-item>
      </div>
    </scroll>
<!--    <cart-list-item :cartListData="cartListData"></cart-list-item>-->
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import {mapGetters} from "vuex"
import CartListItem from "@/views/shopcart/childComps/CartListItem";

export default {
  name: "CartList",
  computed: {
    ...mapGetters([
      'cartListData'
    ])
  },
  components: {
    CartListItem,
    Scroll,
  },
  activated() {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>

.content {
  height: calc(100vh - 44px - 60px - 44px);
}



</style>
