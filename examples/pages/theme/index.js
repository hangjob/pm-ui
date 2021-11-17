import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import PmUI from '../../../packages'
import '../../../packages/style/index.less'
import '../../style/media.less'
Vue.use(PmUI)
// 基础配置
import '@/style/reset.less'
import '@/components/index'

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
