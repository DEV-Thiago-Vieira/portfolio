<template>
  <section
    id="projects"
    class="bg-zinc-900 w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 gap-10"
  >
    <h1 class="text-3xl font-bold text-white text-center">Alguns de meus projetos</h1>

    <blockquote class="text-center max-w-xl italic text-gray-300 px-4">
      <p class="text-lg leading-relaxed">
        "Fiz um acordo de coexistência pacífica com o tempo: Nem ele me persegue, nem eu fujo dele,
        um dia a gente se encontra."
      </p>
      <cite class="block mt-2 text-sm not-italic font-medium text-gray-400"> — Mário Lago </cite>
    </blockquote>
    <div class="flex flex-wrap justify-center gap-10 w-full mx-auto">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    name: 'Project 1',
    description: 'App de gerenciamento de tarefas com autenticação.',
    image: 'https://thiago-vieira.com/assets/ProjectExample.png',
    tech: [
      { icon: 'logos:vue', label: 'Vue.js' },
      { icon: 'logos:nodejs', label: 'Node.js' },
    ],
    features: ['Login JWT', 'Painel responsivo', 'Notificações em tempo real'],
    demo: 'https://thiago-vieira.com',
    repo: 'https://github.com',
  },
  {
    name: 'Project 2',
    description: 'Landing page moderna com animações e design responsivo.',
    image: 'https://thiago-vieira.com/assets/ProjectExample.png',
    tech: [
      { icon: 'logos:vue', label: 'Vue.js' },
      { icon: 'logos:nodejs', label: 'Node.js' },
    ],
    features: ['Scroll animado', 'SEO otimizado', 'Design mobile-first'],
    demo: 'https://thiago-vieira.com',
    repo: 'https://github.com',
  },
  {
    name: 'Project 3',
    description: 'Dashboard analítico com gráficos dinâmicos.',
    image: 'https://thiago-vieira.com/assets/ProjectExample.png',
    tech: [
      { icon: 'logos:vue', label: 'Vue.js' },
      { icon: 'logos:nodejs', label: 'Node.js' },
    ],
    features: ['Gráficos interativos', 'Dark mode', 'Filtros avançados'],
    demo: 'https://thiago-vieira.com',
    repo: 'https://github.com',
  },
]
</script>
