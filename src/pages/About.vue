<template>
  <main-layout>
    <p>About page.</p>
    <!-- <p>{{count}}</p>
    <h3>{{msg}}</h3>
    <h1>v-text</h1>
    <div v-text="msg"></div>
    <h1>v-model</h1>
    <input type="text" v-model="msg">
    <input type="text" v-model="count"> -->
  </main-layout>
  <div id="app">hello</div>
</template>

<script>
// 模拟 Vue 中的data选项
let data = {
  msg: 'hello',
  count: 10
}

// 模拟 Vue 的实例
let vm = {}
proxyData(data)
function proxyData(data) {
  // 遍历data对象的所有属性
  Object.keys(data).forEach(key => {
    // 把data中的属性，转换成vm的setter/getter

    // 数据劫持：当访问或者设置vm中的成员的时候，做一些干预操作
    Object.defineProperty(vm, key, {
      // 可枚举（可遍历）
      enumber: true,
      // 可配置（可以使用delete删除，可以通过defineProperty重新定义）
      configurable: true,
      // 当获取值的时候执行
      get () {
        console.log('get: ', key, data[key])
        return data[key]
      },
      set (newValue) {
        console.log('set: ', key, newValue)
        if(newValue == data[key]) {
          return
        } 
        data[key] = newValue
        // 数据更改，更新DOM的值
        document.querySelector("#app").textContent = data[key]
      }
    })
  })
}

vm.msg = 'Hello World'
// vm.count = 5555
console.log(vm.msg)






















// import MainLayout from '../layouts/Main.vue'
// export default {
//   components: {
//     MainLayout
//   },
//   data() {
//     return {
//       msg: 'Hello vue',
//       count: '20'
//     }
//   },
//   beforeCreate() {
//     console.log("----beforeCreate----");
//   },
//   created() {
//     console.log("----created----");
//     this.message = new Date().toLocaleString()
//   },
//   setup() {

//   },
//   mounted () {
//     setInterval(() => {
//       this.counter++
//     }, 1000)
//   }
// }
</script>