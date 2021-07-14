import Vue from "vue";
import App from "./App.vue";
// 导入组件库
import PmUI from "../packages";
import './style/reset.less'
import '../packages/style/index.less'
Vue.config.productionTip = false;
Vue.use(PmUI);

new Vue({
    render: (h) => h(App),
}).$mount("#app");
