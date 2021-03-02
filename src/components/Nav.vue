<template>
  <div class="top-nav">
    <el-menu
      :default-active="activeIndex"
      class="nav-class"
      mode="horizontal"
      :background-color="topBackgroundColor"
      :text-color="topTextColor"
      :active-text-color="topActiveTextColor"
      height="50px"
    >
      <el-menu-item index="mainLogoItem" class="main-logo-item show-xs-and-down" @click="handleNavClick({ name: 'index' })">
        <img v-if="themeClass === 'vue-green'" alt="Vue logo" src="../assets/logo.png" width="30px" height="30px" />
        <img v-if="themeClass === 'iView-golden'" alt="iView logo" src="https://file.iviewui.com/icon/viewprologo.png" width="30px" height="30px" />
        <img v-if="themeClass === 'customize-style'" alt="Customize logo" src="../assets/icon.jpg" width="30px" height="30px" />
      </el-menu-item>
      <el-menu-item @click="openLeftsideDrawer" class="smaller-top-leftside large-icon show-xs-and-down smaller-padding">
        <i class="el-icon-s-unfold"></i>
      </el-menu-item>
      <el-menu-item @click="collapseMenu" class="collapse-icon large-icon hidden-xs-and-down">
        <i :class="collapseIcon"></i>
      </el-menu-item>
      <el-submenu class="smaller-top-nav large-icon smaller-padding show-sm-and-down" index="smaller-submenu-nav">
        <template slot="title">
          <i class="el-icon-menu"></i>
        </template>
        <div :class="smallSubmenuClass">
          <el-menu-item v-for="(item, index) in navData" :key="index" :index="item.name" @click="handleNavClick(item.name)">
            <i v-if="!!item.icon" :class="item.icon"></i>
            <span v-if="!!item.content">{{ item.content }}</span>
          </el-menu-item>
        </div>
      </el-submenu>
      <el-menu-item v-for="(item, index) in navData" :key="index" :index="item.name" class="hidden-sm-and-down" @click="handleNavClick(item.name)">
        <i v-if="!!item.icon" :class="item.icon"></i>
        <span v-if="!!item.content">{{ item.content }}</span>
      </el-menu-item>
      <el-menu-item class="right-item large-icon" @click="openSetting">
        <i class="el-icon-setting"></i>
      </el-menu-item>
      <el-menu-item class="right-item" @click="handleNavClick({ name: 'login' })">
        <el-avatar :size="30" :src="require('@/assets/user.png')"></el-avatar>
        <span class="hidden-xs-and-down" style="margin: 10px">{{ $t('nav.userName') }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      activeIndex: this.$route.name,
      collapseIcon: 'el-icon-s-fold',
      smallSubmenuClass: 'vue-small-submenu-class',
      navData: [
        {
          icon: 'el-icon-news',
          content: 'View UI Pro',
          name: 'home',
        },
        {
          icon: 'el-icon-monitor',
          content: 'Admin Pro',
          name: 'iView',
        },
        {
          icon: 'el-icon-shopping-cart-full',
          content: '物料市场',
          name: '404',
        },
        {
          icon: 'el-icon-wallet',
          content: 'MineSweeper',
          name: 'mineSweeper',
        },
      ],
    }
  },
  methods: {
    collapseMenu() {
      this.collapseIcon = this.collapseStatus ? 'el-icon-s-fold' : 'el-icon-s-unfold'
      // this.$store.dispatch('collapseMenu')
      this.collapseStatus = !this.collapseStatus
    },
    openSetting() {
      this.$store.commit('openSettingDrawer', true)
    },
    openLeftsideDrawer() {
      this.$store.commit('openLeftsideDrawer', true)
      this.collapseStatus = false
    },
    handleNavClick(name) {
      if (name === 'mineSweeper') {
        window.location.href = 'http://localhost:3000/mineSweeper'
      } else {
        this.$router.push(name)
      }
    },
  },
  computed: {
    collapseStatus: {
      get() {
        return this.$store.state.collapse
      },
      set(val) {
        this.$store.commit('collapseMenu', val)
      },
    },
    ...mapState('themeColor', ['themeClass', 'topTextColor', 'topActiveTextColor', 'topBackgroundColor']),
  },
  watch: {
    $route() {
      this.activeIndex = this.$route.name
    },
    themeClass() {
      if (this.themeClass === 'vue-green') {
        this.smallSubmenuClass = 'vue-small-submenu-class'
      } else if (this.themeClass === 'iView-golden') {
        this.smallSubmenuClass = 'iview-small-submenu-class'
      } else if (this.themeClass === 'customize-style') {
        this.smallSubmenuClass = 'customize-small-submenu-class'
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import '../common/theme/less/variables';

.top-nav /deep/ {
  .right-item {
    float: right;
    padding: 0 10px;
  }
  .el-menu-item.is-active.right-item,
  .el-menu-item.is-active.main-logo-item,
  .el-menu-item.is-active.collapse-icon,
  .el-menu-item.is-active.smaller-padding {
    border-bottom: none !important;
  }
}
.large-icon i {
  font-size: 21px;
}
</style>
