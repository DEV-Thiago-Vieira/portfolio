<template>
  <header class="flex justify-between w-full p-8 fixed bg-neutral-50 z-10">
    <img src="../assets/img/Icon.svg" alt="" />
    <span class="text-xl italic">Sobre e serviços -></span>
  </header>
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
</script>

<style scoped></style>
