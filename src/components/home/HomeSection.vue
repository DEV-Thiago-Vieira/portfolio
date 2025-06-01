<template>
  <div
    class="bg-neutral-50 w-full h-screen flex flex-col gap-3 items-center justify-center p-8"
    id="home"
  >
    <section
      class="flex md:flex-row min-h-[80%] w-full justify-center md:justify-evenly items-center flex-col-reverse"
    >
      <div class="flex flex-col gap-[1em] h-max items-center md:items-baseline">
        <custom-name />
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left">
          Desenvolvedor <br />
          <div
            class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent flex flex-col md:flex-row items-center md:items-center gap-4 justify-center md:justify-start"
          >
            <span>Full-stack</span>

            <div class="flex gap-5">
              <a
                href="https://github.com/DEV-Thiago-Vieira"
                target="_blank"
                rel="noopener"
                class="text-3xl"
              >
                <IconTooltip icon="logos:github-icon" label="GitHub" />
              </a>
              <a
                href="https://linkedin.com/in/thiago-vieira-899655214/"
                target="_blank"
                rel="noopener"
                class="text-3xl"
              >
                <IconTooltip icon="logos:linkedin-icon" label="LinkedIn" />
              </a>
            </div>
          </div>
        </h1>

        <span class="text-base sm:text-lg md:text-xl italic text-center md:text-left">
          Desenvolvedor e analista com mais de 2 anos de experiência.
        </span>
        <email-card />
      </div>
      <img
        class="w-[30%] min-w-[200px] max-w-[800px] h-max"
        src="/src/assets/img/Face.png"
        alt=""
      />
    </section>
    <next-page-arrow />
  </div>
</template>

<script setup lang="ts">
import NextPageArrow from './NextPageArrow.vue'
import EmailCard from './EmailCard.vue'
import CustomName from './CustomName.vue'
import IconTooltip from '../common/IconTooltip.vue'
</script>
