<template>
  <section class="font-mono text-right">
    <span class="sm:hidden">
      {{ this.$dateFns.format(new Date(date), 'd.MM.yy') }}
    </span>
    <span class="hidden sm:block">
      {{ this.$dateFns.format(new Date(date), 'd.MM') }}
    </span>
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
