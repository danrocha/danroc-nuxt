// import Vue from 'vue'
import { shallowMount, Wrapper } from '@vue/test-utils'

import Logo from '~/components/Logo.vue'

// Component config
let wrapper: Wrapper<typeof Logo>

describe('Logo', () => {
  describe('Initializing', () => {
    beforeEach(() => {
      wrapper = shallowMount(Logo)
    })
    it('Has the right text', () => {
      expect(wrapper.text()).contain('danroc.dev')
    })
  })
})
