<template>
  <article>
    <figure class="image">
      <img
        v-if="project.image"
        :alt="`Cover image for the project ${project.title}`"
        :src="image"
        class="w-full h-full shadow content-cover"
      />
    </figure>
    <div class="body">
      <h3 class="font-semibold">
        <nuxt-link :to="project.path" class="link" tag="a">{{
          project.title
        }}</nuxt-link>
      </h3>
      <p v-html="project.description" />
    </div>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    image() {
      return this.$cloudinary().url(this.project.image, {
        width: 100,
        height: 100,
        // radius: 'max',
        crop: 'thumb',
      })
    },
  },
}
</script>

<style scoped>
article {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 100px 1fr;
  grid-template-areas: 'image body';
  align-items: center;
}
.image {
  width: 100px;
  height: 100px;
  grid-area: image;
}
.body {
  grid-area: body;
}
</style>
