import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import RBComponents from 'rb-components-vue'
import 'rb-components-vue/lib/rb-components-vue.css'

Vue.use(RBComponents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
