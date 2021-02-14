import { mount } from '@vue/test-utils'
import Header from '../src/components/Header.vue'

describe('Component', () => {
    test('Vueインスタンスです', () => {
        const wrapper = mount(Header)
        expect(wrapper.attributes()).toBeTruthy()
    })
})