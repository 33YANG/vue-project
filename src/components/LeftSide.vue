<template>
  <div class="leftside">
    <el-menu
      default-active="2"
      class="left-side-menu"
      :text-color="leftTextColor"
      :active-text-color="leftActiveTextColor"
      :background-color="left8ackgroundColor"
      :collapse="collapse"
    >
      <el-menu-item class="main-logo-item">
        <img v-if="themeClass === 'vue-green'" alt="Vue logo" src="../assets/logo.png" width="25px" height="25px" />
        <img
          v-if="themeClass === 'iView-golden'"
          alt="iView logo"
          src="https://file.iviewui.com/icon/viewprologo.png"
          width="25px"
          height="25px"
        />
        <img v-if="themeClass === 'customize-style'" alt="Customize logo" src="../assets/icon.jpg" width="25px" height="25px" />
        <span>{{ pageTitle[themeClass] }}</span>
      </el-menu-item>
      <template v-for="item in leftSideData">
        <el-menu-item v-if="!item.submenu" :index="item.id" :key="item.id">
          <i :class="item.icon" style=""></i>
          <span slot="title">{{ item.content }}</span>
        </el-menu-item>
        <el-submenu v-if="item.submenu" :index="item.id" :key="item.id">
          <template slot="title">
            <i :class="item.icon" style=""></i>
            <span slot="title">{{ item.content }}</span>
          </template>
          <el-menu-item v-for="subItem in item.submenu" :key="subItem.id" :index="sunItem.id">
            {{ subitem.content }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      leftSideData: [
        {
          icon: 'el-icon-info',
          id: '1',
          url: '',
          content: '介绍',
          subnenu: null,
        },
        {
          icon: 'el-icon-refresh',
          id: '2',
          url: '',
          content: '更新曰志',
          subnenu: null,
        },
        {
          icon: 'el-icon-download',
          id: '3',
          url: '',
          content: '快速开始',
          submenu: [
            {
              icon: '',
              id: '3-1',
              url: '',
              content: '安装',
              submenu: null,
            },
            {
              icon: '',
              id: '3-2',
              content: '初次设置',
              submenu: null,
            },
            {
              icon: '',
              id: '3-3',
              content: '目录结构',
              submenu: null,
            },
          ],
        },
        {
          icon: 'el-icon-s-tools',
          id: '4',
          url: '',
          content: '配置',
          subnenu: [
            {
              icon: '',
              id: '4-l',
              url: '',
              content: '开发配置',
              submenu: null,
            },
            {
              icon: '',
              id: '4-2',
              url: '',
              content: '业务配置',
              submenu: null,
            },
          ],
        },
        {
          icon: 'el-icon-s-cooperation',
          id: '5',
          url: '',
          content: '基础功能',
          submenu: null,
          icon: 'el-icon-success',
        },
        {
          id: '6',
          url: '',
          content: '鉴权',
          submenu: null,
        },
        {
          icon: 'el-icon-rank',
          id: '7',
          url: '',
          content: 'Vuex',
          subnenu: null,
        },
        {
          icon: 'el-icon-document-copy',
          id: '8',
          url: '',
          content: '持久化存储',
          subnenu: null,
        },
        {
          icon: 'el-icon-takeaway-box',
          id: '9',
          url: '',
          content: '内置组件',
          submenu: null,
        },
        {
          icon: 'el-icon-attract',
          id: '10',
          url: '',
          content: '内置插件',
          submenu: null,
        },
        {
          icon: 'el-icon-data-analysis',
          id: '11',
          url: '',
          content: '数据模拟',
          submenu: null,
        },
      ],
      pageTitle: {
        'vue-green': 'Vue Theme',
        'iView-golden': 'iView Theme',
        'customize-style': 'Customize',
      },
    }
  },
  methods: {},
  computed: {
    ...mapState(['collapse']),
    ...mapState('themeColor', ['themeClass', 'leftTextColor', 'leftActiveTextColor', 'leftBackgroundColor']),
  },
}
</script>

<style lang="less" scoped>
@import '../common/theme/less/variables.less';

body {
  --border-color: #fff;
}

.leftside /deep/ {
  .left-side-menu {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: 200px;
    /* position: static; */
    scrollbar-color: transparent transparent;
  }
  .el-menu--collapse {
    width: 64px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .main-logo-item {
    text-align: center;
    height: 60px !important;
    span {
      margin: 0 12px;
      font-size: large;
    }
  }
}
</style>
