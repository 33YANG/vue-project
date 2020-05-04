<template>
  <div class="top-nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo nav-class"
      mode="horizontal"
      :background-color="topBackgroundColor"
      :text-color="topTextColor"
      :active-text-color="topActiveTextColor"
      height="S0px"
    >
      <el-menu-item @click="collapseMenu" class="collapse-icon">
        <i :class="collapseIcon" class="collapse-icon"></i>
      </el-menu-item>
      <el-menu-item v-for="item in navData" :key="item.id" :index="item.id">
        <router-link :to="item.url" style="text-decoration: none;">
          <i v-if="!!item.icon" :class="item.icon"></i>
          <span v-if="!!item.content">{{ item.content }}</span>
        </router-link>
      </el-menu-item>
      <el-menu-item class="right-item" @click="openSetting">
        <i class="el-icon-setting collapse-icon"></i>
      </el-menu-item>
      <el-menu-item class="right-item">
        <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span style="margin: 10px;">用户</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      activeIndex: '2',
      collapseIcon: 'el-icon-s-fold',
      navData: [
        {
          icon: 'el-icon-menu',
          content: 'View UI Pro',
          id: '2',
          url: '/',
          click: '',
          subMenu: null,
        },
        {
          icon: 'el-icon-monitor',
          content: 'Admin Pro',
          id: '3',
          url: '/',
          click: '',
          subMenu: null,
        },
        {
          icon: 'el-icon-shopping-cart-full',
          content: 'Admin Pro',
          id: '4',
          url: '',
          click: '',
          subMenu: null,
        },
        {
          icon: 'el-icon-wallet',
          content: '价格',
          id: '5',
          url: '',
          click: '',
          subMenu: null,
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
  },
  computed: {
    collapseStatus: {
      get() {
        return this.$store.state.collapse
      },
      set() {
        this.$store.commit('collapseMenu')
      },
    },
    ...mapState('themeColor', ['topTextColor', 'topActiveTextColor', 'topBackgroundColor']),
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
}
.collapse-icon {
  font-size: 21px;
}
</style>
