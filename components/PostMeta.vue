<template>
  <section class="font-mono text-right">
    <datetime class="sm:hidden" :datetime="date">
      {{ $dateFns.format(new Date(date), 'd.MM.yy') }}
    </datetime>
    <datetime :datetime="date" class="hidden sm:block">
      {{ $dateFns.format(new Date(date), 'd.MM') }}
    </datetime>
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
