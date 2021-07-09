import PmButton from './src/button';

// 为组件提供install方法，让Vue可以通过Vue.use(Alert)去使用
PmButton.install = function(Vue) {
    Vue.component(PmButton.name, PmButton);
};

export default PmButton;
