<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="30"
      viewBox="0 0 72 30"
      class="animate-updown drop-shadow-lg cursor-pointer hover:black-gradient"
      @click="scrollNextSection"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    >
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1" v-if="!hovering">
          <stop offset="0%" class="stop1" />
          <stop offset="100%" class="stop2" />
        </linearGradient>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1" v-else>
          <stop offset="0%" stop-color="#000000" />
          <stop offset="100%" stop-color="#000000" />
        </linearGradient>
      </defs>
      <line
        x1="1.07678"
        y1="5.31461"
        x2="37.0768"
        y2="28.3146"
        stroke="url(#grad1)"
        stroke-width="4"
      />
      <line
        x1="70.2136"
        y1="1.59191"
        x2="36.2105"
        y2="27.4528"
        stroke="url(#grad1)"
        stroke-width="4"
      />
    </svg>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hovering = ref(false)

function scrollNextSection() {
  const nextSection = document.getElementById('indications')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes updown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
.animate-updown {
  animation: updown 3s ease-in-out infinite;
}

@keyframes stopColorAnim1 {
  0%,
  100% {
    stop-color: #f4ce36;
  }
  50% {
    stop-color: #000000;
  }
}
@keyframes stopColorAnim2 {
  0%,
  100% {
    stop-color: #f97316;
  }
  50% {
    stop-color: #000000;
  }
}

.stop1 {
  animation: stopColorAnim1 4s ease-in-out infinite;
}
.stop2 {
  animation: stopColorAnim2 4s ease-in-out infinite;
}
</style>
