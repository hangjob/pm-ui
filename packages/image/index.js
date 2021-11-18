import PmImage from './src/image';

// 为组件提供install方法，让Vue可以通过Vue.use(PmImage)去使用
PmImage.install = function(Vue) {
    Vue.component(PmImage.name, PmImage);
};

export default PmImage;
