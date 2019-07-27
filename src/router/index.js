/*
 * @Description: 路由跳转控制中心
 * @Author: 任录
 * @Date: 2019-07-22 15:13:52
 * @LastEditTime: 2019-07-26 22:38:03
*/

import Vue from 'vue'
import Router from 'vue-router'

import aboutRoutes from './about'
import customerRoutes from './customer'
import homeRoutes from './home'
import productRoutes from './product'
import solutionRoutes from './solution'
import errorRoutes from './error'

Vue.use(Router)

const children = [...aboutRoutes, ...customerRoutes, ...homeRoutes, ...productRoutes, ...solutionRoutes]

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => require(['@/views/Main'], resolve),
      children
    },
    ...errorRoutes
  ]
})

router.beforeEach((to, from, next) => {
    window.scroll(0,0);
    next();
})

export default router