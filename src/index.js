import Table from './components/element-table.vue'
function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('el-table-page', Table)
}
const ElementTablePagination = {
  install: install,
  Table
}

if(typeof window !== undefined && window.Vue) {
  window.Vue.use(ElementTablePagination)
}