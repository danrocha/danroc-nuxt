<template>
  <article>
    <template v-if="post">
      <header class="mb-12">
        <h1
          class="mb-4 font-mono text-4xl font-bold leading-tight text-teal-200"
        >
          {{ post.title }}
        </h1>
        <div class="flex space-x-2 font-mono text-sm">
          &mdash;&nbsp;<post-meta :date="post.date" />
        </div>
      </header>
      <main>
        <nuxt-content :document="post" class="prose sm:prose-sm" />
      </main>
    </template>
    <footer class="mb-8">
      <div class="h-12" />
      <disqus />
    </footer>
  </article>
</template>

<script lang="ts">
import { Post } from '@/components/PostListItem.vue'
import {
  defineComponent,
  ref,
  useFetch,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const {
      route,
      app: { $content },
    } = useContext()
    const slug: String = route.value.path.replace('/posts/', '')
    const post = ref<Post>()
    const { fetch } = useFetch(async () => {
      post.value = await $content('posts', slug).fetch()
    })
    fetch()
    return {
      post,
    }
  },
})
</script>
