<template>
  <section data-cy="section-articles">
    <SectionHeader name="articles" />
    <ul class="sm:ml-12" data-cy="article-list">
      <li v-for="post in posts" :key="post.slug" data-cy="article-list-item">
        <PostListItem :post="post" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const {
      app: { $content },
    } = useContext()

    const posts = ref([])
    const { fetch } = useFetch(async () => {
      posts.value = await $content('posts').fetch()
    })
    fetch()
    return { posts }
  },
})
</script>
