<template>
  <section class="font-mono text-sm tracking-wide uppercase">
    {{ this.$dateFns.format(new Date(date), 'd.MM.yy') }}
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
