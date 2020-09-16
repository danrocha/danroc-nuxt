<template>
  <article>
    <header class="mb-12">
      <div class="mb-2">
        <h1 class="font-mono text-4xl font-bold leading-tight text-teal-200">
          {{ project.title }}
        </h1>
      </div>
      <section class="flex space-x-2 font-mono links" data-cy="links">
        <p class="flex items-center space-x-2">
          <a :href="project.url" target="_blank" class="link">link</a>&nearr;
        </p>
        <p class="flex items-center space-x-2">
          <a :href="project.github" target="_blank" class="link">github</a
          >&nearr;
        </p>
      </section>
    </header>

    <main>
      <section class="prose intro sm:prose-sm">
        <div v-html="project.intro" />
      </section>

      <section class="prose body sm:prose-sm">
        <nuxt-content :document="project" />
      </section>
      <section class="techstack">
        <div class="prose sm:prose-sm">
          <h2>Tech Stack</h2>
        </div>
        <div class="h-8" />
        <ul class="flex flex-wrap">
          <li
            v-for="tech in project.techstack"
            :key="tech"
            class="flex items-center p-2 mb-2 mr-2 space-x-2 font-mono text-sm text-teal-200 bg-teal-900 border border-teal-500 rounded"
          >
            <svg-icon :icon="tech" /><span>{{ tech }}</span>
          </li>
        </ul>
      </section>
    </main>
    <footer class="mb-8">
      <div class="h-12" />
    </footer>
  </article>
</template>

<script lang="ts">
import { Project } from '@/components/ProjectListItem.vue'
import {
  defineComponent,
  // useAsync,
  useContext,
  ref,
  useFetch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const {
      route,
      app: { $content },
    } = useContext()
    const slug: string = route.value.path.replace('/projects/', '')
    const github = ref('')
    const url = ref('')
    const project = ref<Project>()
    const { fetch } = useFetch(async () => {
      project.value = await $content('projects', slug).fetch()
      if (project.value) {
        github.value = project.value.github.replace('https://', '')
        url.value = project.value.url.replace('https://', '')
      }
    })
    fetch()

    return {
      project,
      github,
      url,
    }
  },
})
</script>
