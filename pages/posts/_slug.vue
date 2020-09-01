<template>
  <article
    class="prose sm:prose-sm md:prose-md md:w-2/3 lg:pl-8 xl:w-1/2 lg:prose-lg xl:prose-xl"
  >
    <header class="mb-8">
      <h1 class="font-bold">
        {{ post.title }}
      </h1>
      <div class="flex -mt-4 space-x-2 font-mono">
        <post-meta :date="post.date" />
        <!-- <span>/</span>
        <post-tags :tags="post.tags" /> -->
      </div>
    </header>

    <main>
      <!-- <section class="post__header">
        <g-image
          alt="Cover image"
          v-if="post.coverImage"
          :src="post.coverImage"
        />
      </section> -->

      <!-- <section class="mb-12 content post-content" v-html="$page.post.content" /> -->
      <NuxtContent class="mx-auto" :document="post" />
    </main>
    <footer class="mb-8">
      <!-- <post-tags :tags="post.tags" /> -->
      <div class="h-12" />
      <disqus />
    </footer>
  </article>
</template>

<script>
export default {
  layout: 'post',
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return {
      post,
    }
  },
}
</script>
