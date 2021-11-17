import PmRow from './src/row';

// 为组件提供install方法，让Vue可以通过Vue.use(Alert)去使用
PmRow.install = function(Vue) {
    Vue.component(PmRow.name, PmRow);
};

export default PmRow;