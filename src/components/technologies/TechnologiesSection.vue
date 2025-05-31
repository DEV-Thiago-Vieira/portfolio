<template>
  <section
    id="technologies"
    class="bg-neutral-50 w-full min-h-[60vh] flex flex-col items-center justify-center px-6 py-20"

  >
    <h1 class="relative text-3xl font-bold mt-10 text-center" >Principais tecnologias que domino</h1>

    <blockquote class="text-center max-w-xl italic text-gray-500 px-4 mb-10" >
      <p class="text-lg leading-relaxed">"A tecnologia é melhor quando reúne as pessoas."</p>
      <cite class="block mt-2 text-sm not-italic font-medium text-gray-400">
        — Matt Mullenweg
      </cite>
    </blockquote>

    <div class="flex w-full items-center justify-center gap-[2rem] flex-wrap">
      <TechnologiesCard role="Front End">
        <div class="flex gap-6 text-3xl w-full m-[1rem] items-center justify-center">
          <IconTooltip icon="logos:vue" label="Vue.js" />
          <IconTooltip icon="logos:angular-icon" label="Angular" />
          <IconTooltip icon="logos:sass" label="SCSS" />
          <IconTooltip icon="logos:tailwindcss-icon" label="TailwindCSS" />
        </div>
      </TechnologiesCard>
      <TechnologiesCard role="Back End">
        <div class="flex flex-wrap gap-6 text-3xl w-full m-[1rem] items-center justify-center">
          <IconTooltip icon="logos:java" label="Java" />
          <IconTooltip icon="logos:spring-icon" label="Spring" />
          <IconTooltip icon="logos:postgresql" label="PostgreSQL" />
          <IconTooltip icon="simple-icons:oracle" label="Oracle" />
        </div>
      </TechnologiesCard>
      <TechnologiesCard role="Design / Outros">
        <div class="flex flex-wrap gap-6 text-3xl w-full m-[1rem] items-center justify-center">
          <IconTooltip icon="logos:figma" label="Figma" />
          <IconTooltip icon="simple-icons:hostinger" label="Hostinger" />
        </div>
      </TechnologiesCard>
    </div>

    <p class="text-sm text-gray-400 mt-12 text-center">
      E estou sempre disposto a aprender mais se necessário.
    </p>
  </section>
</template>

<script setup lang="ts">
import TechnologiesCard from './TechnologiesCard.vue'
import IconTooltip from './IconTooltip.vue'
</script>
