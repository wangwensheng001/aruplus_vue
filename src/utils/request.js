import axios from 'axios'
import store from '@/store'
import router from '@/router'
// import jsonBig from 'json-bigint'

const service = axios.create({
  baseURL: "https://btc.h.ydrjkj.com/api",
  timeout: 10000
})

service.interceptors.request.use((config) => {
  if (config.url.indexOf('?') === -1) {
    config.url = config.url + '?_timespan=' + (new Date()).getTime()
  } else {
    config.url = config.url + '&_timespan=' + (new Date()).getTime()
  }

  return config
}, (error) => {
  return Promise.reject(error) // 只要reject就会进入catch
}) // 请求拦截器

service.interceptors.response.use((response) => {
  const { message, success, data } = response.data
  if (success) {
    return data
  } else {
    // Message.error(message)
    return Promise.reject(new Error(message))
  }
}, (error) => {
  // console.log(error.response)
  // if (response.data.type == '999') {
    // store.dispatch('user/logout')
    // router.push('/login')
  // }
  return Promise.reject(error)
}) // 响应拦截器

export default service
