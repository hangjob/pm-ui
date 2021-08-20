import { shallowMount } from '@vue/test-utils'
import Button from '../../../packages/button/src/button.vue'

describe('Button', () => {

    it('loading', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                loading: true,
            },
        })
        expect(wrapper.props().loading).toBe(true)
    })
})
