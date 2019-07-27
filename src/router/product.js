/*
 * @Description: '产品中心'页面所有路由
 * @Author: 任录
 * @Date: 2019-07-22 16:50:00
 * @LastEditTime: 2019-07-26 16:48:59
*/

export default [
    {
        path: 'product',
        component: resolve => require(['@/views/product'], resolve),
        name: 'Product',
        meta: {
            nav: '产品中心'
        }
    },
    {
        path: 'product/:id',
        component: resolve => require(['@/views/product/detail'], resolve),
        name: 'Product_Detail',
        meta: {
            nav: '产品中心'
        }
    },
      
]
