import Axios from 'axios'
import Vue from 'vue'
import store from '@/store'
// Vue.use(Axios)
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const requests = Axios.create({
  baseURL,
  timeout: 5000
})

requests.interceptors.request.use((config) => {
  // 1.获取用户信息对象
  console.log('config---', config)
  console.log('store---', store)
  const { profile } = store.state.user
  // 2. 判断是否带有Token请求
  if (profile.token) {
    // 设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
  // 3. 如果没有Token设置Token然后转到登录页
})
requests.interceptors.response.use((res) => {
  return res.data
})

export default (url, method, submitData) => {
  return requests({ url, method, [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData })
}
