<template>
  <div class="home">
    <van-nav-bar title="首页" class="nva" />
    <div class="tops">
      <div class="contentl" @click="popups(true)">
        <div>马原</div>
        <van-icon name="apps-o" color="#000" />
      </div>
      <div class="content">
        <div><van-icon name="notes-o" color="#1989fa" /></div>
        <div class="message"><van-icon name="chat-o" color="#1989fa" /></div>
        <div><van-icon name="smile-o" color="#1989fa" /></div>
      </div>
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="top" :style="{ height: '50%' }">
      <div @click="popups(false)" class="popfooter">关闭</div>
    </van-popup>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    popups (val) {
      this.show = val
    }
  }
}
</script>

<style lang="less" scoped>
.nva {
  background-color: rgb(245, 247, 243);
}
.tops {
  height: 35px;
  display: flex;
  background-color: rgb(235, 240, 230);
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-weight: 600;
  color: #000;
  .contentl {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  // background-color: rgb(233, 223, 223);
  .content {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    width: 90px;
    /deep/ .van-icon {
      font-size: 20px !important;
      font-weight: 700;
      color: #000;
    }
  }
}
.popfooter {
  position: absolute;
  bottom: 5px;
  left: 45%;
}
</style>
