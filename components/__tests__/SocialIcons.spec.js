import { mount, RouterLinkStub } from '@vue/test-utils'
import SocialIcons from '../components/SocialIcons'

describe('SocialIcons', () => {
  it('Render correctly', () => {
    const wrapper = mount(SocialIcons, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
