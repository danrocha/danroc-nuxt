<template>
  <section class="font-mono text-sm">
    <nuxt-link v-for="tag in tags" :key="tag" :to="`/tags/${tag}`" class="mr-2"
      >#{{ tag }}</nuxt-link
    >
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PostTags',
  props: {
    date: {
      type: Array as () => String[],
      required: true,
    },
  },
})
</script>
