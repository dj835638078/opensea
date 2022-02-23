import Vue from 'vue'
import App from './App.vue'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Table, TableColumn, Pagination, Dialog, Input } from 'element-ui'
import './assets/scss/font.css'
import './assets/scss/base.scss'
import router from './router'
import axios from './service/service'
Vue.prototype.$axios = axios

Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
