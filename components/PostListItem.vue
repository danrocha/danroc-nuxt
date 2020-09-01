<template>
  <article class="mb-8">
    <div class="body">
      <h3 class="mb-1 font-semibold">
        <nuxt-link :to="post.path" class="link" tag="a">{{
          post.title
        }}</nuxt-link>
      </h3>
      <p class="mb-2" v-html="post.description" />
    </div>
    <div class="font-mono meta">
      <post-meta :date="post.date" class="sm:text-right" />
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
    grid-template-columns: 100px 1fr;
    grid-template-areas: 'image body';
    align-items: top;
    grid-gap: 2rem;
  }
  .meta {
    width: 100px;
    height: 100px;
    grid-area: image;
  }
  .body {
    grid-area: body;
  }
}
</style>
