/*
 * @Description: '结局方案'页面所有路由
 * @Author: 任录
 * @Date: 2019-07-22 16:50:00
 * @LastEditTime: 2019-07-25 10:12:42
*/

export default [
    {
        path: 'solution',
        component: resolve => require(['@/views/solution'], resolve),
        name: 'Solution',
        meta: {
            nav: '解决方案'
        }
    }
      
]