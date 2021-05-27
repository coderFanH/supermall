<template>
  <swiper class="detail-content">
    <swiper-item v-for="item in topImage">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImage: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detail-content {
    height: 300px;
  }
</style>
