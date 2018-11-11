import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/article/:id',
            name: 'article',
            component: () =>
                import ( /* webpackChunkName: "article" */ '@/views/Article.vue')
        },
        {
            path: '/archive',
            name: 'archive',
            component: () =>
                import ( /* webpackChunkName: "archive" */ '@/views/Archive.vue')
        },
        {
            path: '/links',
            name: 'links',
            component: () =>
                import ( /* webpackChunkName: "links" */ '@/views/Links.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ '@/views/About.vue')
        },
        {
            path: '*',
            name: 'home',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/views/Home.vue')
        }
    ]
})