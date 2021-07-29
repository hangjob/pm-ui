import PmButtonGroup from './src/button-group'

// 为组件提供install方法，让Vue可以通过Vue.use(Alert)去使用
PmButtonGroup.install = function (Vue) {
    Vue.component(PmButtonGroup.name, PmButtonGroup)
}

export default PmButtonGroup
