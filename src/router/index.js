import Vue from 'vue'
import VueRouter from "vue-router";

// 路由懒加载
const Home = () => import('@/views/home/Home')
const Profile = () => import('@/views/profile/Profile')
const Category = () => import('@/views/category/Category')
const Shopcart = () => import('@/views/shopcart/Shopcart')
const Detail = () => import('@/views/detail/Detail')
// 1.使用插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail

  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
