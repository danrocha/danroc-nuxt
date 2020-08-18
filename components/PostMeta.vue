<template>
  <section class="text-sm tracking-wide text-gray-500 uppercase">
    Posted {{ this.$dateFns.format(new Date(date), 'd.M.yy') }}.
    <!-- <template v-if="post.timeToRead">
      {{ post.timeToRead }} min read.
    </template> -->
  </section>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
}
</script>
