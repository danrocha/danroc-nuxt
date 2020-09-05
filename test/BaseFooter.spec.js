import { mount, RouterLinkStub } from '@vue/test-utils'
import BaseFooter from '../components/BaseFooter' // ../my-component.vue file

describe('BaseFooter', () => {
  it('Render correctly', () => {
    const wrapper = mount(BaseFooter, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
