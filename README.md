# Vue template

> vue basic tempalte

# src

## assets
> 存放静态资源
### font
> ttf字体文件
### image
> 存放静态图片
### styles
> 所有样式集合
#### pages
> 页面私有样式文件由_index.scss集体整合。尽量一个私有样式页面对应一个scss
#### _font.scss 
> 字体样式
#### _layout.scss 
> 项目重布局样式
#### _module.scss 
> 可复用组件样式
#### _reset.scss
> 重置样式
## components
> 公共组件
## conf
### axios.config.js
> 服务调用对象配置实现
### filters.js
> 过滤器方法集合
### publicFunc.js
> 公共函数集合
### services.js
> 本文件为服务调用URL常量配置实现
##router
### index.js
> 本文件实现路由控制逻辑
### routes.js
> 本文件为路由对象实现
## store
> 本文件夹用于vuex实现/存储
## utils
> 自定义插件
### http.js
> 本文件为axios服务调用插件实现
##views
> 项目页面内容
## main.js
> 入口js文件



