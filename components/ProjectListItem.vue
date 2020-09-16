<template>
  <article class="body sm:flex sm:flex-col sm:justify-end" @click="openArticle">
    <figure class="relative pb-4 pr-4">
      <div
        class="absolute bottom-0 right-0 w-64 h-64 text-teal-900 pattern-dots-sm"
      />
      <img :src="image" class="relative z-10" />
    </figure>
    <div>
      <h3 class="font-mono font-bold">
        <nuxt-link v-if="project.publish" :to="project.path" class="link">{{
          project.title
        }}</nuxt-link>
        <template v-else>
          {{ project.title }}
        </template>
      </h3>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="project.description" />
    </div>

    <div class="flex space-x-2 font-mono text-sm links">
      <p class="flex items-center space-x-2" data-cy="read-link">
        <nuxt-link :to="project.path" class="font-mono link" tag="a"
          >read</nuxt-link
        >&nbsp;&rarr;
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import { RawLocation } from 'vue-router/types/router'
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export interface Project {
  image: String
  title: String
  description: String
  url: String
  github: String
  path: RawLocation
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
      app: { $cloudinary, router },
    } = useContext()
    const image: String = $cloudinary().url(project.image, {
      width: 200,
      crop: 'scale',
      fetchFormat: 'auto',
      dpr: 3,
    })

    const github: String = project.github.replace('https://', '')
    const url: String = project.github.replace('https://', '')
    const openArticle = () => {
      if (router) return router.push(project.path)
    }
    return {
      image,
      github,
      url,
      openArticle,
    }
  },
})
</script>

<style scoped>
article > figure > img {
  animation: 0.1s zoomin ease-in 1 normal forwards;
}
article:hover {
  cursor: pointer;
}
article:hover > figure > img {
  animation: 0.1s zoomout ease-out 1 normal forwards;
}
article:hover .link {
  background: rgba(35, 78, 82, 1);
}

@keyframes zoomin {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}
@keyframes zoomout {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}
</style>
