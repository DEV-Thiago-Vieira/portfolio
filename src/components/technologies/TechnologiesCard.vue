<template>
  <div class=" w-full max-w-[300px] p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 active:scale-95">
    <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
      <span class="text-orange-500 font-bold text-xl">#</span>
      {{ role }}
    </h2>

    <div class="flex flex-wrap gap-4 justify-start">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  role: string
}>()
</script>
