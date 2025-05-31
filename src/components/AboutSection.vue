<template>
  <div
    class="bg-zinc-900 text-white w-full flex min-h-[80vh] gap-6 items-center flex-col justify-center p-8 overflow-hidden pt-[100px]"
    id="about"
    v-fade-in
  >
    <div>
      <h1 class="relative text-3xl font-bold mt-10 text-center orange-500" v-fade-in>Sobre mim</h1>

      <blockquote class="text-center max-w-xl italic text-gray-500 px-4" v-fade-in>
        <p class="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente deleniti
          maxime voluptatibus dolorem eaque repellendus quo repudiandae, fugit numquam. Fugiat
          mollitia dolorem quo officiis nostrum laborum, recusandae incidunt error.
        </p>
        <cite class="block mt-2 text-sm not-italic font-medium text-gray-400">
          — Stephen Covey
        </cite>
      </blockquote>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
