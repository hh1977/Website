// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 这里面文件导入顺序决定样式的覆盖
import Vue from 'vue'
import router from './router'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'

import animated from 'animate.css'
Vue.use(animated)

import Loading from '@/components/loading.js'
Vue.use(Loading)

import App from './App'

import ECharts from 'vue-echarts/components/ECharts'
Vue.component('chart', ECharts)

// 引入mqtt
import './mq'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
