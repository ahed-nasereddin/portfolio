<template>
  <section id="experiences" class="section bg-gradient-to-b from-primary via-primary to-primary">
    <div class="section-inner">
      <header class="section-head text-center">
        <h2 class="section-title">Professional Experiences</h2>
        <p class="section-subtitle mx-auto">
          Roles, impact, and the technologies I used day-to-day.
        </p>
      </header>

      <div class="grid gap-6 lg:grid-cols-12">
        <!-- Selector -->
        <div class="lg:col-span-4">
          <div class="surface p-2">
            <div class="grid gap-2">
              <button
                v-for="(exp, index) in experiences"
                :key="index"
                @click="selectedIndex = index"
                :class="[
                  'w-full rounded-xl px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60',
                  selectedIndex === index
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-white/80 hover:bg-white/7 hover:text-white'
                ]"
              >
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <div class="text-sm font-semibold">
                      {{ exp.position }}
                    </div>
                    <div class="mt-0.5 text-xs text-white/65">
                      {{ exp.company }}<span v-if="exp.location"> • {{ exp.location }}</span>
                    </div>
                  </div>
                  <span class="chip chip-accent shrink-0">
                    {{ exp.duration }}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="lg:col-span-8">
          <div class="surface surface-hover p-6 sm:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h3 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {{ selectedExperience.position }}
              </h3>
              <span class="chip">
                {{ selectedExperience.company }}<span v-if="selectedExperience.location"> • {{ selectedExperience.location }}</span>
              </span>
            </div>

            <p class="mt-4 text-white/75 leading-relaxed">
              {{ selectedExperience.description }}
            </p>

            <div v-if="selectedExperience.technologies?.length" class="mt-6">
              <h4 class="text-sm font-semibold text-white/90">Technologies</h4>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="(tech, i) in selectedExperience.technologies"
                  :key="i"
                  data-aos="fade-up"
                  :data-aos-duration="300 + i * 80"
                  class="chip"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div v-if="selectedExperience.responsibilities?.length" class="mt-6">
              <h4 class="text-sm font-semibold text-white/90">Highlights</h4>
              <ul class="mt-3 space-y-2 text-sm text-white/75">
                <li
                  v-for="(item, i) in selectedExperience.responsibilities"
                  :key="i"
                  class="flex gap-3"
                >
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/90" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div v-if="selectedExperience.projects?.length" class="mt-6">
              <h4 class="text-sm font-semibold text-white/90">Projects</h4>
              <div class="mt-3 flex flex-wrap gap-2">
                <a
                  v-for="(proj, i) in selectedExperience.projects"
                  :key="i"
                  :href="proj.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="chip transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8"
                >
                  {{ proj.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { experiences } from '@/data/ExperiencesData';

const selectedIndex = ref(0);

const selectedExperience = computed(() => experiences[selectedIndex.value]);
</script>

<style scoped>
</style>
