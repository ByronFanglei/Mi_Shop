import axios from 'axios'
import { message } from 'antd'

// 设置全局请求头
axios.defaults.baseURL = '/byron'
// 设置全局请求头
axios.defaults.timeout = 8000
// 请求后拦截
axios.interceptors.response.use(response => {
  let res = response.data
  // 获取数据成功
  if (res.status === 0) {
    return res.data
  } else if(res.status === 10){ // 用户未登录
    window.location.href = '/login'
  }
}, error => {
  const res = error.response
  message.error(res.data.msg)
})

export default axios
