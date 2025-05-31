<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  icon: string
  label: string
}>()
</script>

<template>
  <div class="relative group">
    <Icon
      :icon="icon"
      class="cursor-pointer transition-transform group-hover:scale-110 duration-300"
    />
    <span
      class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50"
    >
      {{ label }}
    </span>
  </div>
</template>
