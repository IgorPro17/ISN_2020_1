import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './Login.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'


Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  render: h => h(App),
}).$mount('#app')
