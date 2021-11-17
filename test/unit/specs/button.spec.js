import { factoryShallowMount } from '../util'
import Button from '~@/button'

describe('Button', () => {

    it('loading', () => {
        const wrapper = factoryShallowMount(Button, {
            propsData: {
                loading: true,
            },
        })
        expect(wrapper.props().loading).toBe(true)
        expect(wrapper.classes()).toContain('is-loading')
    })

    it('disabled', () => {
        const wrapper = factoryShallowMount(Button, {
            propsData: {
                disabled: true,
            },
        })
        expect(wrapper.props().disabled).toBe(true)
        expect(wrapper.classes('is-disabled')).toBe(true)
    })

})

