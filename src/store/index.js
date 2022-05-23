import { createStore } from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
import createPersistedstate from 'vuex-persistedstate'
import request from '@/utils/request'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
  // 插件使用接口, 其作用时间是在state中的数据状态发生变化时起作用
  plugins: [
    // 自动的将state中的数据储存到本地的localStorage中
    createPersistedstate({
      key: 'xtx-persistedSate',
      paths: ['user', 'cart.name']
    })
  ]

})
