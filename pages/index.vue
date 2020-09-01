<template>
  <div class="container">
    <div class="home">
      <section class="mb-8 sm:ml-12 sm:mb-12 md:w-2/3 lg:m-0 lg:w-full">
        <nuxt-content :document="homeAbout" class="text-xl" />
        <p class="flex items-center justify-end">
          <a href="#about" class="link">read more</a
          ><svg-icon icon="arrow-down" />
        </p>
      </section>
      <!-- List PROJECTS -->
      <section class="section">
        <a name="projects" />
        <h2 class="blue">
          Projects
        </h2>
        <div class="h-8" />
        <div class="project-grid sm:ml-12 md:w-2/3 lg:w-full lg:ml-0 xl:w-2/3">
          <project-list-item
            v-for="project in projects"
            :key="project.slug"
            :project="project"
          />
        </div>
      </section>
      <section></section>
      <!-- List posts -->
      <section class="section">
        <a name="posts" />
        <h2 class="green">
          Articles
        </h2>
        <div class="h-8" />
        <div class="post-grid sm:ml-12 md:w-2/3 lg:w-full lg:ml-0 xl:w-2/3">
          <post-list-item v-for="post in posts" :key="post.slug" :post="post" />
        </div>
      </section>

      <!-- ABOUT -->
      <section class="section">
        <a name="about" />
        <h2 class="yellow">
          About
        </h2>
        <div class="h-8" />
        <p class="mb-8 text-center">
          <img
            :src="myPhoto"
            width="200"
            height="200"
            alt="Avatar from Daniel da Rocha"
            class="inline-block"
          />
        </p>
        <section class="mb-8 -ml-8 sm:ml-12 sm:mb-12 md:w-2/3 lg:m-0 lg:w-full">
          <nuxt-content :document="about" class="prose" />
        </section>
        <social-icons class="justify-center" />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts').fetch()
    const projects = await $content('projects').sortBy('order').fetch()
    const homeAbout = await $content('homeAbout').fetch()
    const about = await $content('about').fetch()
    return {
      posts,
      about,
      homeAbout,
      projects,
    }
  },
  computed: {
    myPhoto() {
      return this.$cloudinary().url(`danrocdev/danieldarocha.jpg`, {
        width: 200,
        height: 200,
        radius: 'max',
        crop: 'thumb',
        effect: 'grayscale',
      })
    },
  },
}
</script>

<style>
.section h2 {
  @apply font-mono text-sm font-bold tracking-wide uppercase;
}
.section h2::before {
  display: block;
  content: '';
  @apply mb-1 w-32 border-t-2 border-black;
}
.section h2.blue::before {
  @apply border-blue-500;
}
.section h2.green::before {
  @apply border-green-500;
}
.section h2.yellow::before {
  @apply border-yellow-500;
}

.project-grid {
  display: grid;
  grid-gap: 2rem;
}

/* @screen md {
  .home {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
} */

.home {
  display: grid;
  grid-gap: 3rem;
}

@screen lg {
  .home {
    grid-template-columns: 30% 1fr;
  }
}
</style>
