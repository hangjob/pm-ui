import Vue from 'vue'
import biddataCard from './biddataCard'
Vue.component(biddataCard.name, biddataCard)
//引入图表组件
const requireComponent = require.context("../../bigdata/components/histograms", false, /\.vue$/);
requireComponent.keys().map(fileName => {
    let cmp = requireComponent(fileName).default;
    Vue.component(cmp.name,cmp)
});


