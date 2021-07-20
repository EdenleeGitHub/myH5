<template>
  <div id="app">
    <router-view />
    <!-- :class="{ leftp: $store.show1, leftp1: !$store.show1 }" -->
    <FOOTER :class="$store.state.show1 ? 'left' : 'left1'" />
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.left {
  left: 60%;
  transition: all 0.4s;
}
.left1 {
  left: 0%;
  transition: all 0.4s;
}

// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
