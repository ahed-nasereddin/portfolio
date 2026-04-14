<script setup lang="ts">
import type { Project } from "@/types/project";
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { projects } from "@/data/projectsData";
import { ChevronLeftIcon, ArrowUpRightIcon, Building2Icon, ClockIcon, BracketsIcon, ImagePlusIcon } from 'lucide-vue-next';

defineProps<{ project: Project | null }>();

const route = useRoute();
const router = useRouter();
const project = ref<Project | null>(null);
const isLoading = ref(true);
const imageLoaded = ref<Record<number, boolean>>({});
let lightbox: PhotoSwipeLightbox | null = null;

const handleScroll = () => {
  const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  scrollProgressValue.value = scrollProgress;
};

const scrollProgressValue = ref(0);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  const id = Number(route.params.id);
  project.value = projects.find((p) => p.id === id) || null;
  isLoading.value = false;
  
  lightbox = new PhotoSwipeLightbox({
    gallery: "#project-gallery",
    children: "a",
    pswpModule: () => import("photoswipe"),
  });
  lightbox.init();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (lightbox) {
    lightbox.destroy();
  }
});

function openGallery(index: number) {
  if (lightbox) {
    lightbox.loadAndOpen(index);
  }
}

function onImageLoad(index: number) {
  imageLoaded.value[index] = true;
}
</script>

<template>
  <div class="min-h-screen bg-primary">
    <!-- Scroll Progress Bar -->
    <div 
      class="fixed top-0 left-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-50 transition-all duration-150 ease-out"
      :style="{ width: scrollProgressValue + '%' }"
    />

    <!-- Back Button -->
    <div class="fixed top-6 left-6 z-40">
      <button 
        @click="router.push('/projects')"
        class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70"
      >
        <ChevronLeftIcon class="h-4 w-4" />
        <span>Back to Projects</span>
      </button>
    </div>

    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-b from-primary via-primary to-accent/10 pt-32 pb-16">
      <!-- Background Effects -->
      <div class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute -top-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
        <div class="absolute -bottom-28 -right-24 h-[300px] w-[300px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div class="section-inner">
        <div class="grid gap-8 lg:grid-cols-3">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="animate-fade-in-up">
              <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur mb-6">
                <BracketsIcon class="h-4 w-4 text-secondary" />
                <span>{{ project?.type }}</span>
              </div>
              
              <h1 class="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {{ project?.title }}
              </h1>
              
              <p class="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75 sm:text-xl">
                {{ project?.description }}
              </p>

              <!-- Actions -->
              <div class="mt-8 flex flex-wrap gap-4">
                <a 
                  v-if="project?.url"
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-secondary/20 transition-all duration-300 hover:bg-secondary/85 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70"
                >
                  <span>View Live Demo</span>
                  <ArrowUpRightIcon class="h-4 w-4" />
                </a>
                
                <a 
                  v-if="project?.companyUrl"
                  :href="project.companyUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 shadow-sm transition-all duration-300 hover:border-white/25 hover:bg-white/8 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
                >
                  <Building2Icon class="h-4 w-4" />
                  <span>{{ project.company }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Info Cards -->
          <div class="space-y-4">
            <!-- Duration Card -->
            <div class="surface surface-hover shimmer p-6 animate-fade-in-up" :style="{ animationDelay: '0.2s' }">
              <div class="flex items-center gap-3 mb-3">
                <div class="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <ClockIcon class="h-5 w-5 text-secondary" />
                </div>
                <h3 class="text-sm font-semibold text-white/90">Duration</h3>
              </div>
              <p class="text-lg font-bold text-white">{{ project?.duration }}</p>
            </div>

            <!-- Type Card -->
            <div class="surface surface-hover shimmer p-6 animate-fade-in-up" :style="{ animationDelay: '0.3s' }">
              <div class="flex items-center gap-3 mb-3">
                <div class="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <BracketsIcon class="h-5 w-5 text-accent" />
                </div>
                <h3 class="text-sm font-semibold text-white/90">Project Type</h3>
              </div>
              <p class="text-lg font-bold text-white">{{ project?.type }}</p>
            </div>

            <!-- Company Card -->
            <div class="surface surface-hover shimmer p-6 animate-fade-in-up" :style="{ animationDelay: '0.4s' }">
              <div class="flex items-center gap-3 mb-3">
                <div class="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Building2Icon class="h-5 w-5 text-secondary" />
                </div>
                <h3 class="text-sm font-semibold text-white/90">Company</h3>
              </div>
              <p class="text-lg font-bold text-white">{{ project?.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Flow Section -->
    <section v-if="project?.dataFlow" class="section bg-gradient-to-b from-primary via-primary to-accent/5">
      <div class="section-inner">
        <div class="mb-10 text-center">
          <h2 class="section-title">Data Flow</h2>
          <p class="section-subtitle mx-auto mt-4">
            A simplified view of how data moves through the system
          </p>
        </div>

        <div class="mx-auto grid max-w-5xl gap-6 lg:grid-cols-4">
          <div 
            class="surface surface-hover shimmer p-6 text-center transition-all duration-700"
            v-for="(step, index) in [
              { label: 'Input', value: project.dataFlow.input },
              { label: 'Processing', value: project.dataFlow.processing },
              { label: 'Database', value: project.dataFlow.database },
              { label: 'Output', value: project.dataFlow.output }
            ]"
            :key="index"
          >
            <div class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 mb-4">
              <span class="text-lg font-bold text-secondary">{{ index + 1 }}</span>
            </div>
            <p class="text-xs font-semibold uppercase tracking-wide text-white/60 mb-2">{{ step.label }}</p>
            <p class="text-sm text-white/85">{{ step.value }}</p>
          </div>
        </div>

        <!-- Connection arrows for desktop -->
        <div class="hidden lg:block relative -mt-3">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="flex gap-6">
              <div class="w-16 h-px bg-gradient-to-r from-secondary/50 to-transparent"></div>
              <div class="w-16 h-px bg-gradient-to-r from-secondary/50 to-transparent"></div>
              <div class="w-16 h-px bg-gradient-to-r from-secondary/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="section bg-gradient-to-b from-accent/10 via-primary to-primary">
      <div class="section-inner">
        <div class="mb-10 text-center">
          <h2 class="section-title">Technologies Used</h2>
          <p class="section-subtitle mx-auto mt-4">
            Languages, frameworks, and tools that power this project
          </p>
        </div>

        <div class="mx-auto max-w-4xl">
          <div class="surface p-8">
            <div class="flex flex-wrap gap-3 justify-center">
              <span
                v-for="(lang, i) in project?.languages"
                :key="i"
                class="chip chip-accent px-4 py-2 text-sm"
              >
                {{ lang }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="section bg-gradient-to-b from-primary via-primary to-accent/15 pb-24">
      <div class="section-inner">
        <div class="mb-10 text-center">
          <h2 class="section-title">Project Gallery</h2>
          <p class="section-subtitle mx-auto mt-4">
            Screenshots and visual previews of the project
          </p>
        </div>

        <div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2" id="project-gallery">
          <a
            v-for="(src, index) in project?.images"
            :key="index"
            :href="src"
            :data-pswp-width="1600"
            :data-pswp-height="1200"
            class="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70"
            target="_blank"
            @click.prevent="openGallery(index)"
          >
            <!-- Loading placeholder -->
            <div 
              class="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 animate-pulse"
              v-show="!imageLoaded[index]"
            />
            
            <img
              :src="src"
              class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              @load="onImageLoad(index)"
              :alt="`Project screenshot ${index + 1}`"
            />
            
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div class="flex items-center gap-2 text-white">
                <ImagePlusIcon class="h-5 w-5" />
                <span class="text-sm font-semibold">Click to enlarge</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="relative isolate overflow-hidden bg-gradient-to-b from-primary to-accent/20 py-16">
      <div class="section-inner text-center">
        <h2 class="text-2xl font-bold text-white mb-4">Interested in working together?</h2>
        <p class="text-white/70 mb-8 max-w-xl mx-auto">
          Let's discuss how I can help bring your ideas to life with modern web technologies.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/projects"
            class="btn-ghost inline-flex items-center justify-center gap-2"
          >
            <ChevronLeftIcon class="h-4 w-4" />
            <span>View All Projects</span>
          </router-link>
          <a 
            href="#contact"
            class="btn-primary inline-flex items-center justify-center gap-2"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pswp__img {
  object-fit: contain !important;
}

/* Smooth image loading */
img {
  transition: opacity 0.3s ease;
}

/* Custom scrollbar for gallery */
.pswp__scroll-wrap {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 255, 136, 0.3) transparent;
}

/* Animation for data flow steps */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>