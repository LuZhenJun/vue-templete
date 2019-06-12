// ✨✨✨
import yStar from './star/index.js'
let components = {
  yStar
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[ key ])
  })
}

export default Object.assign(components, {install})
