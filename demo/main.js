import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'

import TablePage from './view/table-page.vue'
import ElementTablePagination from 'el-table-page'
Vue.use(Element, {
  size: 'small',
  locale
})
Vue.use(VueRouter)
Vue.use(ElementTablePagination)
const routes = [
  { path: '/', component: TablePage }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
