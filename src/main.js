import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import router from './router'
// plugins
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
