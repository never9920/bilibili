import Vue from 'vue'
import VueRouter from 'vue-router'
const login = () =>
    import ('../views/login')
const register = () =>
    import ('../views/register')
const userinfo = () =>
    import ('../views/userinfo/userinfo')
const edit = () =>
    import ('../views/edit/edit')

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
    {
        path: '/edit',
        component: edit,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    //to 将要访问的路径
    //from 代表从哪个路径跳转来的
    //next()表示放行 next('./login')表示强制返回login
    const manager = localStorage.getItem('token')
        //console.log(manager)
    if (to.path === '/userinfo') {
        if (!manager) {
            Vue.prototype.$toast.fail('请先登录账号')
            return next('/login');
        }
        next()
    } else {
        return next()
    }
})

export default router