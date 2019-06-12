/**
 * @file 本文件为路由对象实现
 * @author Yangxiong
 */

export default [
  {
    name: 'login',
    path: '/',
    meta: {
      title: '登录'
    },
    component: require('../views/index.vue')
  },
  {
    path: '*',
    meta: {
      title: 'not found'
    },
    component: {
      template: '<div>not found</div>'
    }
  },
  {
    name: 'components',
    path: '/components',
    meta: {
      title: 'components'
    },
    component: require('../views/components.vue')
  }
]
