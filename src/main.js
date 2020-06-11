import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' 
import './permission.js'

Vue.config.productionTip = false
Vue.use(elementUI,{ size: 'mini',locale })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


