import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const Index = () => import('@/views/index')
const Home = () => import('@/views/home')
const Button = () => import('@/views/button/doc/index.md')
const Quickstart = () => import('@/views/quickstart/doc/index.md')
const Theme = () => import('@/views/theme/doc/index.md')
const Timeline = () => import('@/views/timeline/doc/index.md')
const Logs = () => import('@/views/logs/index')
const mainRoutes = [
    {
        path: '/',
        name: '/',
        component: Index,
        meta: {
            title: '开始',
        },
    },
    {
        path: '/',
        name: 'main',
        component: Layout,
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
                path: '/logs',
                name: 'logs',
                component: Logs,
                meta: {
                    title: '更新日志',
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
                path: '/updata/theme',
                name: 'updataTheme',
                component: Theme,
                meta: {
                    title: '更换主题',
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
            {
                path: '/timeline',
                name: 'timeline',
                component: Timeline,
                meta: {
                    title: 'Timeline时间轴',
                },
            }
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
