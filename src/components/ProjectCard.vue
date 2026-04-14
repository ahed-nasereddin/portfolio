<script setup lang="ts">
import type { Project } from "@/types/project";
import { useHead } from '@vueuse/head'

const props = defineProps<{ project: Project }>();

useHead(() => ({
  title: `${props.project.title} | Ahed Naser Eddin – Full Stack Developer`,
  meta: [
    {
      name: 'description',
      content: props.project.description || 'Check out this project by Ahed Naser Eddin built with modern web technologies like Laravel, Vue.js, and JavaScript.'
    },
    {
      name: 'keywords',
      content: [
        'Ahed Naser Eddin',
        'web developer',
        'full-stack developer',
        'portfolio',
        'project',
        ...props.project.tools || [],
        ...props.project.languages || []
      ].join(', ')
    },
    { property: 'og:title', content: `${props.project.title} | Ahed Naser Eddin` },
    { property: 'og:description', content: props.project.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://ahednasereddin.dev/projects/${props.project.id}` },
    { property: 'og:image', content: props.project.mainImage || 'https://ahednasereddin.dev/images/og-projects.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${props.project.title} | Ahed Naser Eddin` },
    { name: 'twitter:description', content: props.project.description },
    { name: 'twitter:image', content: props.project.mainImage || 'https://ahednasereddin.dev/images/og-projects.png' }
  ],
  link: [
    { rel: 'canonical', href: `https://ahednasereddin.dev/projects/${props.project.id}` }
  ]
}))
</script>

<template>
  <div
    class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur transition
    hover:-translate-y-1 hover:border-white/20 hover:bg-white/7 hover:shadow-2xl focus-within:-translate-y-1 focus-within:shadow-2xl"
  >
    <div class="relative">
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />

      <img
        v-if="project.mainImage"
        :src="project.mainImage"
        :alt="project.title"
        class="aspect-[16/10] w-full object-cover"
        loading="lazy"
      />
      <div
        v-else
        class="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-white/5 via-white/5 to-secondary/10"
      >
        <span class="text-sm text-white/60">No preview</span>
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-4 p-5">
      <div>
        <h2 class="text-xl font-semibold tracking-tight text-white md:text-2xl">
        {{ project.title }}
        </h2>

        <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">
          {{ project.description }}
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <!-- Tools -->
        <div v-if="(project.tools ?? []).length" class="flex flex-wrap gap-2">
          <span
            v-for="(tool, i) in project.tools ?? []"
            :key="`tool-${project.id}-${i}`"
            class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 transition group-hover:border-white/20"
          >
            {{ tool }}
          </span>
        </div>

        <!-- Languages -->
        <div v-if="(project.languages ?? []).length" class="flex flex-wrap gap-2">
          <span
            v-for="(lang, i) in project.languages ?? []"
            :key="`lang-${project.id}-${i}`"
            class="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary/90 transition group-hover:border-secondary/35"
          >
            {{ lang }}
          </span>
        </div>
      </div>

      <div class="mt-auto pt-2">
        <RouterLink
        :to="{ name: 'ProjectDetails', params: { id: project.id } }"
        class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-black shadow-sm transition
        hover:bg-secondary/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      >
        View Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
