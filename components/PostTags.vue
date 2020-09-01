<template>
  <section class="font-mono text-sm">
    <nuxt-link v-for="tag in tags" :key="tag" :to="`/tags/${tag}`" class="mr-2"
      >#{{ tag }}</nuxt-link
    >
  </section>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>
