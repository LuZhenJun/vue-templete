/** 
 * 该文件用于页面所有select的获取
 * @author luzhenjun
 * @package 
*/

// 该文件用于页面所有select的获取
// @author Yangxiong

// import http from '../utils/http'
// import service from '../conf/services.js'

const state = {
  selectData: null
}

// mutations
const mutations = {
  setSelectData (state, data) {
    state.selectData = data
    localStorage.setItem('selectData', JSON.stringify(data))
  }
}

const actions = {
  getSelect (context) {
    http.$publicHttp.post(service.selectData).then(res => {
      if (res.data) {
        context.commit('selectData', res.data.data)
      }
    })
  }
}

const getters = {
  getSelectData (state) {
    const cache = localStorage.getItem('selectData')
    let cacheData = null
    if (cache) {
      cacheData = JSON.parse(cache)
    }
    if (state.selectData && state.selectData !== null) {
      return state.selectData
    } else {
      return cacheData
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
