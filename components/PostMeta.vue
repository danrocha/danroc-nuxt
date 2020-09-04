<template>
  <section class="font-mono font-semibold text-right text-green-500">
    <span class="sm:hidden">
      {{ this.$dateFns.format(new Date(date), 'd.MM.yy') }}
    </span>
    <span class="hidden text-xl sm:block">
      {{ this.$dateFns.format(new Date(date), 'd') }}<br />
      {{ this.$dateFns.format(new Date(date), 'MM') }}<br />
      {{ this.$dateFns.format(new Date(date), 'yy') }}<br />
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
