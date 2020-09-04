<template>
  <article>
    <figure class="image">
      <img
        v-if="project.image"
        :alt="`Cover image for the project ${project.title}`"
        :src="image"
        class="shadow sm:shadow-lg sm:w-full sm:h-full content-cover"
      />
    </figure>
    <div class="body sm:flex sm:flex-col sm:justify-end">
      <div>
        <h3 class="font-bold">
          {{ project.title }}
        </h3>
        <p v-html="project.description" />
      </div>
      <div class="flex space-x-2 font-mono links">
        <p class="flex items-center space-x-2">
          <a :href="project.url" target="_blank" class="link">link</a>&nearr;
        </p>
        <p class="flex items-center space-x-2">
          <a :href="project.github" target="_blank" class="link">github</a
          >&nearr;
        </p>
      </div>
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
        width: 50,
        height: 50,
        crop: 'thumb',
        fetchFormat: 'auto',
        dpr: 2,
      })
    },
    github() {
      return this.project.github.replace('https://', '')
    },
    url() {
      return this.project.url.replace('https://', '')
    },
  },
}
</script>

<style scoped>
article {
  display: grid;
  grid-gap: 1rem;

  /* align-items: center; */
  grid-template-columns: 50px 1fr;
  grid-template-areas: 'image body';
}
.image {
  width: 50px;
  height: 50px;
  grid-area: image;
}
.body {
  grid-area: body;
}
</style>
