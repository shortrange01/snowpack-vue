import { mount } from '@vue/test-utils'
import Bar from '../src/components/Bar.vue'

describe('Component', () => {
  test('Vueインスタンスです', () => {
    const wrapper = mount(Bar)
    expect(wrapper.attributes()).toBeTruthy()
  })
})