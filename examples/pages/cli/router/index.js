import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router)
const Home = () => import('@/pages/cli/views/home/index.md')
const Install = () => import('@/pages/cli/views/install/index.md')
const Createprj = () => import('@/pages/cli/views/createprj/index.md')
const Basics = () => import('@/pages/cli/views/basics/index.md')
const Logs = () => import('@/pages/cli/views/logs/index')
const mainRoutes = [
    {
        path: '/cli',
        name: 'main',
        component: Layout,
        children: [
            {
                path: '/cli/home',
                name: '/cli/home',
                component: Home,
                meta: {
                    title: '首页',
                },
            },
            {
                path: '/cli/install',
                name: '/cli/install',
                component: Install,
                meta: {
                    title: '安装',
                },
            },
            {
                path: '/cli/createprj',
                name: '/cli/createprj',
                component: Createprj,
                meta: {
                    title: '创建项目',
                },
            },
            {
                path: '/cli/basics',
                name: '/cli/basics',
                component: Basics,
                meta: {
                    title: '基础',
                },
            },
            {
                path: '/cli/logs',
                name: '/cli/logs',
                component: Logs,
                meta: {
                    title: '更新日志',
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
