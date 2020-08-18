/**
 * storage封装
 */
const MODUL_KEY = 'mall'

export default {
  // 存储值
  setItem (key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(MODUL_KEY, JSON.stringify(val))
    }
  },
  // 获取单个值或某个模块下的值
  getItem (key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) {
        return val[key]
      }
    }
    return this.getStorage()[key]
  },
  // 获取全部值
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(MODUL_KEY) || '{}')
  },
  // 清理数据
  clear (key, module_name) {
    let val = this.getStorage()
    if (module_name) {
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(MODUL_KEY, JSON.stringify(val))
  },
}