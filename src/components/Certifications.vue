<template>
  <section id="certifications" class="section bg-gradient-to-b from-primary via-accent/25 to-accent/25">
    <div class="section-inner">
      <header class="section-head text-center">
        <h2 class="section-title">Certifications</h2>
        <p class="section-subtitle mx-auto">
          Credentials and continuous learning highlights.
        </p>
      </header>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="cert in certifications"
          :key="cert.id"
          class="surface surface-hover group relative p-6"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="text-lg font-semibold text-white group-hover:text-secondary transition">
              {{ cert.title }}
            </h3>

            <a
              v-if="cert.link"
              :href="cert.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition
              hover:border-white/20 hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
              title="View Certificate"
              :aria-label="`Open certificate: ${cert.title}`"
            >
              <ExternalLinkIcon class="h-5 w-5" />
            </a>
          </div>

          <p class="mt-3 text-sm text-white/60">
            {{ cert.source || 'Independent' }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { certifications } from '@/data/CertificationsData';
import { ExternalLinkIcon } from 'lucide-vue-next'
</script>