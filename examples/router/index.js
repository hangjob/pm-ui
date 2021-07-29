import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router)

const Home = () => import('@/views/home')
const Button = () => import('@/views/button/doc/index.md')
const Quickstart = () => import('@/views/quickstart/doc/index.md')
const mainRoutes = [
    {
        path: '/',
        name: 'main',
        component: Layout,
        redirect: 'home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
                meta: {
                    title: '首页',
                },
            },
            {
                path: '/quickstart',
                name: 'quickstart',
                component: Quickstart,
                meta: {
                    title: '快速上手',
                },
            },
            {
                path: '/button',
                name: 'button',
                component: Button,
                meta: {
                    title: 'Button按钮',
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