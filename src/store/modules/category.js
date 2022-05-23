// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  state:  {
      // 分类信息集合
      list: topCategory.map(item => ({ name: item }))
    },
  actions: {
    async getList({ commit }) {
      const { result } = await findAllCategory()
      // 获取数据成功，提交mutations进行数据修改
      //给获得result属性添加一个显示与隐藏的数据open
      result.forEach(item=>{
        item.open=false
      })
      commit('setCategory', result)
    },
  },
  mutations: {
    setCategory(state, headCategory) {
      state.list = headCategory
    }
  },
}
