<template>
  <section data-cy="section-articles">
    <SectionHeader name="articles" />
    <template v-if="$fetchState.pending">
      <p class="font-mono text-teal-500">loading...</p>
    </template>
    <template v-else>
      <ul class="sm:ml-12" data-cy="article-list">
        <li v-for="post in posts" :key="post.slug" data-cy="article-list-item">
          <PostListItem :post="post" />
        </li>
      </ul>
    </template>
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
    useFetch(async () => {
      posts.value = await $content('posts').fetch()
    })

    return { posts }
  },
})
</script>
