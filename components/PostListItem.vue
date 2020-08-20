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

      <post-meta :date="post.date" />
      <post-tags :tags="post.tags" />
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
