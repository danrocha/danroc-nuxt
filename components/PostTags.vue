<template>
  <section class="text-sm text-gray-500">
    <!-- <nuxt-link
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
      class="mr-2 link"
    >
      #{{ tag.title }}
    </nuxt-link> -->
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
