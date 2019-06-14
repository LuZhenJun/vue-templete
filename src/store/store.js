/**
 * 该文件用于页面所有store的状态管理
 * @author yangxiong
 * @package Vue、Vuex => 公共npm包；
 *          http => 全局封装的axios方法；service => 项目请求接口地址配置
 *          select => 单个store模块
 * @returns store => {state, mutations, actions, getters}
*/

import Vuex from 'vuex'
import Vue from 'vue'
import select from './select.js'
import http from '../utils/http.js'
import service from '../conf/services.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true, // 是否带命名方式
  state: {
    demo: null
  },
  mutations: {
    setDemo (state, data) {
      state.demo = data
      localStorage.setItem('demo', JSON.stringify(data))
    }
  },
  actions: {
    getDemo (context) {
      http.$publicHttp.post(service.demo).then(res => {
        if (res.data) {
          context.commit('setDemo', res.data.data)
        }
      })
    }
  },
  getters: {
    getDemoData (state) {
      const cache = localStorage.getItem('demo')
      let cacheData = null
      if (cache) {
        cacheData = JSON.parse(cache)
      }
      if (state.demo && state.demo !== null) {
        return state.demo
      } else {
        return cacheData
      }
    }
  },
  modules: {
    select
  }
})

export default store
