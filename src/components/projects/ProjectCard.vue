<template>
  <div
    class="w-full sm:w-[22rem] md:w-[24rem] lg:w-[26rem] flex-shrink-0 bg-neutral-50 rounded-2xl overflow-hidden shadow-[0_4px_10px_rgba(255,255,255,0.12)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.18)] border border-transparent hover:border-orange-400 animate-pulse-card transition-transform duration-300 hover:scale-105"
  >
    <a :href="project.demo" target="_blank" rel="noopener noreferrer">
      <img
        :src="project.image"
        :alt="project.name"
        class="w-full h-60 object-cover rounded-t-2xl transition-transform duration-300"
      />
    </a>

    <div class="p-6 flex flex-col gap-4 h-full">
      <h3 class="text-2xl font-bold leading-snug tracking-tight text-gray-800">
        {{ project.name }}
      </h3>

      <p class="text-gray-600 text-base leading-relaxed min-h-[3.5rem]">
        {{ project.description }}
      </p>
      <div class="flex gap-2 flex-wrap mt-2">
        <div
          v-for="tech in project.tech"
          :key="tech.label"
          class="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:text-orange-500 transition-colors duration-200"
        >
          <IconTooltip :icon="tech.icon" :label="tech.label" class="text-lg" />
          <span class="hidden sm:inline">{{ tech.label }}</span>
        </div>
      </div>

      <div class="flex justify-between mt-4 gap-4">
        <a
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 text-center bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
        >
          Acessar projeto
        </a>
        <a
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 text-center border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:border-orange-400 hover:text-orange-500 transition-colors duration-200"
        >
          Código fonte
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTooltip from '../common/IconTooltip.vue'

defineProps<{
  project: {
    name: string
    description: string
    image: string
    tech: { icon: string; label: string }[]
    features: string[]
    demo: string
    repo: string
  }
}>()
</script>

<style scoped>
@keyframes pulseCard {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.12);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.18);
  }
}

.animate-pulse-card {
  animation: pulseCard 4s ease-in-out infinite;
}
</style>
