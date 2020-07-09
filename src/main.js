import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import notification from './modules/notification/notification'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$notification = notification

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
