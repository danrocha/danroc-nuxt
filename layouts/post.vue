<template>
  <div>
    <svg-sprite />
    <header class="mb-12 lg:pl-8">
      <div class="flex flex-wrap items-center justify-between">
        <nav>
          <p class="font-mono text-pink-600 lg:-ml-4">
            <nuxt-link to="/">&larr; danroc.dev</nuxt-link>
          </p>
        </nav>
        <social-icons />
      </div>
    </header>
    <main class="main">
      <Nuxt />
    </main>
    <base-footer />
  </div>
</template>

<script>
export default {}
</script>
