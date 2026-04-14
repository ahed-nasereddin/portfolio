<script setup lang="ts">
import {projects as allProjects} from '@/data/projectsData'
import ProjectCard from './ProjectCard.vue'

const props = defineProps<{ limit?: number }>()
const projects=props.limit?allProjects.slice(0,props.limit):allProjects

const getDuration = (index: number) => {
  return 500 + index * 300 
}
</script>

<template>
  <section class="mx-auto w-full max-w-6xl px-6 py-10 sm:py-14">
    <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id ?? index"
        data-aos="fade-up"
        :data-aos-duration="getDuration(index)"
        class="h-full"
        :project="project"
      />
    </div>
  </section>
</template>
