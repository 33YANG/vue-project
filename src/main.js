import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import log from '@/common/utils/func'
import '@/plugins/element' // 部分引用 Element UI
import 'normalize.css' // 使用normalize .css保证不同浏览器统一基本样式

// Vue.use(ElementUI)
Vue.prototype.log = log

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
