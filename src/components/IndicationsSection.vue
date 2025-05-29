<template>
  <div
    class="bg-zinc-900 w-full flex min-h-[80vh] flex-col gap-6 items-center justify-center p-8 overflow-hidden pt-[100px]"
    id="indications"
    v-fade-in
  >
    <h1 class="relative text-3xl font-bold mt-10 text-center orange-500 text-white" v-fade-in>
      Indicações de colegas queridos
    </h1>

    <blockquote class="text-center max-w-xl italic text-gray-300 px-4" v-fade-in>
      <p class="text-lg leading-relaxed">
        "As pessoas mais eficazes são aquelas que entendem a importância da interdependência."
      </p>
      <cite class="block mt-2 text-sm not-italic font-medium text-gray-400"> — Stephen Covey </cite>
    </blockquote>

    <IndicationsSlider />
  </div>
</template>

<script setup lang="ts">
import IndicationsSlider from './indications/IndicationsSlider.vue'
</script>
