<template>
  <div>
    我的
    <div @click="remove">退出登录</div>
  </div>
</template>

<script>
export default {
  methods: {
    remove () {
      localStorage.removeItem('token')
      this.$toast('退出成功')
      setTimeout(() => {
        this.$router.push('/login')
      }, 1500)
    }
  }
}
</script>

<style></style>
