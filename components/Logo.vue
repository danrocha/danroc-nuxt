<template>
  <div class="inline-block px-1 bg-teal-500 logo">
    <h1 data-cy="logo" class="font-mono text-gray-900">danroc.dev</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Logo',
})
</script>
<style>
.logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
