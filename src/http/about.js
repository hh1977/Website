/*
 * @Description: '关于我们'页面所有请求
 * @Author: 任录
 * @Date: 2019-07-22 15:13:52
 * @LastEditTime: 2019-07-22 17:37:49
*/

import * as http from './base'

/**
 * 登陆
 * @param {object} data 
 */
const login = (data) => {
  return http.post('/users/login', data)
}


export { login }