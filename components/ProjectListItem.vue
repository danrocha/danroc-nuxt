<template>
  <article>
    <div class="body sm:flex sm:flex-col sm:justify-end">
      <div>
        <h3 class="inline-block font-mono font-bold">
          {{ project.title }}
        </h3>
        <p class="inline-block" v-html="project.description" />
      </div>
      <div class="flex space-x-2 font-mono text-sm links">
        <p class="flex items-center space-x-2">
          <a :href="project.url" target="_blank" class="link">link</a>&nearr;
        </p>
        <p class="flex items-center space-x-2">
          <a :href="project.github" target="_blank" class="link">github</a
          >&nearr;
        </p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

interface Project {
  image: String
  title: String
  description: String
  url: String
  github: String
}

export default defineComponent({
  name: 'ProjectListItem',
  props: {
    project: {
      type: Object as () => Project,
      required: true,
    },
  },
  setup({ project }) {
    const {
      app: { $cloudinary },
    } = useContext()
    const image: String = $cloudinary().url(project.image, {
      width: 50,
      height: 50,
      crop: 'thumb',
      fetchFormat: 'auto',
      dpr: 2,
    })

    const github: String = project.github.replace('https://', '')
    const url: String = project.github.replace('https://', '')
    return {
      image,
      github,
      url,
    }
  },
})
</script>
