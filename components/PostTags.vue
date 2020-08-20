<template>
  <section class="text-sm text-gray-500">
    <nuxt-link
      v-for="tag in tags"
      :key="tag"
      :to="`/tags/${tag}`"
      class="mr-2 link"
    >
      #{{ tag }}
    </nuxt-link>
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
