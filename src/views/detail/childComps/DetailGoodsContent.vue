<template>
<!--  Object.keys(goods).length !== 0用来判断当图片是否全部加载完成-->
  <div class="main-goods" v-if="Object.keys(goods).length !== 0">
    <div class="goods-top">{{goods.title}}</div>
    <div class="goods-center">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount"
            class="discount"
            :style="{ backgroundColor: goods.bgColor}">{{goods.discount}}</span>
    </div>
    <div class="goods-bottom">
      <span>{{goods.column[0]}}</span>
      <span>{{goods.column[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="info-bottom">
      <span class="span-bottom"
            v-for="index in goods.services.length - 1"
            :key="index" v-if="goods.services[index - 1].icon">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsContent",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .main-goods {
    width: 100%;
    margin-top: 15px;
    padding: 0px 10px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .goods-top {
    text-align: justify;
    color: #222;
  }

  .goods-center {
    margin-top: 10px;
  }

  .goods-center .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .goods-center .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .goods-center .discount {
    font-size: 12px;
    position: relative;
    top: -4px;
    margin-left: 5px;
    padding: 3px 6px;
    color: #fff;
    border-radius: 8px;
    background-color: var(--color-high-text);
  }

  /*.goods-center span {*/
  /*  padding-right: 8px;*/
  /*}*/

  /*.goods-center span:first-child {*/
  /*  color: var(--color-high-text);*/
  /*  font-size: 20px;*/
  /*}*/

  /*.goods-center span:nth-child(2) {*/
  /*  font-size: 14px;*/
  /*  color: var(--color-text);*/
  /*  text-decoration: line-through;*/
  /*}*/

  /*.goods-center span:last-child {*/
  /*  background-color: var(--color-high-text);*/
  /*  border-radius: 8px;*/
  /*  color: #fff;*/
  /*  text-align: center;*/
  /*}*/

  .goods-bottom {
    font-size: 13px;
    line-height: 30px;
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .goods-bottom span {
    /*flex: 1;*/
    text-align: center;
  }

  .info-bottom {
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .span-bottom img {
    position: relative;
    top: 2px;
    width: 14px;
    height: 14px;
  }

  .span-bottom span {
    font-size: 13px;
    margin-left: 5px;
    color: #333;
  }
</style>
