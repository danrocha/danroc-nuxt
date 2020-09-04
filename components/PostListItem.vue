<template>
  <article class="mb-8">
    <div class="body">
      <h3 class="font-bold leading-tight">
        <nuxt-link :to="post.path" class="link" tag="a">{{
          post.title
        }}</nuxt-link>
      </h3>
      <p class="" v-html="post.description" />
      <span class="hidden sm:inline-block"
        ><nuxt-link :to="post.path" class="link" tag="a">read</nuxt-link
        >&nbsp;&rarr;</span
      >
    </div>
    <div class="flex font-mono meta sm:block">
      <post-meta :date="post.date" /><span class="sm:hidden"
        >&nbsp;/&nbsp;
        <nuxt-link :to="post.path" class="link" tag="a">read</nuxt-link
        >&nbsp;&rarr;</span
      >
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
<style scoped>
article {
  display: grid;
  grid-gap: 0.25rem;
}

@screen sm {
  article {
    grid-template-columns: 50px 1fr;
    grid-template-areas: 'image body';
    align-items: top;
    grid-gap: 1rem;
  }
  .meta {
    grid-area: image;
    width: 50px;
  }
  .body {
    grid-area: body;
  }
}
</style>
