import PmCol from './src/col';

// 为组件提供install方法，让Vue可以通过Vue.use(Alert)去使用
PmCol.install = function(Vue) {
    Vue.component(PmCol.name, PmCol);
};

export default PmCol;