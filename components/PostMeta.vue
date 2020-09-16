<template>
  <section class="font-mono text-right">
    <time class="sm:hidden" :datetime="date">
      {{ $dateFns.format(new Date(date), 'd.MM.yy') }}
    </time>
    <time :datetime="date" class="hidden sm:block">
      {{ $dateFns.format(new Date(date), 'd.MM') }}
    </time>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PostMeta',
  props: {
    date: {
      type: String,
      required: true,
    },
  },
})
</script>
