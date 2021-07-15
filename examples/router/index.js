import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router)

const Home = () => import('@/views/home')
const Button = () => import('@/views/button');
[Home, Button].forEach(component => {
    console.log(component().componentTitle)
})
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
                    title: Home.componentTitle,
                },
            },
            {
                path: '/button',
                name: 'button',
                component: Button,
                meta: {
                    title: Button.componentTitle,
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