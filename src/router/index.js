/* 路由的定义 */
import Vue from 'vue'
import Router from 'vue-router'

// 按需加载
// @在build/webpack.base.conf.js文件里面配置,@就代表是src
const Home = () => import('@/views/home/home')
const Login = () => import('@/views/login/login')
const Register = () => import('@/views/register/register')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: Login,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/register',
      name: Register,
      meta: {
        showHeader: true
      }
    }
  ]
})
