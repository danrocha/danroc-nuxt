<template>
  <section class="text-sm tracking-wide text-gray-500 uppercase">
    Posted {{ post.date }}.
    <template v-if="post.timeToRead">
      {{ post.timeToRead }} min read.
    </template>
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
