<template>
  <header-menu />
  <home-section />
  <indications-section />
  <projects-section />

  <section
    id="next-section"
    class="h-screen w-full text-white bg-black flex items-center justify-center text-4xl font-bold"
    v-fade-in
  >
    Próxima Seção
  </section>
</template>

<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue'
import HomeSection from '@/components/HomeSection.vue'
import IndicationsSection from '@/components/IndicationsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
</script>

<style scoped></style>
