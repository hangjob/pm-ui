import PmButton from './button'
import PmButtonGroup from './button-group'
import PmRow from './row'
import PmCol from './col'

// 存储组件列表
const components = [
    PmButton,
    PmButtonGroup,
    PmRow,
    PmCol,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue, opts = {}) {
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })

    // 配置组件参数
    Vue.prototype.$PMUI = {
        size: opts.size || '', // 组件默认大小
        zIndex: opts.zIndex || 2000 // 弹窗层级
    };
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

// 1.导出的对象必须具有 install，才能被 Vue.use() 方法安装
// 2.把组件到出去，模块化安装
export default {
    install,
    PmButton,
    PmButtonGroup,
    PmRow,
    PmCol,
}