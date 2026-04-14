<template>
  <section
    id="journey"
    ref="sectionRef"
    class="section bg-gradient-to-b from-primary via-primary to-accent/15"
  >
    <div class="section-inner">
      <header 
        class="section-head text-center transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="inline-flex items-center gap-2 mb-4">
          <span class="h-px w-8 bg-secondary/50"></span>
          <span class="text-sm font-semibold text-secondary uppercase tracking-widest">My Journey</span>
          <span class="h-px w-8 bg-secondary/50"></span>
        </div>
        <h2 class="section-title">Full Stack Development</h2>
        <p class="section-subtitle mx-auto">
          Crafting end-to-end web solutions with modern technologies and best practices.
        </p>
      </header>

      <div class="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
        <div 
          class="surface surface-hover shimmer p-6 lg:col-span-2 transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <svg class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white">The Full Stack Approach</h3>
          </div>
          <p class="text-sm leading-relaxed text-white/75 sm:text-base">
            As a full stack developer, I bridge the gap between backend systems and frontend experiences. 
            I build robust APIs, design intuitive interfaces, and ensure seamless data flow across the entire application stack.
          </p>
          <p class="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            My expertise spans from database design and server-side logic to responsive UI development and 
            client-side interactivity. I focus on writing clean, maintainable code that scales with your business needs.
          </p>
          <p class="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            I'm passionate about creating digital products that not only function flawlessly but also provide 
            exceptional user experiences. Every project is an opportunity to solve complex problems with elegant solutions.
          </p>
        </div>

        <aside 
          class="surface surface-hover shimmer p-6 transition-all duration-700 delay-300"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <svg class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
              </svg>
            </div>
            <h3 class="text-sm font-semibold text-white/90">Tech Stack</h3>
          </div>
          <ul class="space-y-3 text-sm text-white/75">
            <li class="flex gap-3 items-start group">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/90 group-hover:scale-150 transition-transform" />
              <span class="group-hover:text-white/90 transition-colors">Frontend: Vue.js, React, Tailwind CSS, TypeScript</span>
            </li>
            <li class="flex gap-3 items-start group">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/90 group-hover:scale-150 transition-transform" />
              <span class="group-hover:text-white/90 transition-colors">Backend: Laravel, Node.js, RESTful APIs, GraphQL</span>
            </li>
            <li class="flex gap-3 items-start group">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/90 group-hover:scale-150 transition-transform" />
              <span class="group-hover:text-white/90 transition-colors">Database: MySQL, PostgreSQL, MongoDB, Redis</span>
            </li>
            <li class="flex gap-3 items-start group">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/90 group-hover:scale-150 transition-transform" />
              <span class="group-hover:text-white/90 transition-colors">DevOps: Docker, CI/CD, AWS, Git, Linux</span>
            </li>
          </ul>
          
          <!-- Skills progress -->
          <div class="mt-6 pt-6 border-t border-white/10">
            <h4 class="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">Core Competencies</h4>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-white/70">Frontend Development</span>
                  <span class="text-secondary">90%</span>
                </div>
                <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div class="h-full bg-secondary rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-white/70">Backend Development</span>
                  <span class="text-secondary">85%</span>
                </div>
                <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div class="h-full bg-secondary rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-white/70">Database Design</span>
                  <span class="text-secondary">80%</span>
                </div>
                <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div class="h-full bg-accent rounded-full" style="width: 80%"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isVisible.value = true;
    }
  });
};

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

