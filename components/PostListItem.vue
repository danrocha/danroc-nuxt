<template>
  <article class="mb-8">
    <div class="body">
      <h3 class="font-mono font-bold leading-tight">
        <nuxt-link :to="post.path" class="link" tag="a">{{
          post.title
        }}</nuxt-link>
      </h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="" v-html="post.description" />
      <span class="hidden text-sm sm:inline-block"
        ><nuxt-link :to="post.path" class="font-mono link" tag="a"
          >read</nuxt-link
        >&nbsp;&rarr;</span
      >
    </div>
    <div class="flex font-mono text-sm meta sm:block">
      <post-meta :date="post.date" /><span class="sm:hidden"
        >&nbsp;/&nbsp;
        <nuxt-link :to="post.path" class="font-mono link" tag="a"
          >read</nuxt-link
        >&nbsp;&rarr;</span
      >
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export interface Post {
  path: String
  description: String
  date: String
  title: String
}
export default defineComponent({
  name: 'PostListItem',
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
})
</script>

<style scoped>
article {
  display: grid;
  grid-gap: 0.25rem;
}

@screen sm {
  article {
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image body';
    align-items: top;
    grid-gap: 1rem;
  }
  .meta {
    grid-area: image;
  }
  .body {
    grid-area: body;
  }
}
</style>
