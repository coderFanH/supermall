<template>
  <div class="main-shop" v-if="Object.keys(Shop).length !== 0">
    <div class="shop-top">
      <img :src="Shop.shopLogo" v-if="Shop.shopLogo" alt="">
      <span class="title">{{Shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="middle-item middle-left">
        <div class="info-sells">
          <div class="sells-count">{{Shop.cSells}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div>
          <div class="goods-count">{{Shop.cGoods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="middle-item middle-right">
        <table>
          <tr :key="index" v-for="(item, index) in Shop.score">
            <td>{{ item.name }}</td>
            <td :class="{ 'score-better': item.isBetter }" class="score">
              {{ item.score }}
            </td>
            <td :class="{ 'better-more': item.isBetter }" class="better">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailShopContent",
  props: {
    Shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .main-shop {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top {
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .shop-top img{
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 50%;
  }
  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }
  .shop-middle {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .middle-item {
    flex: 1;
  }
  .middle-left {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #333;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }

  .sells-count,
  .goods-count {
    font-size: 18px;
  }

  .sells-text,
  .goods-text {
    font-size: 12px;
    margin-top: 10px;
  }
  .middle-right {
    font-size: 13px;
    color: #333333;
  }

  .middle-right table {
    width: 120px;
    margin-left: 30px;
  }

  .middle-right table td {
    padding: 5px 0;
  }

  .middle-right .score {
    color: #5ea732;
  }

  .middle-right .score-better {
    color: #f13e3a;
  }

  .middle-right .better span {
    padding: 3px;
    text-align: center;
    color: #ffffff;
    background-color: #5ea732;
  }

  .middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom {
    margin-top: 10px;
    text-align: center;
  }

  .enter-shop {
    font-size: 14px;
    line-height: 30px;
    display: inline-block;
    width: 150px;
    height: 30px;
    text-align: center;
    border-radius: 10px;
    background-color: #f2f5f8;
  }
</style>
