// @author Yangxiong
import './assets/styles/index.scss'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import http from './utils/http'
import router from './router'
import store from './store/store'

import serviceAPI from './conf/services'
import pbulicFunc from './conf/publicFunc'
import vfilter from './conf/filters'

import App from './App.vue'

Vue.use(http)

Vue.config.productionTip = false
Vue.prototype.$service = serviceAPI
Vue.prototype.$pbulicFunc = pbulicFunc
for (let key in vfilter) {
  Vue.filter(key, vfilter[key])
}

// 将路由状态同步到store中
sync(store, router)

// 创建应用根组件
const app = new Vue({
  store,
  router,
  components: { App },
  template: '<App/>'
})

// webpack热更新支持
if (module.hot) {
  module.hot.accept()
}

// 将DOM结构注入页面
app.$mount('#app')
