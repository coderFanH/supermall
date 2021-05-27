<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @tabClick="titleClick"></detail-nav-bar>
    <scroll class="scroll-height" ref="scroll">
      <detail-swiper :topImage="topImage"></detail-swiper>
      <detail-goods-content :goods="goods"></detail-goods-content>
      <detail-shop-content :Shop="Shop"></detail-shop-content>
      <detail-content :detailImage="detailImage" @imageLoadFinish="imageLoadFinish"></detail-content>
      <detail-param-content :paramInfo="paramInfo" ref="param"></detail-param-content>
      <detail-comment-content :commentInfo="commentInfo" ref="comment"></detail-comment-content>
      <goods-list :goods="recommendList" ref="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailGoodsContent from "@/views/detail/childComps/DetailGoodsContent";
import DetailShopContent from "@/views/detail/childComps/DetailShopContent";
import DetailContent from "@/views/detail/childComps/DetailContent";
import DetailParamContent from "@/views/detail/childComps/DetailParamContent";
import DetailCommentContent from "@/views/detail/childComps/DetailCommentContent";
import {getDetail, getRecommend, Goods, Shop, Param} from "@/network/detail";
import GoodsList from "@/components/content/goods/GoodsList";


export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      Shop: {},
      detailImage: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTopY: [],
      getThemeTopY: null
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      // console.log(res);
      this.topImage = res.data.result.itemInfo.topImages
      this.goods = new Goods(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services)
      this.Shop = new Shop(res.data.result.shopInfo)
      this.detailImage = res.data.result.detailInfo
      // console.log(res.data.result.itemParams.info);
      // console.log(res.data.result.itemParams.rule);
      this.paramInfo = new Param(res.data.result.itemParams.info, res.data.result.itemParams.rule)
      // console.log(this.paramInfo);
      // console.log(res.data.result.shopInfo);
      if (res.data.result.rate.list) {
        this.commentInfo = res.data.result.rate.list[0];
      }
      // console.log(res.data.result.list);
      // this.recommendList = res.data.result.list
    })
    getRecommend().then(res => {
      // console.log(res);
      this.recommendList = res.data.data.list
    })
    // 防抖操作先不管
    // this.getThemeTopY = debounce(() => {
    //   this.themeTopY = []
    //   this.themeTopY.push(0)
    //   this.themeTopY.push(this.$refs.param.$el.offsetTop)
    //   this.themeTopY.push(this.$refs.param.$el.offsetTop)
    //   this.themeTopY.push(this.$refs.param.$el.offsetTop)
    //   console.log(this.themeTopY);
    // },300)
  },
  updated() {
    setTimeout(() => {
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.param.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      console.log(this.themeTopY);
    },1000)

  },
  methods: {
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-(this.themeTopY[index]),300)
    },
    imageLoadFinish() {
      // this.themeTopY = []
      // this.themeTopY.push(0)
      // this.themeTopY.push(this.$refs.param.$el.offsetTop)
      // this.themeTopY.push(this.$refs.param.$el.offsetTop)
      // this.themeTopY.push(this.$refs.param.$el.offsetTop)
      // console.log(this.themeTopY);
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailGoodsContent,
    DetailShopContent,
    DetailContent,
    DetailParamContent,
    DetailCommentContent,
    GoodsList
  }
}
</script>

<style scoped>
 #detail {
   height: 100vh;
   position: relative;
   z-index: 1;
   background-color: #fff;
 }

 .detail-nav {
   position: relative;
   z-index: 9;
   background-color: #ffffff;
 }

 .scroll-height {
   position: absolute;
   top: 44px;
   bottom: 60px;
 }

</style>
