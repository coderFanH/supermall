<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>

    <tab-control :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>1列表1</li>
      <li>2列表1</li>
      <li>3列表1</li>
      <li>4列表1</li>
      <li>5列表1</li>
      <li>6列表1</li>
      <li>7列表1</li>
      <li>8列表1</li>
      <li>9列表1</li>
      <li>10列表1</li>
      <li>11列表1</li>
      <li>12列表1</li>
      <li>13列表1</li>
      <li>14列表1</li>
      <li>15列表1</li>
      <li>16列表1</li>
      <li>17列表1</li>
      <li>18列表1</li>
      <li>19列表1</li>
      <li>20列表1</li>
      <li>21列表1</li>
      <li>22列表1</li>
      <li>23列表1</li>
      <li>24列表1</li>
      <li>25列表1</li>
      <li>26列表1</li>
      <li>27列表1</li>
      <li>28列表1</li>
      <li>29列表1</li>
      <li>30列表1</li>
      <li>31列表1</li>
      <li>32列表1</li>
      <li>33列表1</li>
      <li>34列表1</li>
      <li>35列表1</li>
      <li>36列表1</li>
      <li>37列表1</li>
      <li>38列表1</li>
      <li>39列表1</li>
      <li>40列表1</li>
      <li>41列表1</li>
      <li>42列表1</li>
      <li>43列表1</li>
      <li>44列表1</li>
      <li>45列表1</li>
      <li>46列表1</li>
      <li>47列表1</li>
      <li>48列表1</li>
      <li>49列表1</li>
      <li>50列表1</li>
    </ul>
<!--    <swiper></swiper>-->
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import TabControl from "@/components/content/tabControl/TabControl";

import {getHomeMultidata} from "@/network/home";
// import Swiper from "@/components/common/swiper/My-Swiper";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
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
</style>
