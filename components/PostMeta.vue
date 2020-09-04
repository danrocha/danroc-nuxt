<template>
  <section class="font-mono text-right">
    <datetime class="sm:hidden" :datetime="date">
      {{ this.$dateFns.format(new Date(date), 'd.MM.yy') }}
    </datetime>
    <datetime :datetime="date" class="hidden sm:block">
      {{ this.$dateFns.format(new Date(date), 'd.MM') }}
    </datetime>
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
