import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '/',
        component: {
            render(c){
                return c('router-view')
            }
        },
        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () =>import('../components/Inicio.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () =>import('../components/About.vue')
            },
            {
                path: '/users',
                name: 'users',
                component: () =>import('../components/Users.vue')
            }
        ]
    }

]

const router = new VueRouter({routes})
export default router;