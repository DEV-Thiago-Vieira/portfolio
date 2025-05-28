<template>
  <div class="bg-neutral-50 w-full h-screen flex flex-col gap-3 items-center justify-center p-8">
    <section class="flex h-full w-full justify-evenly items-center">
      <div class="flex flex-col gap-[1em] h-max">
        <custom-name />
        <h1 class="text-7xl font-bold">
          Desenvolvedor <br/>
          <span
            class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            Full-stack
          </span>
        </h1>
        <span class="text-xl italic"
          >Desenvolvedor e analista com mais de 2 anos de experiência.</span
        >
        <email-card />
      </div>
      <img class="w-[30%] min-w-[300px] max-w-[800px] h-max" src="../assets/img/Face.svg" alt="" />
    </section>
  </div>
</template>

<script setup lang="ts">
import CustomName from './home/CustomName.vue'
import EmailCard from './home/EmailCard.vue'
</script>
<style scoped></style>
