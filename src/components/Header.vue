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
        class="fixed z-50 top-0 right-0 h-full w-[min(20rem,85vw)] border-l border-white/10 bg-primary/90 backdrop-blur p-6 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div class="flex items-center justify-between">
          <p class="text-sm font-semibold text-white/80">Menu</p>
          <button
            type="button"
            @click="open = false"
            aria-label="Close menu"
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85 transition
            hover:border-white/20 hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
          >
            ✕
          </button>
        </div>

        <div class="mt-6 grid gap-2">
          <router-link
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.to"
            :class="[
              'rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60',
              $route.path === item.to ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/7 hover:text-white'
            ]"
          >
            {{ item.label }}
          </router-link>
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
  transition: all 0.3s ease;
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
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>




