<template>
  <van-tabbar
    v-show="!['/register', '/login', '/retrieve'].includes($route.path)"
    v-model="active"
    @change="get"
  >
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/shoPing" icon="search">商品</van-tabbar-item>
    <van-tabbar-item to="/find" icon="friends-o">发现</van-tabbar-item>
    <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    get (val) {
      // console.log(val)
      // console.log(this.$route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
