import { shallowMount } from '@vue/test-utils'

/**
 *  创建一个组件实列
 * @param compo 组件
 * @param values props
 * @returns {Wrapper<Vue>|{}}
 */
const factoryShallowMount = (compo, values = {}) => {
    return shallowMount(compo, {
        ...values
    })
}

export  {
    factoryShallowMount
}
