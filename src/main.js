import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './assets/css/style.css'
import './plugins/axios'
import App from './App.vue'
import router from './router'


Vue.prototype.$eventHub = new Vue();

// import sweealert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')