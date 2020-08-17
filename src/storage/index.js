// const MODUL_KEY = 'mall'

// export default {
//   // 存储值
//   setItem (key, val, module) {
//     if (module) {
//       let value = this.getSingStorage(module)
//       value[key] = val
//       this.setItem(module, value)
//     } else {
//       let value = this.getAllStorage()
//       value[key] = val
//       return window.sessionStorage.setItem(MODUL_KEY, JSON.stringify(value))
//     }
//   },
//   // 获取单个值
//   getSingStorage (val, moudle) {
//     if (module) {
//       let vals = this.getSingStorage(moudle)
//       if (vals) return vals[key]
//     }
//     return this.getAllStorage()[val]
//   },
//   // 获取全部值
//   getAllStorage () {
//     return JSON.parse(window.sessionStorage.getItem(MODUL_KEY))
//   },
//   // 删除单个值
//   clearItem (key, moudle) {
//     let value = this.getAllStorage()
//     if (moudle) {
//       delete value[moudle][key]
//     } else {
//       delete value[key]
//     }
//     this.setItem(MODUL_KEY, value)
//   }
// }