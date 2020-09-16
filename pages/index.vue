<template>
  <div>
    <div class="relative home">
      <section class="mb-12 sm:ml-12" data-cy="section-intro">
        <NuxtContent
          :document="homeAbout"
          class="mb-2 prose"
          data-cy="intro-text"
        />
        <p class="font-mono text-sm text-right lg:text-left">
          <a href="#about" class="link">read more</a>&nbsp;&darr;
        </p>
      </section>

      <!-- List PROJECTS -->
      <ProjectList class="section" />
      <!-- List posts -->
      <PostList class="section" />

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
              class="inline-block"
              data-aos="fade-left"
            />
          </div>
        </div>
        <section class="mb-8 sm:ml-12 sm:mb-12">
          <NuxtContent :document="about" class="prose" />
        </section>
        <SocialIcons class="sm:ml-12" />
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
      about,
      homeAbout,
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

.home {
  display: grid;
  grid-gap: 3rem;
}
</style>
