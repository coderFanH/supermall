<template>
  <div id="hy-swiper">
    <div class="swiper">
      <!--    轮播图图片的插槽，不确定有几张图片（SwiperItem.vue决定样式）-->
      <slot></slot>
    </div>
    <!--    这个插槽作用不明，暂时不讨论-->
    <slot name="indicator"></slot>
    <div class="indicator">
      <!--      轮播图小圆点的插槽（因为不确定有几张图轮播，所以预留插槽）-->
      <slot name="indicator">
        <div class="indi-item"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      slideCount: 0, //轮播图的个数
      currentIndex: 1, //当前的轮播图所在的index
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    })
  },
  methods: {
    handleDom() {
      // 1.获取要操作的元素
      let swiperEl = document.querySelector('.swiper');
      let slideEls = swiperEl.getElementsByClassName('slide');

      // 2.保存轮播图中的个数
      this.slideCount = slideEls.length;

      // 3.如果大于1个，那么在前后分别添加一个slide(不理解原因)

      // 4.让swiper元素，显示第一个(暂时不理解)
    },
    //定时器操作
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
      })
    },
    touchEnd(e) {
      let currentMove = Math.abs(this.distance);
    }
  }
}
</script>

<style scoped>
  #hy-swiper {
    height: 100px;
    background-color: #ff0000;
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #000;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

</style>
