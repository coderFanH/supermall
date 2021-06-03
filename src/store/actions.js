export default {
  addPTOCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldPrice = null;
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldPrice = item;
        }
      }
      if (oldPrice) {
        context.commit('addCounter', oldPrice)
        // payload.count ++
        resolve('当前数量+1')
      } else {
        payload.count = 1;
        context.commit('addToCart', payload)
        // context.state.cartList.push(payload)
        resolve('加入到购物车')
      }
    })
  }
}
