<template>
  <figure class="w-full">
    <img :src="src" :alt="alt" :style="style" loading="lazy" class="w-full" />
    <figcaption class="text-xs italic -pt-2" v-if="legend">
      {{ legend }}
    </figcaption>
  </figure>
</template>

<script>
export default {
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
  computed: {
    imageId() {
      if (this.id.includes('danrocdev/')) return this.id
      return `danrocdev/${this.id}`
    },
    src() {
      return this.$cloudinary().url(this.imageId, {
        width: '700',
        crop: 'scale',
        fetchFormat: 'auto',
        dpr: 2,
      })
    },
    style() {
      if (!this.shadow) return 'box-shadow: none !important;'
      return ''
    },
  },
}
</script>
