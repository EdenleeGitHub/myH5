<template>
  <div class="retrieve">
    <van-nav-bar title="注册" class="nva" left-arrow @click-left="onLeft" />
    <div class="content">
      <div>
        <van-field
          type="text"
          label="昵称"
          v-model.trim="names"
          maxlength="8"
          placeholder="请输入用户名"
        />
      </div>
      <div>
        <van-field
          type="password"
          label="密码"
          v-model.trim="passwords"
          maxlength="8"
          placeholder="请输入密码"
        />
      </div>
      <div>
        <van-field
          type="password"
          label="确认密码"
          name="validator"
          v-model.trim="passwords1"
          maxlength="8"
          :rules="[{ validator: changes }]"
          placeholder="请输入密码"
        />
      </div>
      <div>
        <van-field
          type="text"
          v-model="yanzhen"
          maxlength="4"
          placeholder="请输入验证码"
        />
        <van-button
          loading-type="spinner"
          :loading="islod"
          class="span"
          @click="getNum"
          >{{ num }}</van-button
        >
      </div>
      <div>
        <van-button
          class="button"
          :loading="isloding"
          type="info"
          loading-text="正在注册..."
          @click="zhche"
          >注册</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      names: '',
      passwords: '',
      passwords1: '',
      yanzhen: '',
      isloding: false,
      islod: false,
      num: '666',
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      arr1: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'n',
        'm',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'N',
        'M',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ]
    }
  },
  created () {
    this.getNum()
  },
  methods: {
    zhche () {
      // 点击注册
      if (
        !this.passwords ||
        !this.passwords1 ||
        !this.passwords ||
        !this.yanzhen
      ) {
        this.$toast('填写完整在提交')
        return
      }
      this.isloding = true
      if (this.passwords !== this.passwords1) {
        // 如果两次密码不相等则退出
        this.isloding = false
        this.$toast('密码不一致，重新输入！')
        return
      }
      let user = JSON.parse(localStorage.getItem('user')) || []
      if (user.some(item => item.name === this.names)) {
        // 如果账户存在
        this.$toast('该账户已存在，请重新输入')
        this.isloding = false
        return
      }

      setTimeout(() => {
        if (this.yanzhen.toLowerCase() !== this.num.toLowerCase()) {
          this.$toast('验证码错误，请重新输入！')
          this.getNum()
        } else {
          this.$toast('注册成功！')
          if (user) {
            user.push({ name: this.names, password: this.passwords })
          } else {
            user = [{ name: this.names, password: this.passwords }]
          }
          localStorage.setItem('user', JSON.stringify(user))
          this.$router.push({
            path: '/login',
            query: { name: this.names }
          })
        }
        this.isloding = false
      }, 900)
    },
    changes () {
      return this.passwords === this.passwords1
    },
    onLeft () {
      // 返回longin页
      this.$router.push('/login')
    },
    getNum () {
      // 验证码随机
      this.num = ''
      this.islod = true
      const max = 51
      const max1 = 9
      const min = 0
      const nums = []
      for (let i = 0; i < 2; i++) {
        nums.push(
          this.arr[Math.floor(Math.random() * (max1 - min) + min)],
          this.arr1[Math.floor(Math.random() * (max - min) + min)]
        )
      }
      setTimeout(() => {
        this.num = nums.join('')
        this.islod = false
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
.retrieve {
  height: 100vh;
  background: url('../../assets/retrieve.jpg');
  background-size: 140% 100%;
  background-position: center;
  .nva {
    background: rgba(0, 0, 0, 0.2);
    ::v-deep .van-nav-bar__title {
      color: rgb(224, 205, 28);
    }
  }
  ::v-deep .van-field {
    border-radius: 3px;
    margin-bottom: 5px;
    padding: 5px;
  }
  ::v-deep .van-field__label {
    font-size: 13px;
    margin: 0 !important;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 50%;
    // background-color: skyblue;

    div {
      margin-bottom: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        outline: none;
        border-radius: 5px;
        border: none;
        width: 100%;
      }
      .span {
        width: 50px;
        padding: 1px;
        height: 32px;
        line-height: 32px;
        margin-top: -3px;
        background-color: rgb(208, 236, 247);
        margin-left: 5px;
        display: inline-block;
        border: 2px solid rgb(197, 163, 13);
        border-radius: 3px;
        color: rgb(199, 43, 165);
        // font-weight: unset;
      }
      .button {
        width: 100%;
        height: 30px;
        border-radius: 30px;
      }
    }
  }
}
</style>
