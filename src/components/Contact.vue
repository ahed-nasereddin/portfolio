<template>
  <section id="contact" class="section bg-gradient-to-b from-primary via-accent/20 to-primary">
    <div class="section-inner">
      <header class="section-head text-center">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-subtitle mx-auto">
          Let’s build something great. Reach out via email, phone, or social.
        </p>
      </header>

      <div class="mx-auto grid max-w-4xl gap-6 lg:grid-cols-12">
        <!-- Contact details -->
        <div class="lg:col-span-7">
          <div class="surface p-6 sm:p-8">
            <div class="grid gap-4">
              <div
                data-aos="zoom-in"
                :data-aos-duration="400"
                class="surface surface-hover flex items-center justify-between gap-4 p-4"
              >
                <div class="flex items-center gap-3">
                  <MailIcon class="h-5 w-5 text-secondary" />
                  <div class="text-left">
                    <p class="text-xs font-semibold uppercase tracking-wide text-white/60">Email</p>
                    <p class="font-mono text-sm text-white/85 select-all whitespace-nowrap overflow-x-auto">
                      <span id="email"></span>
                    </p>
                  </div>
                </div>
                <a class="btn-ghost px-4 py-2" :href="contacts[0].href">Send</a>
              </div>

              <div
                data-aos="zoom-in"
                :data-aos-duration="500"
                class="surface surface-hover flex items-center justify-between gap-4 p-4"
              >
                <div class="flex items-center gap-3">
                  <PhoneIcon class="h-5 w-5 text-secondary" />
                  <div class="text-left">
                    <p class="text-xs font-semibold uppercase tracking-wide text-white/60">Phone</p>
                    <p class="font-mono text-sm text-white/85 select-all whitespace-nowrap overflow-x-auto">
                      <span id="number_phone"></span>
                    </p>
                  </div>
                </div>
                <a class="btn-ghost px-4 py-2" :href="contacts[1].href">Call</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Social links -->
        <div class="lg:col-span-5">
          <div class="surface p-6 sm:p-8">
            <h3 class="text-lg font-semibold text-white">Social</h3>
            <p class="mt-2 text-sm text-white/70">
              Prefer DMs? Choose a platform.
            </p>

            <div class="mt-6 grid grid-cols-2 gap-3">
              <a
                v-for="(item, index) in contacts"
                :key="index"
                :href="item.href"
                :target="item.external ? '_blank' : null"
                :rel="item.external ? 'noopener noreferrer' : null"
                :aria-label="item.name"
                :title="item.name"
                class="surface surface-hover flex items-center gap-3 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
              >
                <component :is="item.icon" class="h-5 w-5 text-secondary" />
                <span class="text-sm font-semibold text-white/85">{{ item.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from 'lucide-vue-next'

import { onMounted } from 'vue'
import Typewriter from "typewriter-effect/dist/core";

const email = 'ahed0naser0eddin@gmail.com'
const phone = '+971 525581486'

const contacts = [
  {
    name: 'Email',
    href: 'mailto:ahed0naser0eddin@gmail.com',
    icon: MailIcon,
  },
  {
    name: 'Phone',
    href: 'tel:+971525581486',
    icon: PhoneIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ahed666',
    icon: GithubIcon,
    external: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahed-naser-eddin-aa1648213/',
    icon: LinkedinIcon,
    external: true,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/971525581486',
    icon: MessageCircleIcon,
    external: true,
  }
]
function setWriter() {
  const emailSpan = document.getElementById("email");
  const numberPhoneSpan = document.getElementById("number_phone");

  if (!emailSpan || !numberPhoneSpan) return;

    const emailWriter = new Typewriter(emailSpan, {
      loop: false,
      delay: 70,
    });

    emailWriter
      .typeString(
      email
      )
      .start();

    const phoneWriter = new Typewriter(numberPhoneSpan, {
      loop: false,
      delay: 70,
    });

    phoneWriter
      .typeString(
      phone
      )
      .start();

    

 
  
}


onMounted(() => {
  // delay in ms

  setWriter();
});
</script>

<style scoped>
.caret {
  display: inline-block;
  width: 10px;
  height: 1.25rem;
  margin-left: 4px;
  background-color: #22c55e;
  animation: blink 1s steps(2, start) infinite;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  50.01%, 100% {
    opacity: 0;
  }
}
</style>
