<template>
  <div class="index" :class="themeClass">
    <el-container>
      <el-aside style="width: auto;">
        <LeftSide></LeftSide>
      </el-aside>
      <el-container class="main-container">
        <el-header>
          <Nav></Nav>
        </el-header>
        <el-main>
          <!-- router link here -->
          <!-- <router-view></router-view>  -->
          <Home></Home>
        </el-main>
        <Footer></Footer>
        <Customer></Customer>
      </el-container>
    </el-container>
    <SettingDrawer></SettingDrawer>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
import Nav from '@/components/Nav.vue'
import Leftside from '@/components/Leftside.vue'
import Footer from '@/components/Footer.vue'
import Customer from '@/components/Customer.vue'
import SettingDrawer from '@/components/SettingDrawer.vue'
import '@/common/theme/less/theme. less'

export default {
  components: {
    Nav,
    Leftside,
    Home,
    Footer,
    Customer,
    SettingDrawer,
  },
  data() {
    return {}
  },
  computed: {
    themeClass() {
      return this.$store.state.themeColor.themeClass
    },
  },
}
</script>

<style lang="less" scoped>
//带scoped属性的style只能作用于当前组件可以通3<style lang="less">放在无scoped的style中或者vue-loader提供的>>> /deep/的方式选择到
.index /deep/ {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  margin: auto;

  .el-header {
    padding: 0;
  }

  .main-container {
    height: 100vh;
    overflow-y: auto;
  // position: static;
  }
}
</style>

<style lang="less">
body {
  margin: 0;
}
</style>
