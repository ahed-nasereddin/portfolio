<script setup lang="ts">
import ProjectList from '@/components/ProjectsList.vue'
import AppLayout from '@/layouts/AppLayout.vue';
import { useHead } from '@vueuse/head'

useHead({
  title: 'Projects | Ahed Naser Eddin',
  meta: [
    { name: 'description', content: 'Explore a curated list of software development projects built by Ahed Naser Eddin using Laravel, Vue.js, and more.' },
    { name: 'keywords', content: 'Vue.js, Laravel, Web Developer, Portfolio, Projects, Fullstack Developer' },
    { property: 'og:title', content: 'Projects | Ahed Naser Eddin' },
    { property: 'og:description', content: 'Browse projects by Ahed Naser Eddin showcasing real-world apps built with modern web technologies.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://yourdomain.com/projects' },
    { property: 'og:image', content: 'https://yourdomain.com/images/og-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Projects | Ahed Naser Eddin' },
    { name: 'twitter:description', content: 'Explore featured software engineering projects built with Laravel, Vue.js, and more.' },
    { name: 'twitter:image', content: 'https://yourdomain.com/images/og-image.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://yourdomain.com/projects' }
  ]
})

</script>
<template>
  <AppLayout>
    <section class="relative overflow-hidden bg-primary">
      <div class="pointer-events-none absolute inset-0 opacity-[0.06]"
        style="
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.7) 1px, transparent 0);
          background-size: 26px 26px;
        "
      />

      <div class="mx-auto max-w-6xl px-6 pt-12 sm:pt-16">
        <h1 class="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Projects
        </h1>
        <p class="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          A curated selection of real-world apps and business systems I’ve built with Laravel, Vue.js, and modern web tooling.
        </p>
      </div>

      <ProjectList />
    </section>
  </AppLayout>
</template>