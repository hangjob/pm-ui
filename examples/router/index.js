import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router)
const mainRoutes = [
    {
        path: '/',
        name: 'main',
        component: Layout,
        redirect:'home',
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home"),
                meta: {
                    title: "首页",
                },
            },
        ],
    },
]

// 消除重复跳转警告
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const router = new Router({
    mode: "history", // history
    base: __dirname,
    routes: mainRoutes,
});
export default router;