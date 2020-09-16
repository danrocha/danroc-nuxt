<template>
  <figure class="sm:text-teal-900 image pattern-dots-sm">
    <img :src="src" :alt="alt" :style="style" loading="lazy" />
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
    const imgFormat: string | undefined = id.split('.').pop()
    const imageId: string = id.includes('danrocdev/') ? id : `danrocdev/${id}`
    const src: string = $cloudinary().url(imageId, {
      width: '700',
      crop: 'scale',
      fetchFormat: 'auto',
      dpr: imgFormat === 'gif' ? 1 : 2,
    })
    const style: String = shadow ? '' : 'box-shadow: none !important;'

    return {
      src,
      style,
    }
  },
})
</script>
<style>
@screen sm {
  figure.image {
    @apply mb-12;

    width: 120%;
    position: relative;
  }

  figure.image > img,
  figure.image > figcaption {
    transform: translateX(1rem) translateY(1rem);
  }
}
@screen md {
  figure.image {
    width: 130%;
  }
}
@screen lg {
  figure.image {
    width: 140%;
  }
}
@screen xl {
  figure.image {
    width: 150%;
  }
}
</style>
