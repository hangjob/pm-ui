import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router)
const Home = () => import('@/pages/bigdata/views/home')
const mainRoutes = [
    {
        path: '/bigdata',
        name: 'main',
        component: Layout,
        children: [
            {
                path: '/bigdata/home',
                name: '/bigdata/home',
                component: Home,
                meta: {
                    title: '首页',
                },
            },
        ],
    },
]


// 消除重复跳转警告
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch((err) => err)
}

const router = new Router({
    mode: 'history', // history
    base: __dirname,
    routes: mainRoutes,
})
export default router
