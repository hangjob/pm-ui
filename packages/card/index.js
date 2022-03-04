/*
 * @Descripttion: 修改了一些内容
 * @version: v1.0
 * @Author: htt
 * @Date: 2022-03-04 10:25:59
 * @LastEditors: htt
 * @LastEditTime: 2022-03-04 10:50:06
 */
import PmCard from './src/index';

// 为组件提供install方法，让Vue可以通过Vue.use(PmCard)去使用
PmCard.install = function(Vue) {
    Vue.component(PmCard.name, PmCard);
};

export default PmCard;