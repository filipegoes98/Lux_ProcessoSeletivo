import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './assets/css/style.css'
import './plugins/axios'
import App from './App.vue'
import router from './router'


// import Bootstrap Icons
import IconsPlugin from 'bootstrap-vue'
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')