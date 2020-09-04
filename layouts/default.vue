<template>
  <div>
    <svg-sprite />
    <header class="mb-12">
      <div class="sm:flex sm:items-center sm:justify-between">
        <h1 class="inline-block px-1 font-mono text-white bg-pink-600">
          danroc.dev
        </h1>
        <social-icons class="flex-none hidden sm:flex" />
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
