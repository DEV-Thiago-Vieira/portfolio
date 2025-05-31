<template>
  <div class="relative w-max">
    <div
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      @click="handleClick"
      class="relative flex items-center rounded-[5px] h-12 border border-black w-max cursor-pointer overflow-hidden select-none z-10 cute-bounce hover:animate-none"
    >
      <div
        class="absolute top-0 left-0 h-full w-full bg-black transition-transform duration-700 ease-in-out"
        :class="hover && !clicked ? 'translate-x-0' : '-translate-x-full'"
        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      ></div>

      <div
        class="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-transform duration-700 ease-in-out"
        :class="clicked ? 'translate-x-0' : '-translate-x-full'"
        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      ></div>

      <div class="relative flex items-center w-full z-10">
        <div
          class="p-2 border-r w-[50px] border-black rounded-l h-full flex items-center justify-center transition-colors duration-700"
          :class="hover && !clicked ? 'border-white' : 'border-black'"
        >
          <img
            class="w-5 transition duration-700"
            :class="hover && !clicked ? 'filter invert' : ''"
            src="/src/assets/img/mail.svg"
            alt="Email icon"
          />
        </div>
        <div
          class="p-2 rounded-r flex items-center justify-center transition-colors duration-700"
          :class="hover && !clicked ? 'text-white' : 'text-black'"
        >
          <span class="px-3 text-sm font-medium whitespace-nowrap">
            {{ clicked ? 'Copiado com sucesso!' : 'contact@thiago-vieira.com' }}
          </span>
        </div>
      </div>
    </div>

    <img
      src="/src/assets/img/ActionCall.svg"
      alt=""
      class="hidden md:block absolute -top-0 -left-40 w-32 pointer-events-none scale-x-[-1] scale-y-[-1]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hover = ref(false)
const clicked = ref(false)

const handleClick = () => {
  navigator.clipboard.writeText('contact@thiago-vieira.com')
  clicked.value = true

  setTimeout(() => {
    clicked.value = false
  }, 2000)
}
</script>

<style scoped>
@keyframes cute-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.cute-bounce {
  animation: cute-bounce 1.6s ease-in-out infinite;
}
</style>
