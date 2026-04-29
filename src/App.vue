<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { Analytics } from "@vercel/analytics/vue";
</script>

<template>
  <div class="bg-primary  text-white">
    <Header/>
       <router-view />
    <Footer/>
    
  </div>
</template>

