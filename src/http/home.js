/*
 * @Description: '主页'所有请求
 * @Author: 任录
 * @Date: 2019-07-22 15:13:52
 * @LastEditTime: 2019-07-26 10:02:37
*/

import * as http from './base'

/**
 * 登陆
 * @param {object} data 
 */
const home = () => {
  return http.fetch('/pages')
}


export { home }