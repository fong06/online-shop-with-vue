// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VeeValidate from 'vee-validate'
// import store from './store'
import './firebase'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false
Vue.use(VeeValidate)

Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created () {
    this.$store.dispatch('bindProducts')
  }
})
