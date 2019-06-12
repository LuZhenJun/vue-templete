// @author Yangxiong
import './assets/styles/index.scss'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import router from './router'

import App from './App.vue'


Vue.config.productionTip = false

// 创建应用根组件
const app = new Vue({
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
