<template>
  <div id='app'>
    <Menu />
    <div class='content'>
      <Header />
      <div class='info'>
        <router-view />
      </div>
    </div>
    <!-- <div id='nav'>
      <router-link to='/'>Home</router-link> |
      <router-link to='/about'>About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
import Menu from '@/components/global/Menu'
import Header from '@/components/global/Header'

export default {
  components: {
    Menu,
    Header
  }
}
</script>

<style lang='scss' scoped>
#app {
  font-family: SFProText-Medium, SFProText-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    flex: 1;
    .info {
      padding: 30px;
    }
  }
}
</style>
