// ✨✨✨
import 'index.scss'
import yStar from './star/index.js'
import yModel from './model/index.js'
let components = {
  yStar,
  yModel
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[ key ])
  })
}

export default Object.assign(components, {install})
