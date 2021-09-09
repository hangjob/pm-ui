import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入组件库
import PmUI from '../../../packages'
import '../../../packages/style/index.less'

// 导入插件
import './plugins/g2'
import './plugins/echarts'
import VirtualCollection from 'vue-virtual-collection'
Vue.use(VirtualCollection)
Vue.use(PmUI)
// 基础配置
import '@/style/reset.less'
import '@/style/vc-snippet.less'
import '@/components/index'
import 'highlight.js/styles/atom-one-dark.css'

import './components/index'

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
