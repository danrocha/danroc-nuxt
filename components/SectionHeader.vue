<template>
  <div
    class="flex items-center w-24 h-auto mb-8 ml-12 text-teal-900 pattern-dots-sm"
  >
    <a :name="name" />
    <h2 class="-ml-12" data-aos="fade-left">{{ name }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
h2 {
  @apply font-mono lowercase  text-teal-500;
}
@screen sm {
  h2 {
    @apply mb-10;
  }
}
@screen lg {
  h2 {
    @apply text-left;
  }
}
</style>
