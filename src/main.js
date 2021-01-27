import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vant/vant.js'
import http from './network/axios.js'

Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')