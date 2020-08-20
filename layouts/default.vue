<template>
  <div>
    <svg-sprite />
    <header class="mb-12">
      <div class="sm:flex sm:items-center sm:justify-between">
        <h1 class="font-mono text-5xl text-pink-600">
          danroc.dev
        </h1>
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
