<template>
  <appTopnavVue/>
  <appHeaderVue :info="categoryListInfo"/>
  <AppHeaderSticky></AppHeaderSticky>
  <AppFooterVue/>
  <main>
    <!-- 二级路由组件出口-->
    <router-view></router-view>
  </main>
  <appFooterVue></appFooterVue>
</template> 

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import appTopnavVue from '@/components/app-topnav.vue'
import appHeaderVue from '@/components/app-header.vue'
import appFooterVue from "@/components/app-footer.vue"
import AppHeaderSticky from '@/components/app-header-sticky.vue'
export default {
  name: 'xtx-layout',
  components:{
    appTopnavVue,
    appHeaderVue,
    appFooterVue,
    AppHeaderSticky
},
 setup(){
      const store=useStore()
      store.dispatch("category/getList") // 带命名空间的
      const categoryListInfo=computed(()=>{
        return store.state.category.list
      })
      return {categoryListInfo}
  }
}
</script>

<style scoped lang='less'></style>
