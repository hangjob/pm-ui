import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入组件库
import PmUI from '../../../packages'
import '../../../packages/style/index.less'

Vue.use(PmUI)
// 基础配置
import '@/style/reset.less'
import '@/style/vc-snippet.less'
import '@/components/index'
import 'highlight.js/styles/atom-one-dark.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
