<template>
  <a
    :href="project.demo"
    target="_blank"
    rel="noopener noreferrer"
    class="block"
  >
    <div
      class="relative bg-zinc-900 rounded-2xl overflow-hidden
      shadow-[0_4px_10px_rgba(255,255,255,0.12)]
      hover:shadow-[0_8px_20px_rgba(255,255,255,0.18)]
      cursor-pointer border border-transparent hover:border-orange-400
      animate-pulse-card hover:scale-105 transition-transform duration-300"
    >
      <img
        :src="project.image"
        :alt="project.name"
        class="w-full h-60 object-cover rounded-t-2xl transition-transform duration-300"
      />

      <div class="p-6 flex flex-col gap-4">
        <h3 class="text-2xl font-extrabold text-white leading-snug tracking-tight">
          {{ project.name }}
        </h3>

        <p class="text-gray-300 text-base leading-relaxed min-h-[3.5rem]">
          {{ project.description }}
        </p>

        <div class="flex gap-3 flex-wrap text-xl text-white mt-auto">
          <IconTooltip
            v-for="tech in project.tech"
            :key="tech"
            :icon="tech"
            :label="tech"
            class="hover:text-orange-400 transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  </a>
</template>


<script setup lang="ts">
import IconTooltip from '../technologies/IconTooltip.vue'

defineProps<{
  project: {
    name: string
    description: string
    image: string
    tech: string[]
    features: string[]
    demo: string
    repo: string
  }
}>()
</script>

<style scoped>
@keyframes pulseCard {
  0%, 100% {
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
