import { createRouter, createWebHistory } from 'vue-router'
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home')
const TopCategory=()=>import("@/views/category")
const SubCategory=()=>import("@/views/category/sub")
const routes = [{
  path: '/',
  name: 'layout',
  component: Layout,
  children: [
    { path: '/', name: 'home', component: Home },
    { path: '/category/:id', component: TopCategory },
    { path: '/category/sub/:id', component: SubCategory }
  ]
  
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
