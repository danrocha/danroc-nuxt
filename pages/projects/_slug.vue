<template>
  <article
    class="prose-sm prose md:w-2/3 lg:pl-8 xl:w-1/2 sm:prose lg:prose-lg"
  >
    <header>
      <h1>
        {{ project.title }}
      </h1>
    </header>

    <main>
      <section>
        <img v-if="project.image" alt="Cover image" :src="coverImage" />
      </section>

      <nuxt-content class="mx-auto" :document="project" />
    </main>
    <footer class="mb-8">
      <post-tags :tags="project.tags" />
      <div class="h-12" />
    </footer>
  </article>
</template>

<script>
export default {
  layout: 'post',
  async asyncData({ $content, params, $cloudinary }) {
    const project = await $content('projects', params.slug).fetch()
    const coverImage = $cloudinary().url(project.image, {
      width: 300,
      height: 300,
      radius: 'max',
      crop: 'thumb',
    })
    return {
      project,
      coverImage,
    }
  },
}
</script>
