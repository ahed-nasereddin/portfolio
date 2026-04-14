<template>
  <section class="relative isolate overflow-hidden bg-primary">
    <!-- Animated Background -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <!-- Animated gradient orbs -->
      <div class="animated-orb orb-1" />
      <div class="animated-orb orb-2" />
      <div class="animated-orb orb-3" />
      
      <!-- Dot pattern -->
      <div
        class="absolute inset-0 opacity-[0.06]"
        style="
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.7) 1px, transparent 0);
          background-size: 26px 26px;
        "
      />
      
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-primary via-primary to-accent/25" />
      
      <!-- Animated mesh gradient -->
      <div class="mesh-gradient" />
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-5">
      <div v-for="i in 20" :key="i" class="particle" :style="particleStyle(i)" />
    </div>

    <div class="section-inner flex min-h-screen items-center py-16">
      <div class="grid w-full items-center gap-12 md:grid-cols-2">
        <!-- Text -->
        <div class="order-2 md:order-1 hero-content">
          <div class="hero-badge animate-fade-in-up">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Full Stack Developer
            </span>
          </div>

          <!-- Keep IDs for typewriter; it injects innerHTML -->
          <h1
            id="name"
            class="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up"
            :style="{ animationDelay: '0.1s' }"
          >
            Full Stack <span class="text-secondary">Developer</span>
          </h1>

          <p
            id="role"
            class="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/75 sm:text-xl animate-fade-in-up"
            :style="{ animationDelay: '0.2s' }"
          >
            Building scalable web applications with <span class="font-medium text-white">Laravel</span>,
            <span class="font-medium text-white">Vue.js</span>, and <span class="font-medium text-white">modern technologies</span>.
          </p>

          <p class="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base animate-fade-in-up"
             :style="{ animationDelay: '0.3s' }">
            I specialize in building production-ready web systems with robust APIs, business logic, and performance optimization.
            From backend architecture to frontend interfaces, I craft seamless digital experiences that drive business growth.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-in-up"
               :style="{ animationDelay: '0.4s' }">
            <router-link to="/projects" class="btn-primary btn-glow">
              <span>View Projects</span>
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </router-link>

            <a href="#contact" class="btn-ghost">
              <span>Contact Me</span>
            </a>
          </div>

          <!-- Social proof / Quick stats -->
          <div class="mt-12 flex gap-8 animate-fade-in-up" :style="{ animationDelay: '0.5s' }">
            <div class="flex items-center gap-2 text-white/60">
              <div class="flex -space-x-2">
                <div class="h-8 w-8 rounded-full bg-secondary/20 border border-white/10 flex items-center justify-center text-xs">💼</div>
                <div class="h-8 w-8 rounded-full bg-accent/20 border border-white/10 flex items-center justify-center text-xs">🚀</div>
                <div class="h-8 w-8 rounded-full bg-secondary/10 border border-white/10 flex items-center justify-center text-xs">✨</div>
              </div>
              <span class="text-sm">Trusted by industry leaders</span>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="order-1 md:order-2 hero-image">
          <div class="profile-wrapper">
            <div class="profile-glow" />
            <div class="profile-ring" />
            <ProfileImage />
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
      <div class="h-8 w-px bg-gradient-to-b from-secondary to-transparent" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Typewriter from "typewriter-effect/dist/core";
import ProfileImage from "./ProfileImage.vue";

const borderVisible = ref(false);

const particleStyle = (index: number) => {
  const size = Math.random() * 4 + 2;
  const left = Math.random() * 100;
  const delay = Math.random() * 20;
  const duration = Math.random() * 10 + 15;
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

function setWriter() {
  const name = document.getElementById("name");
  const role = document.getElementById("role");
  if (name) {
    const nameWriter = new Typewriter(name, {
      loop: false,
      delay: 70,
    });

    nameWriter
      .typeString(
        'Full Stack <span class="text-accent">Developer</span>'
      )
      .start();
  }

  if (role) {
    const roleWriter = new Typewriter(role, {
      loop: false,
      delay: 50,
    });

    roleWriter
      .typeString("Laravel • Vue.js • Modern Web Applications")
      .pauseFor(450)
      .typeString("<br/>Building scalable & performant solutions")
      .start();
  }
}
onMounted(() => {
  setTimeout(() => {
    borderVisible.value = true;
  }, 300);

  setWriter();
});
</script>

<style scoped>
/* Animated gradient orbs */
.animated-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orbFloat 20s ease-in-out infinite;
}

.orb-1 {
  width: 520px;
  height: 520px;
  background: rgba(0, 255, 136, 0.12);
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: rgba(0, 115, 68, 0.2);
  bottom: -5%;
  left: -5%;
  animation-delay: -7s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: rgba(0, 255, 136, 0.08);
  top: 40%;
  right: -5%;
  animation-delay: -14s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -50px) scale(1.1); }
  50% { transform: translate(-20px, 30px) scale(0.95); }
  75% { transform: translate(40px, 20px) scale(1.05); }
}

/* Mesh gradient overlay */
.mesh-gradient {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 20% 50%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(0, 115, 68, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(0, 255, 136, 0.03) 0%, transparent 50%);
  animation: meshShift 30s ease-in-out infinite;
}

@keyframes meshShift {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* Floating particles */
.particle {
  position: absolute;
  background: rgba(0, 255, 136, 0.3);
  border-radius: 50%;
  animation: particleFloat linear infinite;
  bottom: -10px;
}

@keyframes particleFloat {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
}

/* Hero content animations */
.hero-content {
  animation: slideInLeft 1s ease-out;
}

.hero-image {
  animation: slideInRight 1s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-up {
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
  opacity: 0;
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Button glow effect */
.btn-glow {
  position: relative;
  overflow: hidden;
}

.btn-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.btn-glow:hover::before {
  left: 100%;
}

/* Profile image wrapper */
.profile-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-glow {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.2) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
}

.profile-ring {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 2px solid rgba(0, 255, 136, 0.2);
  animation: ringPulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes ringPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.05); opacity: 0.6; }
}

/* Badge animation */
.hero-badge {
  display: inline-block;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .orb-1 { width: 300px; height: 300px; }
  .orb-2 { width: 250px; height: 250px; }
  .orb-3 { width: 200px; height: 200px; }
  .profile-glow { width: 250px; height: 250px; }
  .profile-ring { width: 220px; height: 220px; }
}
</style>
