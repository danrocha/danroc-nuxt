<template>
  <nuxt-link class="font-mono text-pink-500 NuxtLogo" to="/" data-cy="logo">
    &larr; danroc.dev
  </nuxt-link>
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
