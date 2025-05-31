<template>
  <div
    class="bg-neutral-50 w-full h-screen flex flex-col gap-3 items-center justify-center p-8"
    id="home"
    v-fade-in
  >
    <section
      class="flex md:flex-row h-full w-full justify-center md:justify-evenly items-center flex-col-reverse"
    >
      <div class="flex flex-col gap-[1em] h-max items-center md:items-baseline">
        <custom-name />
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left">
          Desenvolvedor <br />
          <span
            class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            Full-stack
          </span>
        </h1>

        <span class="text-base sm:text-lg md:text-xl italic text-center md:text-left">
          Desenvolvedor e analista com mais de 2 anos de experiência.
        </span>
        <email-card />
      </div>
      <img class="w-[30%] min-w-[200px] max-w-[800px] h-max" src="/src/assets/img/Face.svg" alt="" />
    </section>
    <next-page-arrow />
  </div>
</template>

<script setup lang="ts">
import NextPageArrow from './NextPageArrow.vue'
import EmailCard from './EmailCard.vue'
import CustomName from './CustomName.vue'
</script>
