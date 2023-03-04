import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views//principal/HomeView.vue'
import FavView from '../views/AboutView.vue'
import ResulltSearch from '../views/resultView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/result',
        name: 'result',
        props: { result: Object },
        component: ResulltSearch
    },
    {
        path: '/favoritos',
        name: 'favoritos',
        component: FavView // route level code-splitting
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router