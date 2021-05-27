<template>
  <div class="detail-info" v-if="Object.keys(detailImage).length !== 0">
    <div class="detail-info-top clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailImage.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="detail-info-middle">{{detailImage.detailImage[0].key}}</div>
    <div class="detail-info-bottom" @load="imageLoad">
      <img v-for="(item, index) in detailImage.detailImage[0].list" :key="index" :src="item" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailContent",
  props: {
    detailImage: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoadFinish')
    }
  }
}
</script>

<style scoped>

.detail-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.detail-info-top {
  padding: 0 15px;
}

.detail-info-top .start,
.detail-info-top .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.detail-info-top .start::before,
.detail-info-top .end::after {
  content: '';
  width: 3px;
  height: 3px;
  position: absolute;
  background-color: #333333;
  bottom: 0px;
}

.detail-info-top .start {
  float: left;
}
.detail-info-top .end {
  float: right;
}
.detail-info-top .end::after {
  right: 0;
}
.detail-info-top .desc {
  padding: 15px 0;
  font-size: 14px;
}

.detail-info-middle {
  margin: 10px 10px;
  font-size: 14px;
  color: #333333;
}

.detail-info-bottom img {
  width: 100%;
}

</style>
