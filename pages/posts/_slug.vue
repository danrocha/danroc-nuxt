<template>
  <article class="prose lg:ml-8">
    <template v-if="post">
      <header class="mb-8">
        <h1 class="font-mono font-bold text-teal-200">
          {{ post.title }}
        </h1>
        <div class="flex -mt-4 space-x-2 font-mono text-sm">
          &mdash;&nbsp;<post-meta :date="post.date" />
        </div>
      </header>
      <main>
        <nuxt-content class="mx-auto" :document="post" />
      </main>
    </template>
    <footer class="mb-8">
      <div class="h-12" />
      <disqus />
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  // layout: 'post',
  setup() {
    const {
      route,
      app: { $content },
    } = useContext()
    const slug: String = route.value.path.replace('/posts/', '')
    const post = useAsync(async () => await $content('posts', slug).fetch())

    return {
      post,
    }
  },
})
</script>
