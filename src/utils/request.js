import axios from 'axios'
import store from '@/store'
import router from '@/router'
// import jsonBig from 'json-bigint'

const service = axios.create({
  baseURL: "https://fxbittrade.pro/api",
  timeout: 10000
})

service.interceptors.request.use((config) => {
  console.log(store.state.lang);
  if (store.state.token) {
    config.headers.authorization = store.state.token
  }
  config.headers.lang = store.state.lang;
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
  console.log(response);
  const { message, type } = response.data
  if (type == '999') {
    router.push('/login')
  }
  if (type == 'ok') {
    return message
  } else {
    // Message.error(message)
    return message
    // return Promise.reject(new Error(message))
  }
}, (error) => {
  return Promise.reject(error)
}) // 响应拦截器

export default service
