import Vue from 'vue'
import product from './product.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#product',
  render: h => h(product)
})
