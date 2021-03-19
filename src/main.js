import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  vuetify,
}).$mount('#app')
