<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  components: {
    BScroll
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUp: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // console.log(this.scroll);
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUp,
      keepAlive: true
    })
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp', () => {
      // console.log('上拉加载更多');
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    getScrollY() {
      return this.scroll ? this.scrollY : 0
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
  }
}
</script>

<style scoped>

</style>
