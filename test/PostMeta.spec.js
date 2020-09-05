import { shallowMount } from '@vue/test-utils'
import PostMeta from '../components/PostMeta'

const date = '2020-02-26T00:00:00.000Z'

const createPostMeta = (date) =>
  shallowMount(PostMeta, {
    propsData: { date },
  })

describe('PostMeta', () => {
  it('Render correctly', () => {
    const cmp = createPostMeta(date)
    expect(cmp.element).toMatchSnapshot()
  })
})
