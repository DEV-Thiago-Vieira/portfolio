<template>
  <div
    class="bg-zinc-900 w-full flex min-h-[80vh] flex-col gap-6 items-center justify-center p-8 overflow-hidden pt-[100px]"
    id="projects"
    v-fade-in
  >
    <h1 class="relative text-3xl font-bold mt-10 text-center text-white" v-fade-in>
      Alguns de meus projetos
    </h1>

    <blockquote class="text-center max-w-xl italic text-gray-300 px-4" v-fade-in>
      <p class="text-lg leading-relaxed">
        "Fiz um acordo de coexistência pacífica com o tempo: Nem ele me persegue, nem eu fujo dele,
        um dia a gente se encontra."
      </p>
      <cite class="block mt-2 text-sm not-italic font-medium text-gray-400"> — Mário Lago </cite>
    </blockquote>

    <div
      class="w-[80%] h-[720px] bg-zinc-800 rounded-xl overflow-hidden hover:shadow-2xl transition-transform duration-300 transform snap-center flex flex-col"
    >
      <!-- Top Bar -->
      <div class="flex items-center gap-8 p-5 bg-neutral-50 rounded-t-xl">
        <div class="flex items-center gap-3">
          <div class="h-4 w-4 rounded-full bg-red-500"></div>
          <div class="h-4 w-4 rounded-full bg-yellow-400"></div>
          <div class="h-4 w-4 rounded-full bg-green-500"></div>
        </div>

        <div
          class="bg-neutral-300 rounded-xl mx-auto w-[60%] px-6 py-3 flex items-center gap-3 justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 10V7a4 4 0 00-8 0v3" />
            <rect
              x="6"
              y="10"
              width="12"
              height="10"
              rx="2"
              ry="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="text-xl font-thin">thiago-vieira.com</p>
        </div>

        <img src="/src/assets/img/Icon.svg" alt="Icon">
      </div>

      <!-- Slider Section -->
      <div class="relative w-full h-full overflow-hidden">
        <div
          class="flex transition-transform duration-700 ease-in-out h-full"
          :style="{ transform: `translateX(-${current * 100}%)` }"
        >
          <div
            v-for="(project) in projects"
            :key="project.name"
            class="flex-shrink-0 w-full flex flex-col md:flex-row gap-8 items-center justify-center p-6 text-white"
          >
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full md:w-1/2 rounded-lg shadow-md object-cover"
            />
            <div class="flex flex-col gap-4 max-w-md">
              <h2 class="text-2xl font-bold">{{ project.name }}</h2>
              <p class="text-gray-300 text-sm">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
              <ul class="list-disc pl-5 text-sm text-gray-300">
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
              <div class="flex gap-4 mt-2">
                <a
                  :href="project.demo"
                  target="_blank"
                  class="underline text-orange-400 hover:text-orange-300"
                  >Live Demo</a
                >
                <a
                  :href="project.repo"
                  target="_blank"
                  class="underline text-gray-400 hover:text-white"
                  >GitHub</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicators -->
      <div class="flex justify-center gap-3 py-4 bg-neutral-50">
        <button
          v-for="(project, index) in projects"
          :key="project.name"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="current === index ? 'bg-yellow-400 scale-125' : 'bg-gray-600'"
          @click="current = index"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const current = ref(0)

const projects = [
  {
    name: 'Project 1',
    description: 'A full-stack app for task management with real-time sync.',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    features: ['Real-time sync', 'Auth with JWT', 'Responsive dashboard'],
    image: '/src/assets/img/ProjectExample.png',
    demo: 'https://thiago-vieira.com',
    repo: 'https://github.com',
  },
  {
    name: 'Project 2',
    description: 'A full-stack app for task management with real-time sync.',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    features: ['Real-time sync', 'Auth with JWT', 'Responsive dashboard'],
    image: '/src/assets/img/ProjectExample.png',
    demo: 'https://thiago-vieira.com',
    repo: 'https://github.com',
  },
  {
    name: 'Project 3',
    description: 'A full-stack app for task management with real-time sync.',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    features: ['Real-time sync', 'Auth with JWT', 'Responsive dashboard'],
    image: '/src/assets/img/ProjectExample.png',
    demo: 'https://thiago-vieira.com',
    repo: 'https://github.com',
  },
]

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % projects.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* Removed fade styles as requested */
</style>
