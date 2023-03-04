import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './assets/css/style.css'
import './plugins/axios'
import App from './App.vue'
import router from './router'


// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(faUserSecret)

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebook,
    faStackOverflow,
    faGithub,
    faSearchengin

} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faTwitter, faFacebook, faStackOverflow, faGithub, faSearchengin);
Vue.component("font-awesome-icon", FontAwesomeIcon);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')