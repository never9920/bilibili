import Vue from 'vue'
import VueRouter from 'vue-router'
const login = () =>
    import ('../views/login')
const register = () =>
    import ('../views/register')
const userinfo = () =>
    import ('../views/userinfo/userinfo')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: login,
    },
    {
        path: '/register',
        component: register,
    },
    {
        path: '/userinfo',
        component: userinfo,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router