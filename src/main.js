import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import uitl  from './uitl'


new Vue({
  i18n:uitl.i18n,
  router:uitl.router,
  store:uitl.store,
  render: h => h(App),
}).$mount('#app')
