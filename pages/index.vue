<template>
  <div class="container">
    <div class="home">
      <section class="mb-12 sm:ml-12 md:w-2/3 lg:m-0 lg:w-full">
        <nuxt-content :document="homeAbout" class="mb-2" />
        <p class="flex items-center justify-end font-mono">
          <a href="#about" class="link">read more</a>&nbsp;&darr;
        </p>
      </section>

      <!-- List PROJECTS -->
      <section class="section">
        <a name="projects" />

        <h2>
          Projects
        </h2>

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
        <h2>
          Articles
        </h2>

        <div class="post-grid sm:ml-12 md:w-2/3 lg:w-full lg:ml-0 xl:w-2/3">
          <post-list-item v-for="post in posts" :key="post.slug" :post="post" />
        </div>
      </section>
      <section>
        <p class="hidden mb-8 text-right lg:block">
          <img
            :src="myPhoto"
            width="200"
            height="200"
            alt="Avatar from Daniel da Rocha"
            class="inline-block shadow"
          />
        </p>
      </section>
      <!-- ABOUT -->
      <section class="section">
        <a name="about" />
        <h2>
          About
        </h2>

        <p class="mb-8 text-right md:text-left lg:hidden">
          <img
            :src="myPhoto"
            width="200"
            height="200"
            alt="Avatar from Daniel da Rocha"
            class="inline-block shadow"
          />
        </p>
        <section class="mb-8 sm:ml-12 sm:mb-12 md:w-2/3 lg:ml-0 lg:w-full">
          <nuxt-content :document="about" class="prose" />
        </section>
        <social-icons class="sm:ml-12 lg:m-0" />
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
        crop: 'thumb',
        effect: 'grayscale',
        fetchFormat: 'auto',
        dpr: 2,
      })
    },
  },
}
</script>

<style>
.section h2 {
  @apply font-mono lowercase text-right mb-8 bg-black text-white px-1 inline-block;
}
.section {
  @apply mb-16;
}
@screen sm {
  .section {
    @apply mb-20;
  }
  .section h2 {
    @apply mb-10;
  }
}
@screen lg {
  .section h2 {
    @apply text-left;
  }
}

/* .section h2::before {
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
} */

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

@screen lg {
  .home {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: 30% 1fr;
  }
}
</style>
