import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入组件库
import PmUI from '../packages'
import './style/reset.less'
import '../packages/style/index.less'
import './style/vc-snippet.less'
import './components/index'
import 'highlight.js/styles/atom-one-dark.css'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Vue.config.productionTip = false
Vue.use(PmUI)

// 收集bug依赖
const initSentry = () => {
    Sentry.init({
        Vue,
        dsn: 'https://b2c4ef4c12a3453385988df3c773f5b6@o317674.ingest.sentry.io/5918369',
        integrations: [
            new Integrations.BrowserTracing({
                routingInstrumentation: Sentry.vueRouterInstrumentation(router),
                tracingOrigins: ['localhost', /^\//],
            }),
        ],
        tracesSampleRate: 1.0, // 100% 捕获
    })
}
// initSentry()

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
