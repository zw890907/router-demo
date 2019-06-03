<template>
  <div class="shop-app">
    <header>
      <span @click="onGoHome">&lt;返回</span>&nbsp;&nbsp;&nbsp;&nbsp;
      商品系统
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <!-- router-link to 属于声明式导航，跳转至目的组件 -->
      <router-link to="/">首页</router-link> |
      <router-link to="/list">列表页</router-link>
    </footer>
  </div>
</template>

<script>
// 这里需要用到router，先将其引入
import router from './router'
export default {
  methods: {
    onGoHome () {
      // router.push属于编程式导航，也是跳转至目的组件
      router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  .shop-app {
    height: 100%;
    display: flex;
    flex-direction: column;
    header {
      height: 50px;
    }
    main {
      flex: 1;
    }
    footer {
      height: 50px;
    }
  }
}
</style>
