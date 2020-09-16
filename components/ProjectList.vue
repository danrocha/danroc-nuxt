<template>
  <section data-cy="section-projects">
    <SectionHeader name="projects" />
    <template v-if="$fetchState.pending">
      <p class="font-mono text-teal-500">loading...</p>
    </template>
    <template v-else>
      <ul class="project-grid sm:ml-12" data-cy="project-list">
        <li
          v-for="project in projects"
          :key="project.slug"
          data-cy="project-list-item"
        >
          <ProjectListItem :project="project" />
        </li>
      </ul>
    </template>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const {
      app: { $content },
    } = useContext()

    const projects = ref([])
    const { fetch } = useFetch(async () => {
      projects.value = await $content('projects')
        .where({ publish: true })
        .sortBy('order')
        .fetch()
    })
    fetch()
    return { projects }
  },
})
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-gap: 3rem;
}
</style>
