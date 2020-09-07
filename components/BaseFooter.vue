<template>
  <footer class="pt-4 pb-4 text-sm text-gray-800 pattern-dots-sm sm:pl-12">
    <div class="text-gray-600">
      <p>Made in Berlin</p>
      <p>Powered by <a href="//nuxtjs.org">Nuxt.js</a></p>
      <p>
        On <a href="//github.com/danrocha/danroc-nuxt" class="link">GitHub</a>
      </p>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'BaseFooter',
})
</script>
