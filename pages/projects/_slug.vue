<template>
  <article class="lg:pl-8">
    <header class="mb-8 sm:items-center sm:space-x-4 sm:flex">
      <p class="mb-4 text-right sm:m-0">
        <img
          v-if="project.image"
          alt="Cover image"
          :src="coverImage"
          class="inline-block shadow"
        />
      </p>
      <div class="prose sm:prose-sm md:prose-md lg:prose-lg">
        <h1>
          {{ project.title }}
        </h1>
      </div>
    </header>

    <main>
      <!-- <section class="intro">
        <div v-html="project.intro" class="text-gray-900" />
      </section> -->

      <section class="links">
        <p class="flex items-center space-x-2">
          <svg-icon class="text-gray-500" icon="external-link" /><a
            :href="project.url"
            target="_blank"
            class="font-semibold link"
            >{{ url }}</a
          >
        </p>
        <p class="flex items-center space-x-2">
          <svg-icon class="text-gray-500" icon="github" /><a
            :href="project.github"
            target="_blank"
            class="font-semibold link"
            >{{ github }}</a
          >
        </p>
      </section>

      <section class="prose body sm:prose-sm md:prose-md lg:prose-lg">
        <nuxt-content :document="project" />
      </section>
      <section class="techstack">
        <div class="prose sm:prose-sm md:prose-md lg:hidden">
          <h2>Tech Stack</h2>
        </div>
        <div class="h-8 lg:h-12" />
        <ul class="flex flex-wrap sm:pl-8 md:pl-12 lg:flex-col lg:items-start">
          <li
            v-for="tech in project.techstack"
            :key="tech"
            class="flex items-center p-2 mb-2 mr-2 space-x-2 font-mono text-gray-600 border rounded shadow"
          >
            <svg-icon :icon="tech" /><span>{{ tech }}</span>
          </li>
        </ul>
      </section>
    </main>
    <footer class="mb-8">
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
      width: 100,
      height: 100,
      crop: 'thumb',
    })
    const github = project.github.replace('https://', '')
    const url = project.url.replace('https://', '')
    return {
      project,
      coverImage,
      github,
      url,
    }
  },
}
</script>
<style scoped>
/* main {
  display: grid;
  grid-gap: 2rem;
} */

@screen lg {
  main {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'intro .'
      'links .'
      'body techstack';
  }
  .intro {
    grid-area: intro;
  }
  .links {
    grid-area: links;
  }
  .body {
    grid-area: body;
  }
  .techstack {
    grid-area: techstack;
    align-self: end;
  }
}
</style>
