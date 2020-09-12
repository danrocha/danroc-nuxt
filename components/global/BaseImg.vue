<template>
  <figure class="w-full">
    <img :src="src" :alt="alt" :style="style" loading="lazy" class="w-full" />
    <figcaption v-if="legend" class="text-xs italic -pt-2">
      {{ legend }}
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    id: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: 'Image',
    },
    legend: {
      type: String,
      default: null,
    },
    shadow: {
      type: Boolean,
      default: true,
    },
  },
  setup({ id, shadow }) {
    const {
      app: { $cloudinary },
    } = useContext()

    const imageId: String = id.includes('danrocdev/') ? id : `danrocdev/${id}`
    const src: String = $cloudinary().url(imageId, {
      width: '700',
      crop: 'scale',
      fetchFormat: 'auto',
      dpr: 2,
    })
    const style: String = shadow ? '' : 'box-shadow: none !important;'

    return {
      src,
      style,
    }
  },
})
</script>
