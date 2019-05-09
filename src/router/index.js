/**
 * @file 本文件实现路由控制逻辑
 * @author Yangxiong
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 注册路由插件
Vue.use(VueRouter)

let title = function (title) {
  title = title || '开源软件管理'
  window.document.title = title
}

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  title(to.meta.title)
  next()
})

router.afterEach(() => {
})

export default router
