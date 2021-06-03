<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='默认值', duration=2000) {
      console.log('----');
      this.isShow = true;
      this.message = message

      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      },duration)
    }
  }
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // }
}
</script>

<style scoped>

.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.7);
  padding: 8px 10px;
  color: #fff;
  border-radius: 8px;
  z-index: 999;
}

</style>
