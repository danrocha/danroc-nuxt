<template>
  <article class="mb-8">
    <div>
      <img alt="Cover image" v-if="post.coverImage" :src="post.coverImage" />
    </div>
    <div>
      <h3 class="mb-1 font-semibold">
        <nuxt-link :to="post.path" class="link" tag="a">{{
          post.title
        }}</nuxt-link>
      </h3>
      <p class="mb-2" v-html="post.description" />
      <footer class="flex space-x-2 font-mono">
        <post-meta :date="post.date" />
        <span>/</span>
        <post-tags :tags="post.tags" />
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
