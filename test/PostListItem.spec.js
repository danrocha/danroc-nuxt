import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import PostListItem from '../components/PostListItem'

const post = {
  title: 'Redesigning Awarded',
  date: '2020-02-26T00:00:00.000Z',
  description: 'Awarded needs a redesign',
  path: '/posts/redesigning-awarded',
}
const createPostListItem = (post) =>
  shallowMount(PostListItem, {
    propsData: { post },
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })

describe('PostListItem', () => {
  it('Render correctly', () => {
    const cmp = createPostListItem(post)
    expect(cmp.element).toMatchSnapshot()
  })
})
