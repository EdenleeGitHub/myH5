<template>
  <div class="regi">
    <van-nav-bar title="找回密码" class="nva" left-arrow @click-left="onLeft" />
  </div>
</template>

<script>
export default {
  methods: {
    onLeft () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.regi {
  height: 100vh;
  background: url('../../assets/bear.png');
  background-size: 100% 100%;
  background-position: center;
}
.nva {
  background: rgba(0, 0, 0, 0.2);
  ::v-deep .van-nav-bar__title {
    color: #bb9272;
  }
}
</style>
