<template>
  <div>
    <div class="relative home">
      <section class="mb-12 sm:ml-12" data-cy="section-intro">
        <nuxt-content :document="homeAbout" class="mb-2" data-cy="intro-text" />
        <p class="font-mono text-sm text-right lg:text-left">
          <a href="#about" class="link">read more</a>&darr;
        </p>
      </section>

      <!-- List PROJECTS -->
      <section class="section" data-cy="section-projects">
        <SectionHeader name="projects" />

        <ul class="project-grid sm:ml-12" data-cy="project-list">
          <li
            v-for="project in projects"
            :key="project.slug"
            data-cy="project-list-item"
          >
            <project-list-item :project="project" />
          </li>
        </ul>
      </section>
      <!-- List posts -->
      <section class="section" data-cy="section-articles">
        <SectionHeader name="articles" />
        <ul class="post-grid sm:ml-12" data-cy="article-list">
          <li
            v-for="post in posts"
            :key="post.slug"
            data-cy="article-list-item"
          >
            <post-list-item :post="post" />
          </li>
        </ul>
      </section>

      <!-- ABOUT -->
      <section class="section" data-cy="section-about">
        <a name="about" />
        <div class="mb-8 text-right md:text-left">
          <div class="text-teal-900 pattern-dots-sm">
            <img
              style="transform: translate(20px, -20px)"
              :src="myPhoto"
              width="200"
              height="200"
              alt="Avatar from Daniel da Rocha"
              class="inline-block shadow"
            />
          </div>
        </div>
        <section class="mb-8 sm:ml-12 sm:mb-12">
          <nuxt-content :document="about" class="prose" />
        </section>
        <social-icons class="sm:ml-12" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const {
      app: { $cloudinary, $content },
    } = useContext()
    const posts = useAsync(async () => await $content('posts').fetch())
    const projects = useAsync(async () => await $content('projects').fetch())
    const homeAbout = useAsync(async () => await $content('homeAbout').fetch())
    const about = useAsync(async () => await $content('about').fetch())
    const myPhoto: String = $cloudinary().url(`danrocdev/danieldarocha.jpg`, {
      width: 200,
      height: 200,
      crop: 'thumb',
      effect: 'grayscale',
      fetchFormat: 'auto',
      dpr: 2,
    })
    return {
      posts,
      about,
      homeAbout,
      projects,
      myPhoto,
    }
  },
})
</script>

<style>
.section {
  @apply mb-8;
}
@screen sm {
  .section {
    @apply mb-12;
  }
}

.project-grid {
  display: grid;
  grid-gap: 2rem;
}

.home {
  display: grid;
  grid-gap: 3rem;
}
</style>
