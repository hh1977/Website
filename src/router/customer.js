/*
 * @Description: 客户案例页面所有路由
 * @Author: 任录
 * @Date: 2019-07-22 16:50:00
 * @LastEditTime: 2019-07-25 10:12:09
*/

export default [
    {
        path: 'customer',
        component: resolve => require(['@/views/customer'], resolve),
        name: 'Customer',
        meta: {
            nav: '客户案例'
        }
    }
      
]