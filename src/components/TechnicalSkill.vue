<template>
  <section id="skills" class="section bg-gradient-to-b from-accent/25 via-primary to-primary">
    <div class="section-inner">
      <header class="section-head text-center">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle mx-auto">
          A practical toolset I use to ship production-ready web apps.
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="(skill, index) in technicalSkillsData"
          :key="index"
          class="surface surface-hover relative p-6"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="text-lg font-semibold text-white">
              {{ skill.category }}
            </h3>

            <button
              v-if="skill.items.length > 6"
              type="button"
              class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition
              hover:border-white/20 hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
              :aria-label="viewingSkills[index] ? `Collapse ${skill.category}` : `Expand ${skill.category}`"
              @click="viewSkill(index)"
            >
              <ChevronDownIcon
                class="h-5 w-5 transition-transform"
                :class="viewingSkills[index] ? 'rotate-180' : 'rotate-0'"
              />
            </button>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="(item, i) in visibleItems(skill.items, viewingSkills[index])"
              :key="i"
              class="chip"
            >
              {{ item }}
            </span>
          </div>

          <button
            v-if="skill.items.length > 6"
            type="button"
            class="mt-4 text-sm font-semibold text-secondary/90 transition hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 rounded-lg px-2 py-1 -mx-2"
            @click="viewSkill(index)"
          >
            {{ viewingSkills[index] ? 'Show less' : 'Show more' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "lucide-vue-next";

import { technicalSkillsData } from "@/data/TechnicalSkillsData";
import { ref } from "vue";

const viewingSkills = ref(Array(technicalSkillsData.length).fill(false));

const viewSkill = (idx: number) => {
  viewingSkills.value[idx] = !viewingSkills.value[idx];
};

const visibleItems = (items: string[], expanded: boolean) => {
  if (expanded) return items;
  return items.slice(0, 6);
};
</script>

<style scoped></style>
