<template>
  <div>vue3数据响应式核心原理</div>
  <div id="app">proxy</div>
</template>

<script>
// let data = {
//   msg: 'hello',
//   count: 10
// }

// // 模拟Vue实例
// let vm = new Proxy(data, {
//   // 执行代理行为的函数
//   // 当访问vm的成员会执行
//   get (target, key) {
//     console.log('get, key: ', key, target[key])
//     return target[key]
//   },
//   set (target, key, newValue) {
//     console.log('set, key: ', key, newValue)
//     if(target[key] === newValue) {
//       return
//     }
//     target[key] = newValue
//     document.querySelector('#app').textContent = target[key]
//   }
// })
// vm.msg = 'Hello World'
// console.log(vm.msg)

// 发布订阅模式

// class EventEmitter {
//   constructor () {
//     this.subs = Object.create(null) // 创建一个空对象
//   }

//   // 注册事件
//   $on (eventType, handler) {
//     this.subs[eventType] = this.subs[eventType] || []
//     this.subs[eventType].push(handler)
//   }
//   // 触发事件
//   $emit (eventType) {
//     if(this.subs[eventType]) {
//       this.subs[eventType].forEach(handler => {
//         handler()
//       })
//     }
//   }
// }
// let em = new EventEmitter()
// em.$on('click', () => {
//   console.log('点击1')
// })
// em.$on('click', () => {
//   console.log('点击2')
// })
// em.$emit('click')

// 观察者
// class Dep {
//   constructor () {
//     this.subs = []
//   }
//   addSub (sub) {
//     if(sub && sub.update) {
//       this.subs.push(sub)
//     }
//   }
//   notify() {
//     this.subs.forEach(sub => {
//       sub.update()
//     })
//   }
// }
// class Watcher {
//   update () {
//     console.log('1212121')
//   }
// }
// let dep = new Dep()
// let watcher = new Watcher()
// dep.addSub(watcher)
// dep.notify()
</script>
