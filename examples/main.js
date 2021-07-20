import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 导入组件库
import PmUI from "../packages";
import './style/reset.less'
import '../packages/style/index.less'
import './style/vc-snippet.less'
import './components/index'

// 高亮
import "highlight.js/styles/color-brewer.css";

Vue.config.productionTip = false;
Vue.use(PmUI);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
