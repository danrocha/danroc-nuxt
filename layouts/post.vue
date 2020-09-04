<template>
  <div>
    <svg-sprite />
    <header class="mb-12 lg:pl-8">
      <div class="flex flex-wrap items-center justify-between">
        <nav>
          <p class="font-mono text-pink-600 lg:-ml-4">
            <nuxt-link to="/"
              >&larr;
              <span class="px-1 text-white bg-pink-600"
                >danroc.dev</span
              ></nuxt-link
            >
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
