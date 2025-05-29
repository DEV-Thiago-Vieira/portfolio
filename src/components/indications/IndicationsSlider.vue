<template>
  <section class="relative w-full max-w-3xl mx-auto select-none">
    <div
      class="w-full min-h-[28rem] relative flex items-center justify-center py-12 select-none transition-colors"
      :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
      @mousedown="startDrag"
      @touchstart="startDrag"
      @mousemove="onDrag"
      @touchmove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @touchend="endDrag"
      v-fade-in
    >
      <IndicationCard
        v-for="card in cards"
        :key="card.author"
        :author="card.author"
        :image-path="card.imagePath"
        :role="card.role"
        :message="card.message"
        class="absolute top-0 w-2/3 h-full rounded-lg transition-all duration-300"
        :style="cardStyle(card.id)"
      />
    </div>

    <div class="flex justify-center space-x-2 mt-4">
      <button
        v-for="index in totalSlides"
        :key="index"
        @click="goToSlide(index - 1)"
        :class="['w-3 h-3 rounded-full', currentIndex === index - 1 ? 'bg-black' : 'bg-gray-400']"
      ></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import IndicationCard from './IndicationCard.vue'

const cards = [
  {
    id: 1,
    author: 'Merykson Acácio',
    message: `Ótima pessoa e profissional. Com suas habilidades analíticas apuradas e facilidade de aprendizado, sempre que procurei ajudá-lo, obtive também valiosos aprendizados, tanto no âmbito profissional quanto pessoal.`,
    imagePath: '/src/assets/img/Merykson.jpg',
    role: 'Senior',
  },
  {
    id: 2,
    author: 'Renan Medeiros',
    message: `Um profissional sério, comprometido com tudo que lhe é atribuído e com autocontrole ímpar para ocasiões onde ninguém mais teria. Trabalhar com o Thiago foi um grande privilégio, certamente ele maneja seu tempo com maestria [...].`,
    imagePath: '/src/assets/img/Renan.jpg',
    role: 'Júnior',
  },
  {
    id: 3,
    author: 'Levy Avelino',
    message: `Thiago é um ótimo profissional capaz de se adaptar rapidamente a novos projetos e tecnologias, sempre que ele buscava orientação, fazia perguntas relevantes e assimilava rapidamente as soluções propostas.`,
    imagePath: '/src/assets/img/Levy.jpg',
    role: 'Senior',
  },
]

const totalSlides = 3
const currentIndex = ref(0)

const startX = ref(0)
const isDragging = ref(false)
const dragOffset = ref(0)

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    nextSlide()
  }, 4000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % totalSlides
}

function goToSlide(index: number) {
  currentIndex.value = index
}

function startDrag(event: MouseEvent | TouchEvent) {
  isDragging.value = true
  startX.value = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX
  clearInterval(interval)
}

function onDrag(event: MouseEvent | TouchEvent) {
  if (!isDragging.value) return
  const currentX = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX
  dragOffset.value = currentX - startX.value
}

function endDrag() {
  if (!isDragging.value) return

  if (dragOffset.value > 50) {
    prevSlide()
  } else if (dragOffset.value < -50) {
    nextSlide()
  }

  dragOffset.value = 0
  isDragging.value = false

  interval = setInterval(() => {
    nextSlide()
  }, 4000)
}

function cardStyle(i: number) {
  const relativeIndex = i - currentIndex.value
  const wrappedIndex =
    relativeIndex < -Math.floor(totalSlides / 2)
      ? relativeIndex + totalSlides
      : relativeIndex > Math.floor(totalSlides / 2)
        ? relativeIndex - totalSlides
        : relativeIndex

  const containerWidth = 640
  const sideCardOffsetPx = containerWidth / 2
  const translateX = sideCardOffsetPx * wrappedIndex + dragOffset.value

  const zIndex = wrappedIndex === 0 ? 30 : 10
  const blur = wrappedIndex === 0 ? 'blur(0px)' : 'blur(3px)'
  const scale = wrappedIndex === 0 ? 1 : 0.9
  const opacity = wrappedIndex === 0 ? 1 : 0.6

  return {
    transform: `translateX(${translateX}px) scale(${scale})`,
    filter: blur,
    zIndex,
    opacity,
    transition: isDragging.value
      ? 'none'
      : 'transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease',
  }
}
</script>
