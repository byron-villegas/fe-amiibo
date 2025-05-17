<script setup lang="ts">
import "bootstrap"
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import AmiiboGameSerie from './components/AmiiboGameSerie.vue';

const route = useRoute();
</script>

<template>
  <div id="root">
      <Navbar />
      <AmiiboGameSerie v-if="route.path === '/'" />
      <RouterView />
      <Footer />
  </div>
</template>