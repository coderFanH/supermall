<template>
  <div  :class="{check: isCheck}" class="check-botton">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckBotton",
  props: {
    isCheck: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style scoped>
.check-botton {
  border-radius: 50%;
  border: 2px solid #aaa;
}

.check {
  background-color: red;
  border: 2px solid red;
}
</style>
