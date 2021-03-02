import Vue from 'vue'
// import ElementUI from 'element-ui'   // 全部引入 Element UI
// import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { i18n } from '@/plugins/i18n'
import { log } from '@/common/utils/func'
import cloneDeep from 'lodash/cloneDeep'
import 'normalize.css' // 使用normalize.css保证不同浏览器统一基本样式
import '@/plugins/element' // 部分引用 Element UI
// import '@/plugins/axios'

// Vue.use(ElementUI)

Vue.prototype.log = log
Vue.prototype.cloneDeep = cloneDeep
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
