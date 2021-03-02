import THEME_COLOR from '@/common/theme/themColor'

/**
 * 设置css变量值
 * @param {key} key 更改字段
 * @param {value} value 更改值
 */
function setCssVar(key, value) {
  switch (key) {
    case 'topTextColor':
      document.body.style.setProperty('--customizeTopTextColor', value)
      break
    case 'leftTextColor':
      document.body.style.setProperty('--customizeLeftTextColor', value)
      break
    case 'topActiveTextColor':
      document.body.style.setProperty('--customizeTopActiveTextColor', value)
      break
    case 'leftActiveTextColor':
      document.body.style.setProperty('--customizeLeftActiveTextColor', value)
      break
    case 'leftBackgroundColor':
      document.body.style.setProperty('--customizeLeftBackgroundColor', value)
      break
    case 'topBackgroundColor':
      document.body.style.setProperty('--customizeTopBackgroundColor', value)
      break
    default:
      break
  }
}

/**
 * 设置css变量值
 * @param {theme} theme 存储的主题
 */
function saveThemeToLocalStorage(theme) {
  localStorage.setItem('theme', JSON.stringify(theme))
}

// 获取本地缓存样式
const localTheme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : null
// 如果定制 设置定制css样式变量
if (localTheme && localTheme.themeClass === 'customize-style') {
  Object.keys(localTheme).forEach(item => {
    setCssVar(item, localTheme[item])
  })
}

export default {
  namespaced: true,
  state: {
    themeClass: localTheme ? localTheme.themeClass : 'vue-green',
    topTextColor: localTheme ? localTheme.topTextColor : THEME_COLOR.VUE_TOP_TEXT_COLOR,
    topActiveTextColor: localTheme ? localTheme.topActiveTextColor : THEME_COLOR.VUE_TOP_ACTIVE_TEXT_COLOR,
    topBackgroundColor: localTheme ? localTheme.topBackgroundColor : THEME_COLOR.VUE_TOP_BACKGROUND_COLOR,
    leftTextColor: localTheme ? localTheme.leftTextColor : THEME_COLOR.VUE_LEFT_TEXT_COLOR,
    leftActiveTextColor: localTheme ? localTheme.leftActiveTextColor : THEME_COLOR.VUE_LEFT_ACTIVE_TEXT_COLOR,
    leftBackgroundColor: localTheme ? localTheme.leftBackgroundColor : THEME_COLOR.VUE_LEFT_BACKGROUND_COLOR,
  },
  mutations: {
    // 改变页面主题颜色
    changeThemeColor(state, payload) {
      if (payload.theme === 'iView-golden') {
        // iView golden
        state.themeClass = payload.theme
        state.topTextColor = THEME_COLOR.IVIEW_TOP_TEXT_COLOR
        state.topActiveTextColor = THEME_COLOR.IVIEW_TOP_ACTIVE_TEXT_COLOR
        state.topBackgroundColor = THEME_COLOR.IVIEW_TOP_BACKGROUND_COLOR
        state.leftTextColor = THEME_COLOR.IVIEW_LEFT_TEXT_COLOR
        state.leftActiveTextColor = THEME_COLOR.IVIEW_LEFT_ACTIVE_TEXT_COLOR
        state.leftBackgroundColor = THEME_COLOR.IVIEW_LEFT_BACKGROUND_COLOR
      } else if (payload.theme === 'vue-green') {
        // Vue green
        state.themeClass = payload.theme
        state.topTextColor = THEME_COLOR.VUE_TOP_TEXT_COLOR
        state.topActiveTextColor = THEME_COLOR.VUE_TOP_ACTIVE_TEXT_COLOR
        state.topBackgroundColor = THEME_COLOR.VUE_TOP_BACKGROUND_COLOR
        state.leftTextColor = THEME_COLOR.VUE_LEFT_TEXT_COLOR
        state.leftActiveTextColor = THEME_COLOR.VUE_LEFT_ACTIVE_TEXT_COLOR
        state.leftBackgroundColor = THEME_COLOR.VUE_LEFT_BACKGROUND_COLOR
      } else if (payload.theme === 'customize-style') {
        // customize color
        state.themeClass = payload.theme
        Object.keys(payload).forEach(item => {
          if (payload[item] && state[item] !== payload[item] && item !== 'theme') {
            state[item] = payload[item]
            setCssVar(item, payload[item])
          }
        })
      }
      saveThemeToLocalStorage(state)
    },
  },
}
