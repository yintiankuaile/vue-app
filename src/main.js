// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './config/rem'

//全局引入mint-ui开始
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
//全局引入mint-ui结束

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
