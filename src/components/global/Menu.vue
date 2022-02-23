<template>
  <div class='menu'>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">
        <em class="el-icon-menu" />
        <span slot="title">热力图</span>
      </el-menu-item>
      <el-menu-item index="/site">
        <em class="el-icon-setting" />
        <span slot="title">关注IP地块</span>
      </el-menu-item>
      <el-menu-item index="/price">
        <em class="el-icon-setting" />
        <span slot="title">历史价格</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({
        path: key,
        params: { data: 'query' }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.menu {
  width: 240px;
  height: 100%;
  background: rgb(84, 92, 100);
  .el-menu {
    border-right: none;
  }
}
</style>
