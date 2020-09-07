<template>
  <div class="relative max-w-lg lg:ml-12 lg:mt-12 xl:ml-20 xl:mt-20">
    <svg-sprite />
    <div
      class="absolute z-0 w-full h-24 mt-3 ml-8 text-teal-900 pattern-dots-sm"
    />
    <header class="relative z-10 mb-12">
      <template v-if="$route.path === '/'">
        <logo />
      </template>
      <template v-else>
        <nuxt-link to="/">
          <span v-if="$route.path !== '/'" class="text-teal-500">&larr;</span>
          <logo />
        </nuxt-link>
      </template>
      <div class="hidden sm:block">&nbsp;</div>
      <social-icons class="hidden sm:flex" />
    </header>
    <main class="relative z-20 main">
      <Nuxt />
    </main>

    <base-footer />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: auto 1fr;
}

@screen sm {
  header {
    grid-template-columns: auto 1fr auto;
  }
}
</style>
