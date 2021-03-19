import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router,
  vuetify
}).$mount('#app')
