<template>
  <div class="home" :class="{ margins: show1, margins1: !show1 }">
    <van-nav-bar title="首页" class="nva" />
    <div class="tops">
      <div class="contentl">
        <i class="iconfont" @click="shows">&#xe690;</i>
        <div @click="popups(true)">马原</div>
        <i class="iconfont">&#xe603;</i>
      </div>
      <div class="content">
        <div><van-icon name="notes-o" color="#1989fa" /></div>
        <div class="message"><van-icon name="chat-o" color="#1989fa" /></div>
        <div><van-icon name="smile-o" color="#1989fa" /></div>
      </div>
    </div>
    <div class="center">
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="image in images" :key="image"
          ><img class="imgs" :src="image" alt=""
        /></van-swipe-item>
      </van-swipe>
      <div class="content2">
        <div>距离考试还有<span>88</span> 天</div>
        <div>坚持学习<span>17</span> 天 <i class="iconfont">&#xe600;</i></div>
      </div>
      <div>
        <van-grid :border="false">
          <van-grid-item
            v-for="i in 7"
            :key="i"
            icon="https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg"
            text="公开课"
          />
        </van-grid>
      </div>
      <div class="content2">
        <div>今日直播公开课</div>
        <div>查看更多 ></div>
      </div>
      {{ $store.state.show1 + '----' }}
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="top" :style="{ height: '50%' }">
      <div @click="popups(false)" class="popfooter">关闭</div>
    </van-popup>
    <!-- 图标位置 -->
    <van-popup
      v-model="show1"
      closeable
      @close="setd"
      position="left"
      :style="{ width: '60%', height: '100%', background: '#343843' }"
    >
      <div>6666</div>
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
      show: false,
      show1: false,
      images: [
        'https://img0.baidu.com/it/u=880523998,3904595583&fm=26&fmt=auto&gp=0.jpg',
        'https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg'
      ]
    }
  },
  methods: {
    popups (val) {
      this.show = val
    },
    shows () {
      this.show1 = true
      this.$store.state.show1 = true
    },
    setd () {
      this.$store.state.show1 = false
    }
  }
}
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'iconfont'; /* Project id 2685632 */
  src: url('//at.alicdn.com/t/font_2685632_mjyy0qe9ntn.woff2?t=1626782228976')
      format('woff2'),
    url('//at.alicdn.com/t/font_2685632_mjyy0qe9ntn.woff?t=1626782228976')
      format('woff'),
    url('//at.alicdn.com/t/font_2685632_mjyy0qe9ntn.ttf?t=1626782228976')
      format('truetype');
}

::v-deep .van-grid-item__text {
  font-weight: 700;
  color: #000;
}
.my-swipe {
  // width: 90%;
  margin: 5px auto;
  border-radius: 10px;
  overflow: hidden;
}
.center {
  padding: 0 5%;
  background: ;
}
.content2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0 5%;
  font-size: 15px;
  span {
    font-weight: 700;
    color: #000;
    font-size: 18px;
  }
  i {
    color: #39a9ed;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  // line-height: 150px;
  height: 200px;
  width: 90%;
  text-align: center;
  background-color: #39a9ed;
}

.imgs {
  width: 100%;
  height: 100%;
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.margins {
  margin-left: 60%;
  transition: all 0.4s;
}

.margins1 {
  margin-left: 0%;
  transition: all 0.4s;
}

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
    div {
      margin: 0 5px;
    }
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
