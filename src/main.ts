import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Typewriter from 'typewriter-effect/dist/core';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { createHead } from '@vueuse/head';

const head = createHead();

AOS.init({
  duration: 800,
  once: true,
});
createApp(App).use(router).use(head).mount('#app')
