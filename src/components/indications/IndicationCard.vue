<template>
  <div
    class="flex w-screen h-max justify-center space-x-6 overflow-x-auto snap-x snap-mandatory px-6 py-10 pb-16 overflow-visible"
  >
    <div
      class="max-w-sm min-w-[300px] p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 active:scale-95 snap-center cursor-grab"
    >
      <h2 class="text-lg font-semibold mb-4">{{ props.role }}</h2>
      <div class="text-gray-700 mb-4 flex gap-[1rem]">
        <span class="text-5xl text-orange-500 text-right leading-none block w-min mb-2">“</span>
        <p class="mt-2 block w-[90%] mx-auto">
          {{ message }}
        </p>
        <span class="text-5xl text-orange-500 text-right leading-none block w-min self-end h-2"
          >”</span
        >
      </div>
      <div class="flex items-center space-x-3 mt-8">
        <img class="w-10 h-10 rounded-full" :src="props.imagePath" :alt="props.author" />
        <div>
          <p class="font-semibold">{{ props.author }}</p>
          <a href="#" class="text-black hover:text-gray-700">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  message: { type: String, required: true },
  imagePath: { type: String, required: true },
  role: { type: String, required: true },
  author: { type: String, required: true },
})
</script>
