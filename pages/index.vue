<template>
  <div class="container">
    <div class="home">
      <section
        class="mb-8 prose content sm:ml-12 sm:mb-12 md:w-1/2 lg:m-0 lg:w-full"
      >
        <p>
          I'm <strong>Daniel da Rocha</strong>, a Brazilian architect and web
          developer.
        </p>
        <p>
          I apply skills learned in architecture to my development efforts: the
          ability to deal with complex problems, to devise simple and elegant
          solutions, and to deal with diverse and complex team configurations.
        </p>
        <p>
          Things I am currently building include:
          <a href="//awarded.to" target="_blank" class="font-semibold link"
            >Awarded</a
          >,
          <a
            href="//thearchitecturelist.com"
            target="_blank"
            class="font-semibold link"
            >The Architecture List</a
          >,
          <a
            href="//theforeignarchitect"
            target="_blank"
            class="font-semibold link"
            >The Foreign Architect</a
          >, and <strong>Berlin Architectural Network</strong> (WIP).
        </p>
        <dl class="flex mt-8">
          <div class="mr-8">
            <dt class="text-xs text-gray-500 uppercase trackign wide">
              Homebase & Currently in
            </dt>
            <dd>🇩🇪Berlin</dd>
          </div>
        </dl>
      </section>
      <section></section>
      <section></section>
      <!-- List posts -->
      <section class="posts">
        <h2 class="mb-4 text-base tracking-wide text-gray-500 uppercase">
          Latest articles
        </h2>
        <div class="post-grid sm:ml-12 md:w-1/2 lg:w-full lg:ml-0 xl:w-2/3">
          <post-list-item v-for="post in posts" :key="post.slug" :post="post" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts').fetch()
    return {
      posts,
    }
  },
}
</script>

<style>
.posts h2::before {
  display: block;
  content: '';
  @apply w-24 mb-2 border-t-2 border-blue-400;
}
.home {
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 2rem;
}
</style>
