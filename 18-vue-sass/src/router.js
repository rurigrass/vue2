import Vue from 'vue';
import Router  from 'vue-router';
import Home from "./views/Home.vue"
import About from "./views/About.vue"

Vue.use(Router);

export const router = new Router({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', name: "home", component: Home },
        { path: '/about', name: "about", component: About }
    ]
});

export default router

