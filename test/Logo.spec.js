import { mount, RouterLinkStub } from '@vue/test-utils'
import Logo from '../components/Logo' // ../my-component.vue file

describe('Logo', () => {
  it('Render correctly', () => {
    const wrapper = mount(Logo, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
