<template>
  <div class="login">
    <van-nav-bar title="登录" class="nva" />
    <div class="content">
      <van-form validate-first validate-trigger="onSubmit" @submit="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model.trim="useNma"
          label="账号"
          name="validator"
          placeholder="请输入账号"
          :rules="[{ validator: asyncValidator }]"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model.trim="passwords"
          name="validator"
          label="密码"
          type="password"
          placeholder="请输入密码"
          :rules="[{ validator: asyncValidator }]"
        />
        <div style="margin: 16px;">
          <van-button
            round
            block
            :loading="isloding"
            type="info"
            native-type="submit"
            loading-text="登录中..."
            >登录</van-button
          >
        </div>
      </van-form>
      <div class="footer">
        <span class="left" @click="$router.push('/register')">忘记密码?</span>
        <span
          >没有账号？点击<i @click="$router.push('/retrieve')">注册</i></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      useNma: '',
      passwords: '',
      isloding: false
    }
  },
  mounted () {
    const user = this.$route.query
    if (user) {
      this.useNma = user.name
    }
  },
  methods: {
    onFailed (errorInfo) {
      this.isloding = true
      const users = JSON.parse(localStorage.getItem('user')) || []
      const is = users.some(
        item => item.name === this.useNma && item.password === this.passwords
      )
      // const is = this.useNma === '雄爷' && this.passwords === '666'
      setTimeout(() => {
        this.isloding = false
        if (!users.length) {
          this.$toast('账号不存在，请先注册')
          return
        }
        if (is) {
          localStorage.setItem(
            'token',
            JSON.stringify({ Times: new Date().getTime() })
          )
          this.$router.push('/')
          this.$toast('登录成功')
        } else {
          this.$toast('账户或密码不正确，请重新输入')
          this.useNma = ''
          this.passwords = ''
        }
      }, 3000)
    },
    asyncValidator (val) {
      if (!val) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .nva {
    background: rgba(0, 0, 0, 0.2);
    ::v-deep .van-nav-bar__title {
      color: rgb(169, 188, 245);
    }
  }
  height: 100vh;
  //   width: 100vw;
  background: url('../../assets/login.png') no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .content {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  ::v-deep .van-field {
    border-radius: 3px;
    margin-bottom: 5px;
  }
  .footer {
    display: flex;
    justify-content: space-around;
    span {
      font-size: 12px;
      margin-right: 10px;
      i {
        font-style: normal;
        font-size: 14px;
        color: blue;
        margin-left: 3px;
      }
    }
    .left {
      font-size: 14px;
      color: red;
    }
  }
}
</style>
