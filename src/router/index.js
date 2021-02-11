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
const home = () =>
    import ('../views/home/home')
const video = () =>
    import ('../views/video/video')
const category = () =>
    import ('../views/category')
const visitor = () =>
    import ('../views/visitor')
const search = () =>
    import ('../views/search')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
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
    {
        path: '/home',
        component: home,
        meta: {
            keep: true
        }
    },
    {
        path: '/video/:id',
        component: video,
    },
    {
        path: '/category',
        component: category,
    },
    {
        path: '/visitor/:id',
        component: visitor,
    },
    {
        path: '/search',
        component: search,
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
    //console.log(manager)
    if (to.path === '/userinfo') {
        const manager = sessionStorage.getItem('token')
        if (!manager) {
            Vue.prototype.$toast.fail('请先登录账号')
            return next('/login');
        }
        next()
    } else {
        return next()
    }
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router