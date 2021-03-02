import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import themeColor from './modules/theme'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    themeColor, // 控制页面主题切换
  },
  state: {
    collapse: false,
    openDrawer: false,
    leftsideDrawer: false,
  },
  mutations: {
    // 控制左侧菜单收缩的状态
    collapseMenu(state, val) {
      state.collapse = val
    },
    // 控制右侧设置Drawer开关的状态
    openSettingDrawer(state, val) {
      state.openDrawer = val
    },
    // 控制自适应小屏幕 左侧导航栏开关的状态
    openLeftsideDrawer(state, val) {
      state.leftsideDrawer = val
    },
  },
  actions: {
    // context.commit
    collapseMenu({ commit }) {
      return new Promise(resolve => {
        commit('collapseMenu')
        resolve()
      })
    },
  },
  getters: {},
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
})

export default store
