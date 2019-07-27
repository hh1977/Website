/*
 * @Description: '错误'页面所有路由
 * @Author: 任录
 * @Date: 2019-07-22 16:50:00
 * @LastEditTime: 2019-07-26 15:43:20
*/

export default [
    {
        path: '/error-500',
        component: resolve => require(['@/views/error/500'], resolve),
        name: 'Error-500'
    },
    {
        path: '*',
        component: resolve => require(['@/views/error/404'], resolve),
        name: 'Error-404'
    }
      
]