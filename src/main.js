import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import FOOTER from './components/footerTabar.vue'
import bus from './utils/index'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(bus)

Vue.component('FOOTER', FOOTER)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
