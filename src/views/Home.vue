<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Certifications from '@/components/Certifications.vue';
import Contact from '@/components/Contact.vue';
import DataJourney from '@/components/DataJourney.vue';
import Education from '@/components/Education.vue';
import Experiences from '@/components/Experiences.vue';
import Hero from '@/components/Hero.vue';
import TechnicalSkill from '@/components/TechnicalSkill.vue';
import { useHead } from '@vueuse/head';
import { ChevronUpIcon } from 'lucide-vue-next';

useHead({
  title: 'Ahed Naser Eddin – Full Stack Developer | Laravel & Vue.js',
  meta: [
    {
      name: 'description',
      content: 'Explore the portfolio of Ahed Naser Eddin including his education, experiences, and certifications as a fullstack developer.',
    },
    {
      name: 'keywords',
      content: 'Ahed Naser Eddin, Full Stack Developer, Laravel Developer, Vue.js Developer, React Developer, SaaS Developer, PHP, JavaScript, Web Developer Dubai, RESTful APIs, Database Optimization, Business Applications',
    },
    {
      property: 'og:title',
      content: 'Ahed Naser Eddin | Fullstack Developer',
    },
    {
      property: 'og:description',
      content: 'Check out Ahed\'s work and background in software engineering using Vue.js and Laravel.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://ahednasereddin.dev',
    },
    {
      property: 'og:image',
      content: 'https://ahednasereddin.dev/images/og-image.png',
    },
  ],
  link: [
    { rel: 'canonical', href: 'https://ahednasereddin.dev' },
  ],
});

const scrollProgress = ref(0);
const showScrollTop = ref(false);

const handleScroll = () => {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  scrollProgress.value = progress;
  showScrollTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Scroll Progress Bar -->
  <div 
    class="fixed top-0 left-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-50 transition-all duration-150 ease-out"
    :style="{ width: scrollProgress + '%' }"
    role="progressbar"
    :aria-valuenow="scrollProgress"
    aria-valuemin="0"
    aria-valuemax="100"
  />

  <!-- Main Content -->
  <main>
    <Hero />
    <DataJourney />
    <Education />
    <Experiences />
    <Certifications />
    <TechnicalSkill />
    <Contact />
  </main>

  <!-- Scroll to Top Button -->
  <button
    v-show="showScrollTop"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 z-40 inline-flex items-center justify-center rounded-full bg-secondary p-3 text-black shadow-lg transition-all duration-300 hover:bg-secondary/85 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
    aria-label="Scroll to top"
    title="Back to top"
  >
    <ChevronUpIcon class="h-6 w-6" />
  </button>
</template>
