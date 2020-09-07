<template>
  <div class="relative max-w-lg lg:ml-12 lg:mt-12 xl:ml-20 xl:mt-20">
    <svg-sprite />
    <div
      class="absolute z-0 w-full h-24 mt-4 ml-8 text-teal-900 pattern-dots-sm"
    />
    <header class="relative z-10 mb-12">
      <div class="sm:flex sm:items-center sm:justify-between">
        <template v-if="$route.path === '/'">
          <logo />
        </template>
        <template v-else>
          <nuxt-link to="/">
            <span v-if="$route.path !== '/'" class="text-teal-500">&larr;</span>
            <logo />
          </nuxt-link>
        </template>
        <social-icons class="flex-none hidden sm:flex" />
      </div>
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
