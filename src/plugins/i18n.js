import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/lang/zh'
// import axios from 'axios'
import ElementLocale from 'element-ui/lib/locale'

// const langMessages = require(`@/lang/${localStorageLang}`).default // 按当前语言加载语言包

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'zh', // 设置语言环境
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh',
  messages: {
    zh: messages,
  }, // 设置语言环境信息
})

function setI18nLanguage(lang) {
  i18n.locale = lang
  // axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

ElementLocale.i18n((key, value) => i18n.t(key, value)) // 配置element组件适配国际化

const loadedLanguages = ['zh']

export function loadLanguageAsync(lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(`@/lang/${lang}`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

// 获得当前已选择的语言
const localStorageLang = localStorage.getItem('lang')

if (localStorageLang && localStorageLang !== i18n.locale) {
  loadLanguageAsync(localStorageLang)
}
