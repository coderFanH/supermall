<template>
<div class="shopcart">
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{calLength}})</div>
  </nav-bar>
  <cart-list></cart-list>
  <cart-bottom-bar></cart-bottom-bar>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/shopcart/childComps/CartList";
import CartBottomBar from "@/views/shopcart/childComps/CartBottomBar";
// import Scroll from "@/components/common/scroll/Scroll";
import {mapGetters} from 'vuex'
export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters([
      'calLength'
    ])
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    position: relative;
    z-index: 9;

  }

</style>
