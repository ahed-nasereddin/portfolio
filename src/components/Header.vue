<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Motion } from 'motion-v'
import { useRoute } from 'vue-router'
// import { createRouter } from 'vue-router'
function onEscKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    open.value = false
  }
}

const navItems = [
  
  { label: 'Home', to: '/' },
  // { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
]

onMounted(() => window.addEventListener('keydown', onEscKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onEscKey))
const open = ref(false)

const route = useRoute()
watch(
  () => route.path,
  () => {
    open.value = false
  }
)
</script>


  
 <template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-primary/70 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <router-link
        to="/"
        class="group inline-flex items-center gap-3 rounded-xl px-2 py-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
        aria-label="Go to home"
      >
        <span
          class="text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary to-white"
        >
          Ahed Naser Eddin
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden items-center gap-2 md:flex" aria-label="Primary">
        <Motion
          v-for="(item, index) in navItems"
          :key="index"
          :whileHover="{ scale: 1.06 }"
          :transition="{ type: 'spring', stiffness: 320 }"
        >
          <router-link
            :to="item.to"
            :class="[
              'relative rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60',
              $route.path === item.to
                ? 'bg-white/10 text-white'
                : 'text-white/75 hover:bg-white/7 hover:text-white'
            ]"
          >
            {{ item.label }}
            <span
              v-if="$route.path === item.to"
              class="pointer-events-none absolute inset-x-4 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-secondary/80 to-transparent"
            />
          </router-link>
        </Motion>
      </nav>

      <!-- Mobile menu button -->
      <button
        type="button"
        @click="open = !open"
        aria-label="Toggle menu"
        :aria-expanded="open"
        class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85 transition
        hover:border-white/20 hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
      >
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile drawer -->
    <transition name="slide-fade">
      <nav
        v-if="open"
        class="fixed z-50 top-0 right-0 h-full w-full max-w-sm border-l border-white bg-primary shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <!-- Animated mesh gradient background -->
       
        <!-- Header with profile -->
        <div class="relative z-10 px-6 bg-primary pt-8 pb-6">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-sm opacity-60"></div>
                <div class="relative h-10 w-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                  <span class="text-sm font-bold text-black">A</span>
                </div>
              </div>
              <div>
                <p class="text-sm font-semibold text-white">Ahed Naser Eddin</p>
                <p class="text-xs text-secondary">Full Stack Developer</p>
              </div>
            </div>
            <button
              type="button"
              @click="open = false"
              aria-label="Close menu"
              class="group relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white/80 transition-all duration-300
              hover:border-secondary/40 hover:bg-secondary/15 hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
            >
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/25 to-accent/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Decorative line -->
          <div class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <!-- Navigation items -->
        <div class="relative z-10  bg-primary px-6 py-4">
          <p class="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 px-2">Menu</p>
          <div class="space-y-1">
            <router-link
              v-for="(item, index) in navItems"
              :key="index"
              :to="item.to"
              :class="[
                'group relative flex items-center gap-4 rounded-2xl px-4 py-4 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60',
                $route.path === item.to 
                  ? 'bg-gradient-to-r from-secondary/30 to-accent/20 text-white shadow-lg shadow-secondary/10' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              ]"
            >
              <!-- Icon background for active state -->
              <div 
                v-if="$route.path === item.to"
                class="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/10"
              ></div>
              
              <!-- Left accent bar for active state -->
              <div 
                v-if="$route.path === item.to"
                class="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-gradient-to-b from-secondary to-accent"
              ></div>

              <!-- Navigation icon -->
              <div 
                :class="[
                  'flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300',
                  $route.path === item.to 
                    ? 'bg-gradient-to-r from-secondary to-accent text-black' 
                    : 'bg-white/10 text-white/70 group-hover:bg-white/15 group-hover:text-white'
                ]"
              >
                <svg v-if="item.label === 'Home'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <svg v-else-if="item.label === 'Projects'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>

              <span class="relative">{{ item.label }}</span>

              <!-- Arrow indicator -->
              <svg 
                :class="[
                  'ml-auto h-4 w-4 transition-all duration-300',
                  $route.path === item.to ? 'text-secondary opacity-100 translate-x-0' : 'text-white/40 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                ]"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Social links section -->
        <div class="relative z-10 bg-primary px-6 py-4">
          <p class="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 px-2">Connect</p>
          <div class="flex gap-2">
            <a 
              href="https://github.com/ahed666" 
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/15 hover:text-white hover:scale-105"
              aria-label="GitHub"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/ahed-naser-eddin-aa1648213/" 
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/15 hover:text-white hover:scale-105"
              aria-label="LinkedIn"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="#contact" 
              @click="open = false"
              class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/15 hover:text-white hover:scale-105"
              aria-label="Email"
            >
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Footer CTA -->
        <div class="absolute bottom-0 bg-primary left-0 right-0 p-6">
          <div class="relative rounded-2xl border border-white/15 bg-gradient-to-r from-secondary/20 to-accent/15 p-4 backdrop-blur-sm">
            <div class="flex items-center gap-3 mb-3">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20">
                <svg class="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p class="text-sm font-semibold text-white">Available for work</p>
            </div>
            <a 
              href="#contact" 
              @click="open = false"
              class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-secondary to-accent px-4 py-3 text-sm font-bold text-black shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
            >
              <span>Get in Touch</span>
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </transition>

    <!-- Overlay -->
    <transition name="fade">
      <div
        v-if="open"
        @click="open = false"
        class="fixed z-40 inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      ></div>
    </transition>
  </header>

</template>
<style>
    .slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Animated blob background */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(30px, 10px) scale(1.05);
  }
}

.animate-blob {
  animation: blob 20s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>




