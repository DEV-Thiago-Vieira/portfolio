<template>
  <header-menu />
  <home-section />

  <section
    id="next-section"
    class="h-screen w-full bg-white flex items-center justify-center text-4xl font-bold"
  >
    Próxima Seção
  </section>
</template>

<script setup lang="ts">
import HomeSection from '@/components/HomeSection.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'
</script>

<style scoped></style>
