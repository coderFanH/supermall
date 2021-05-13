<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="backTopShow"
            :pull-up="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>

      <tab-control :titles="['流行', '新款', '精选']"
                   class="tab-control"
                   @tabClick="tabClick"></tab-control>
      <goods-list :goods="getGoodsType"></goods-list>
    </scroll>

    <back-top @click.native="backTopClick"
              v-show="isTopShow"></back-top>
<!--    <swiper></swiper>-->
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
import Scroll from "@/components/common/scroll/Scroll";
import backTop from "@/components/content/backTop/backTop";

import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import {getHomeMultidata, getHomeGoods} from "@/network/home";
// import Swiper from "@/components/common/swiper/My-Swiper";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    backTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isTopShow: false
    }
  },
  computed: {
    getGoodsType() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    backTopShow(position) {
      // console.log(position);
      this.isTopShow = (-position.y) > 1000
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 2;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
</style>
