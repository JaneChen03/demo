let _Vue = null
export default class VueRouter {
  static install (Vue) {
    // 1.判断当前插件是否安装
    if(Vue.install.installed) {
      return
    }
    Vue.install.installed = true
    // 2.把Vue的构建函数记录到全局变量
    _Vue = Vue
    // 3.把创建vue实例时候传入的router对象注入到Vue实例上
    // 混入
    _Vue.mixin({
      beforeCreate() {
        _Vue.prptotype.$router = this.options.router
      }
    })
  }
  constructor(options) {
    this.options = options
    this.routeMap = {} 
    this.data = _Vue.observable({
      current: '/'
    })
  }
  init(){
    this.createRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }
  createRouteMap() {
    // 遍历所有的路由规则，把路由规则解析成键值对的形式 存储到routeMap中
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }
  initComponents(Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      // template: '<a :href="to"><solt></solt></a>',
      render(h) {
        return h ('a', {
          attrs: {
            href: this.to
          }
        },[this.$slets.default])
      }
    })
  }
  initEvent() {
    window.addEventListener('popstate'), () => {
      this.data.current = window.location.pathname
    }
  }
}